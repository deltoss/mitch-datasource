import React, { useState, useEffect, useCallback, useMemo } from 'react';

export default function(props) {
  const [loading, setLoading] = useState(props.datasource.loading);
  const [size, setSize] = useState(props.datasource ? props.datasource.size : 0);
  const [pageToGoTo, setPageToGoTo] = useState('');
  const [searchText, setSearchText] = useState('');

  let updateDatasourceSize = useCallback(async () => {
    props.datasource.size = size;
    await props.datasource.update();
  }, [props.datasource, size]);

  let nextPage = useCallback(async () => {
    let success = await props.datasource.nextPage();
    if (!success) {
      console.warn('Failed to go to next page...');
    }
  }, [props.datasource]);

  let prevPage = useCallback(async () => {
    let success = await props.datasource.prevPage();
    if (!success) {
      console.warn('Failed to go to previous page...');
    }
  }, [props.datasource]);

  let goToPage = useCallback(async (page) => {
    let success = await props.datasource.goToPage(page);
    if (!success) {
      console.warn(`Failed to go to page ${page}...`);
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

  useEffect(() => { // On mount, and when datasource gets changed, adjust the loading status
    setLoading(props.datasource.loading);
  }, [props.datasource]);

  useEffect(() => { // Attach listeners to add effect for loading message/animation/state
    const updateStartCallback = () => {
      setLoading(true);
    };
    const updateEndCallback = () => {
      setLoading(false);
    };
    props.datasource.on('updatestart', updateStartCallback);
    props.datasource.on('updateend', updateEndCallback);
    
    // Cleanup called on unmount event
    return () => {
      props.datasource.off('updatestart', updateStartCallback);
      props.datasource.off('updateend', updateEndCallback);
    }
  }, [props.datasource]);

  let bodyContent = useMemo(() => {
    if (!props.datasource) {
      return (
        <div style={{ color: 'crimson' }}>
          No datasource supplied
        </div>
      );
    } else if (loading) {
      return (
        <div style={{ color: 'crimson' }}>
          Loading...
        </div>
      );
    } else {
      return (
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
              props.datasource.data.map(function(value, index, arr) {
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
      );
    }
  }, [props.datasource, loading]);

  return (
    <div>
      <h3>DataGrid for Datasource Testing Purposes</h3>
      { bodyContent }
      <br/>
      <table border="1">
        <tbody>
          <tr>
            <td>
              <div>Page { props.datasource.page } of { props.datasource.totalPages }</div>
              <div>Total: { props.datasource.total }</div>
              <div>Total Items on Page: { props.datasource.pageTotal }</div>
              <div>Size: { props.datasource.size }</div>
              <div>Offset: { props.datasource.offset }</div>
              <br/>
              <div>Search Text: { props.datasource.searchText }</div>
              <div>Search Arguments: { props.datasource.searchArguments ? JSON.stringify(props.datasource.searchArguments) : '' }</div>
              <div>Sort Arguments: { props.datasource.sortArguments ? JSON.stringify(props.datasource.sortArguments) : '' }</div>
            </td>
            <td>
              <h4>Pagination</h4>
              Size: <input type="number" value={ size } onChange={ (event) => { setSize(event.target.value) } }/> <button onClick={ updateDatasourceSize }>Update</button>
              <br />
              <button onClick={ firstPage }>&lt;&lt;</button>
              <button onClick={ prevPage }>&lt;</button>
              &nbsp;&nbsp;
              <input type="number" value={ pageToGoTo } onChange={ (event) => { setPageToGoTo(event.target.value) } } />
              <button onClick={ () => { goToPage(pageToGoTo) } }>Go</button>
              &nbsp;&nbsp;
              <button onClick={ nextPage }>&gt;</button>
              <button onClick={ lastPage }>&gt;&gt;</button>
            </td>
          </tr>
          <tr>
            <td>
              <h4>Search</h4>
              <input type="text" value={ searchText } onChange={ (event) => { setSearchText(event.target.value) } }/>
              <button onClick={ () => { search(searchText) } }>Search</button>
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
