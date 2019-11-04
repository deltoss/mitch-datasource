import React, { useState, useEffect, useCallback, useMemo } from 'react';

export default function(props) {
  const [loading, setLoading] = useState(props.datasource.loading);
  const [size, setSize] = useState(props.datasource ? props.datasource.size : 0);
  const [pageToGoTo, setPageToGoTo] = useState('');
  const [multiColumnSearchArguments, setMultiColumnSearchArguments] = useState({
    id: '',
    firstName: '',
    lastName: '',
    job: '',
    gender: '',
    hasCitizenship: '',
  });
  const [multiColumnSortArguments, setMultiColumnSortArguments] = useState({
    id: '',
    firstName: '',
    lastName: '',
    job: '',
    gender: '',
    hasCitizenship: '',
  });

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

  let multiColumnSearch = useCallback(async () => {
    if (!multiColumnSearchArguments) {
      return;
    }
    const entries = Object.entries(multiColumnSearchArguments);
    if (entries.length === 0) {
      return;
    }
    let actualSearchArguments = {};
    entries.forEach(function(value) {
      const searchField = value[0];
      const searchValue = value[1];
      if (searchValue) {
        actualSearchArguments[searchField] = searchValue;
      }
    });
    await props.datasource.search(actualSearchArguments);
  }, [props.datasource, multiColumnSearchArguments]);

  let multiColumnSort = useCallback(async () => {
    if (!multiColumnSortArguments) {
      return;
    }
    const entries = Object.entries(multiColumnSortArguments);
    if (entries.length === 0) {
      return;
    }
    let actualSortArguments = {};
    entries.forEach(function(value) {
      const sortField = value[0];
      const sortDirection = value[1];
      if (sortDirection) {
        actualSortArguments[sortField] = sortDirection;
      }
    });
    await props.datasource.sort(actualSortArguments);
  }, [props.datasource, multiColumnSortArguments]);

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
              <h4>Multi Column Search</h4>
              <div>
                <label>ID:</label> <input type="text" value={ multiColumnSearchArguments.id } onChange={ (e) => setMultiColumnSearchArguments({ ...multiColumnSearchArguments, id: e.target.value }) }/>
              </div>
              <div>
                <label>First Name:</label> <input type="text" value={ multiColumnSearchArguments.firstName } onChange={ (e) => setMultiColumnSearchArguments({ ...multiColumnSearchArguments, firstName: e.target.value }) }/>
              </div>
              <div>
                <label>Last Name:</label> <input type="text" value={ multiColumnSearchArguments.lastName } onChange={ (e) => setMultiColumnSearchArguments({ ...multiColumnSearchArguments, lastName: e.target.value }) }/>
              </div>
              <div>
                <label>Job:</label> <input type="text" value={ multiColumnSearchArguments.job } onChange={ (e) => setMultiColumnSearchArguments({ ...multiColumnSearchArguments, job: e.target.value }) }/>
              </div>
              <div>
                <label>Gender:</label> <input type="text" value={ multiColumnSearchArguments.gender } onChange={ (e) => setMultiColumnSearchArguments({ ...multiColumnSearchArguments, gender: e.target.value }) }/>
              </div>
              <div>
                <label>Has Citizenship:</label> <input type="text" value={ multiColumnSearchArguments.hasCitizenship } onChange={ (e) => setMultiColumnSearchArguments({ ...multiColumnSearchArguments, hasCitizenship: e.target.value }) }/>
              </div>
              <button onClick={ multiColumnSearch }>Search</button>
            </td>
            <td>
              <h4>Multi Column Sort</h4>
              <div>
                <label>ID:</label>
                <br/>
                <label>None</label> <input type="radio" value="" name="sort_id" onChange={ (e) => setMultiColumnSortArguments({ ...multiColumnSortArguments, id: e.target.value, }) }/>
                <label>Asc</label> <input type="radio" value="asc" name="sort_id" onChange={ (e) => setMultiColumnSortArguments({ ...multiColumnSortArguments, id: e.target.value, }) }/>
                <label>Desc</label> <input type="radio" value="desc" name="sort_id" onChange={ (e) => setMultiColumnSortArguments({ ...multiColumnSortArguments, id: e.target.value, }) }/>
              </div>
              <div>
                <label>First Name:</label>
                <br/>
                <label>None</label> <input type="radio" value="" name="sort_firstName" onChange={ (e) => setMultiColumnSortArguments({ ...multiColumnSortArguments, firstName: e.target.value, }) }/>
                <label>Asc</label> <input type="radio" value="asc" name="sort_firstName" onChange={ (e) => setMultiColumnSortArguments({ ...multiColumnSortArguments, firstName: e.target.value, }) }/>
                <label>Desc</label> <input type="radio" value="desc" name="sort_firstName" onChange={ (e) => setMultiColumnSortArguments({ ...multiColumnSortArguments, firstName: e.target.value, }) }/>
              </div>
              <div>
                <label>Last Name:</label>
                <br/>
                <label>None</label> <input type="radio" value="" name="sort_lastName" onChange={ (e) => setMultiColumnSortArguments({ ...multiColumnSortArguments, lastName: e.target.value, }) }/>
                <label>Asc</label> <input type="radio" value="asc" name="sort_lastName" onChange={ (e) => setMultiColumnSortArguments({ ...multiColumnSortArguments, lastName: e.target.value, }) }/>
                <label>Desc</label> <input type="radio" value="desc" name="sort_lastName" onChange={ (e) => setMultiColumnSortArguments({ ...multiColumnSortArguments, lastName: e.target.value, }) }/>
              </div>
              <div>
                <label>Job:</label>
                <br/>
                <label>None</label> <input type="radio" value="" name="sort_job" onChange={ (e) => setMultiColumnSortArguments({ ...multiColumnSortArguments, job: e.target.value, }) }/>
                <label>Asc</label> <input type="radio" value="asc" name="sort_job" onChange={ (e) => setMultiColumnSortArguments({ ...multiColumnSortArguments, job: e.target.value, }) }/>
                <label>Desc</label> <input type="radio" value="desc" name="sort_job" onChange={ (e) => setMultiColumnSortArguments({ ...multiColumnSortArguments, job: e.target.value, }) }/>
              </div>
              <div>
                <label>Gender:</label>
                <br/>
                <label>None</label> <input type="radio" value="" name="sort_gender" onChange={ (e) => setMultiColumnSortArguments({ ...multiColumnSortArguments, gender: e.target.value, }) }/>
                <label>Asc</label> <input type="radio" value="asc" name="sort_gender" onChange={ (e) => setMultiColumnSortArguments({ ...multiColumnSortArguments, gender: e.target.value, }) }/>
                <label>Desc</label> <input type="radio" value="desc" name="sort_gender" onChange={ (e) => setMultiColumnSortArguments({ ...multiColumnSortArguments, gender: e.target.value, }) }/>
              </div>
              <div>
                <label>Has Citizenship:</label>
                <br/>
                <label>None</label> <input type="radio" value="" name="sort_hasCitizenship" onChange={ (e) => setMultiColumnSortArguments({ ...multiColumnSortArguments, hasCitizenship: e.target.value, }) }/>
                <label>Asc</label> <input type="radio" value="asc" name="sort_hasCitizenship" onChange={ (e) => setMultiColumnSortArguments({ ...multiColumnSortArguments, hasCitizenship: e.target.value, }) }/>
                <label>Desc</label> <input type="radio" value="desc" name="sort_hasCitizenship" onChange={ (e) => setMultiColumnSortArguments({ ...multiColumnSortArguments, hasCitizenship: e.target.value, }) }/>
              </div>
              <button onClick={ multiColumnSort }>Sort</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
