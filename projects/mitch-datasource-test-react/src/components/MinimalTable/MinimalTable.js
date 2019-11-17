import React, { useState, useCallback, useEffect } from "react";

export default function(props) {
  // Declare component states to sync up with the
  // datasource properties and to display down the road
  const [componentData, setComponentData] = useState({
    loading: false,
    page: 0,
    totalPages: 0,
    total: 0,
    pageTotal: 0,
    size: 0,
    offset: 0,
    searchText: 0,
    searchArguments: {},
    sortArguments: {},
    data: [],
  });

  // Syncs the component's state with the datasource
  let syncComponentWithDatasource = useCallback(() => {
    if (!props.datasource) {
      return;
    }
    setComponentData({
      page: props.datasource.page,
      totalPages: props.datasource.totalPages,
      total: props.datasource.total,
      pageTotal: props.datasource.pageTotal,
      size: props.datasource.size,
      offset: props.datasource.offset,
      data: props.datasource.data,
    });
  }, [props.datasource]);

  // Attach listeners to sync component state
  // when datasource's data changes
  useEffect(() => {
    syncComponentWithDatasource();
    props.datasource.addListener('updatestart', syncComponentWithDatasource);
    props.datasource.addListener('updateend', syncComponentWithDatasource);
    
    // Cleanup called on unmount event
    return () => {
      props.datasource.removeListener('updatestart', syncComponentWithDatasource);
      props.datasource.removeListener('updateend', syncComponentWithDatasource);
    }
  }, [props.datasource, syncComponentWithDatasource]);

  let goToPage = useCallback(async page => {
    let success = await props.datasource.goToPage(page);
    if (!success) {
      alert(`Failed to go to page ${page}...`);
    }
  }, [props.datasource]);

  if (!props.datasource) {
    return <div style={{ color: "crimson" }}>No datasource supplied</div>;
  } else if (!componentData.data || componentData.data.length <= 0) {
    return <div style={{ color: 'crimson' }}> No data... </div>;
  } else {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Job</th>
              <th>Gender</th>
              <th>Has Citizenship?</th>
            </tr>
          </thead>
          <tbody>
            {componentData.data.map(function(value, index, arr) {
              return (
                <tr key={value.id}>
                  <td>{value.id}</td>
                  <td>{value.firstName}</td>
                  <td>{value.lastName}</td>
                  <td>{value.job}</td>
                  <td>{value.gender}</td>
                  <td>{value.hasCitizenship ? "Yes" : "No"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <br />
        <table border="1">
          <tbody>
            <tr>
              <td>
                <div>
                  Page {componentData.page} of {componentData.totalPages}
                </div>
                <div>Total: {componentData.total}</div>
                <div>Total Items on Page: {componentData.pageTotal}</div>
                <div>Size: {componentData.size}</div>
                <div>Offset: {componentData.offset}</div>
              </td>
              <td>
                <h4>Pagination</h4>
                <div>
                  {
                    [...Array(componentData.totalPages).keys()].map((value) => {
                      const pageNumber = value + 1;
                      return <button key={pageNumber} onClick={() => { goToPage(pageNumber) }}>{pageNumber}</button>;
                    })
                  }
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
