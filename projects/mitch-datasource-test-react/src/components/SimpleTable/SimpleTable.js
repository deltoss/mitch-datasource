import React, { useState, useEffect, useCallback } from 'react';

export default function(props) {
  // State for input fields
  const [inputSize, setInputSize] = useState(0);
  const [inputSearchText, setInputSearchText] = useState('');
  const [inputPageToGoTo, setInputPageToGoTo] = useState('');
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
      loading: props.datasource.loading,
      page: props.datasource.page,
      totalPages: props.datasource.totalPages,
      total: props.datasource.total,
      pageTotal: props.datasource.pageTotal,
      size: props.datasource.size,
      offset: props.datasource.offset,
      searchText: props.datasource.searchText,
      searchArguments: props.datasource.searchArguments,
      sortArguments: props.datasource.sortArguments,
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

  let updateDatasourceSize = useCallback(async () => {
    props.datasource.size = parseInt(inputSize);
    await props.datasource.update();
  }, [props.datasource, inputSize]);

  let nextPage = useCallback(async () => {
    let success = await props.datasource.nextPage();
    if (!success) {
      alert('Failed to go to next page...');
    }
  }, [props.datasource]);

  let prevPage = useCallback(async () => {
    let success = await props.datasource.prevPage();
    if (!success) {
      alert('Failed to go to previous page...');
    }
  }, [props.datasource]);

  let goToPage = useCallback(async (page) => {
    let success = await props.datasource.goToPage(page);
    if (!success) {
      alert(`Failed to go to page ${page}...`);
    }
  }, [props.datasource]);

  let lastPage = useCallback(async () => {
    await goToPage(props.datasource.totalPages);
  }, [props.datasource, goToPage]);

  let firstPage = useCallback(async () => {
    await goToPage(1);
  }, [goToPage]);

  let search = useCallback(async (searchText) => {
    await props.datasource.search(searchText);
  }, [props.datasource]);

  let toggleSort = useCallback(async (field) => {
    let direction = 'asc';
    // Toggle to descending if already sorting
    // the field in ascending order
    if (props.datasource.sortArguments && Object.keys(props.datasource.sortArguments).length === 1
        && props.datasource.sortArguments[field] === 'asc') {
          direction = 'desc';
    }
    let sortArguments = {};
    sortArguments[field] = direction;
    await props.datasource.sort(sortArguments);
  }, [props.datasource]);

  let clearSort = useCallback(async () => {
    await props.datasource.sort();
  }, [props.datasource]);

  if (!props.datasource) {
    return <div style={{ color: 'crimson' }}> No datasource supplied </div>;
  } else if (componentData.loading) {
    return <div style={{ color: 'crimson' }}> Loading... </div>;
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
            {
              componentData.data.map(function(value, index, arr) {
                return (
                  <tr key={ value.id }>
                    <td>{ value.id }</td>
                    <td>{ value.firstName }</td>
                    <td>{ value.lastName }</td>
                    <td>{ value.job }</td>
                    <td>{ value.gender }</td>
                    <td>{ value.hasCitizenship ? 'Yes' : 'No' }</td>
                  </tr>
                );
              })
            }
          </tbody>
        </table>
        <br/>
        <table border="1">
          <tbody>
            <tr>
              <td>
                <div>Page { componentData.page } of { componentData.totalPages }</div>
                <div>Total: { componentData.total }</div>
                <div>Total Items on Page: { componentData.pageTotal }</div>
                <div>Size: { componentData.size }</div>
                <div>Offset: { componentData.offset }</div>
                <br/>
                <div>Search Text: { componentData.searchText }</div>
                <div>Search Arguments: { componentData.searchArguments ? JSON.stringify(componentData.searchArguments) : '' }</div>
                <div>Sort Arguments: { componentData.sortArguments ? JSON.stringify(componentData.sortArguments) : '' }</div>
              </td>
              <td>
                <h4>Pagination</h4>
                Size: <input type="number" value={ inputSize } onChange={ (event) => { setInputSize(event.target.value) } }/> <button onClick={ updateDatasourceSize }>Update</button>
                <br />
                <button onClick={ firstPage }>&lt;&lt;</button>
                <button onClick={ prevPage }>&lt;</button>
                &nbsp;&nbsp;
                <input type="number" value={ inputPageToGoTo } onChange={ (event) => { setInputPageToGoTo(event.target.value) } } />
                <button onClick={ () => { goToPage(inputPageToGoTo) } }>Go</button>
                &nbsp;&nbsp;
                <button onClick={ nextPage }>&gt;</button>
                <button onClick={ lastPage }>&gt;&gt;</button>
              </td>
            </tr>
            <tr>
              <td>
                <h4>Search</h4>
                <input type="text" value={ inputSearchText } onChange={ (event) => { setInputSearchText(event.target.value) } }/>
                <button onClick={ () => { search(inputSearchText) } }>Search</button>
              </td>
              <td>
                <h4>Single Column Sort</h4>
                <div>
                  <button onClick={ clearSort }>Clear Sort</button>
                </div>
                <div>
                  <button onClick={ () => { toggleSort('id') } }>ID</button>
                </div>
                <div>
                  <button onClick={ () => { toggleSort('firstName') } }>First Name</button>
                </div>
                <div>
                  <button onClick={ () => { toggleSort('lastName') } }>Last Name</button>
                </div>
                <div>
                  <button onClick={ () => { toggleSort('job') } }>Job</button>
                </div>
                <div>
                  <button onClick={ () => { toggleSort('gender') } }>Gender</button>
                </div>
                <div>
                  <button onClick={ () => { toggleSort('hasCitizenship') } }>Has Citizenship</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
