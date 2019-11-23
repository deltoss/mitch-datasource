import React, { useState, useEffect, useCallback } from 'react';

export default function(props) {
  // State for input fields
  const [inputSize, setInputSize] = useState(0);
  const [inputPageToGoTo, setInputPageToGoTo] = useState('');
  const [inputMultiColumnSearchArguments, setInputMultiColumnSearchArguments] = useState({
    id: '',
    firstName: '',
    lastName: '',
    job: '',
    gender: '',
    hasCitizenship: '',
  });
  const [inputMultiColumnSortArguments, setInputMultiColumnSortArguments] = useState({
    id: '',
    firstName: '',
    lastName: '',
    job: '',
    gender: '',
    hasCitizenship: '',
  });
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

  let multiColumnSearch = useCallback(async () => {
    if (!inputMultiColumnSearchArguments) {
      return;
    }
    const entries = Object.entries(inputMultiColumnSearchArguments);
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
  }, [props.datasource, inputMultiColumnSearchArguments]);

  let multiColumnSort = useCallback(async () => {
    if (!inputMultiColumnSortArguments) {
      return;
    }
    const entries = Object.entries(inputMultiColumnSortArguments);
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
  }, [props.datasource, inputMultiColumnSortArguments]);

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
              <h4>Multi Column Search</h4>
              <div>
                <label>ID:</label> 
                  <input type="text" value={ inputMultiColumnSearchArguments.id }
                    onChange={ (e) => setInputMultiColumnSearchArguments({ ...inputMultiColumnSearchArguments, id: e.target.value }) }
                  />
              </div>
              <div>
                <label>First Name:</label> 
                  <input type="text" value={ inputMultiColumnSearchArguments.firstName }
                    onChange={ (e) => setInputMultiColumnSearchArguments({ ...inputMultiColumnSearchArguments, firstName: e.target.value }) }
                  />
              </div>
              <div>
                <label>Last Name:</label> 
                  <input type="text" value={ inputMultiColumnSearchArguments.lastName }
                    onChange={ (e) => setInputMultiColumnSearchArguments({ ...inputMultiColumnSearchArguments, lastName: e.target.value }) }
                  />
              </div>
              <div>
                <label>Job:</label> 
                  <input type="text" value={ inputMultiColumnSearchArguments.job }
                    onChange={ (e) => setInputMultiColumnSearchArguments({ ...inputMultiColumnSearchArguments, job: e.target.value }) }
                  />
              </div>
              <div>
                <label>Gender:</label> 
                  <input type="text" value={ inputMultiColumnSearchArguments.gender }
                    onChange={ (e) => setInputMultiColumnSearchArguments({ ...inputMultiColumnSearchArguments, gender: e.target.value }) }
                  />
              </div>
              <div>
                <label>Has Citizenship:</label> 
                  <input type="text" value={ inputMultiColumnSearchArguments.hasCitizenship }
                    onChange={ (e) => setInputMultiColumnSearchArguments({ ...inputMultiColumnSearchArguments, hasCitizenship: e.target.value }) }
                  />
              </div>
              <button onClick={ multiColumnSearch }>Search</button>
            </td>
            <td>
              <h4>Multi Column Sort</h4>
              <div>
                <label>ID:</label>
                <br/>
                <label>None</label> 
                  <input type="radio" value="" name="sort_id"
                    onChange={ (e) => setInputMultiColumnSortArguments({ ...inputMultiColumnSortArguments, id: e.target.value, }) }
                    checked={ inputMultiColumnSortArguments.id === '' }
                  />
                <label>Asc</label> 
                  <input type="radio" value="asc" name="sort_id"
                    onChange={ (e) => setInputMultiColumnSortArguments({ ...inputMultiColumnSortArguments, id: e.target.value, }) }
                    checked={ inputMultiColumnSortArguments.id === 'asc' }
                  />
                <label>Desc</label> 
                  <input type="radio" value="desc" name="sort_id"
                    onChange={ (e) => setInputMultiColumnSortArguments({ ...inputMultiColumnSortArguments, id: e.target.value, }) }
                    checked={ inputMultiColumnSortArguments.id === 'desc' }
                  />
              </div>
              <div>
                <label>First Name:</label>
                <br/>
                <label>None</label> 
                  <input type="radio" value="" name="sort_firstName"
                    onChange={ (e) => setInputMultiColumnSortArguments({ ...inputMultiColumnSortArguments, firstName: e.target.value, }) }
                    checked={ inputMultiColumnSortArguments.firstName === '' }
                  />
                <label>Asc</label> 
                  <input type="radio" value="asc" name="sort_firstName"
                    onChange={ (e) => setInputMultiColumnSortArguments({ ...inputMultiColumnSortArguments, firstName: e.target.value, }) }
                    checked={ inputMultiColumnSortArguments.firstName === 'asc' }
                  />
                <label>Desc</label> 
                  <input type="radio" value="desc" name="sort_firstName"
                    onChange={ (e) => setInputMultiColumnSortArguments({ ...inputMultiColumnSortArguments, firstName: e.target.value, }) }
                    checked={ inputMultiColumnSortArguments.firstName === 'desc' }
                  />
              </div>
              <div>
                <label>Last Name:</label>
                <br/>
                <label>None</label> 
                  <input type="radio" value="" name="sort_lastName"
                    onChange={ (e) => setInputMultiColumnSortArguments({ ...inputMultiColumnSortArguments, lastName: e.target.value, }) }
                    checked={ inputMultiColumnSortArguments.lastName === '' }
                  />
                <label>Asc</label> 
                  <input type="radio" value="asc" name="sort_lastName"
                    onChange={ (e) => setInputMultiColumnSortArguments({ ...inputMultiColumnSortArguments, lastName: e.target.value, }) }
                    checked={ inputMultiColumnSortArguments.lastName === 'asc' }
                  />
                <label>Desc</label> 
                  <input type="radio" value="desc" name="sort_lastName"
                    onChange={ (e) => setInputMultiColumnSortArguments({ ...inputMultiColumnSortArguments, lastName: e.target.value, }) }
                    checked={ inputMultiColumnSortArguments.lastName === 'desc' }
                  />
              </div>
              <div>
                <label>Job:</label>
                <br/>
                <label>None</label> 
                  <input type="radio" value="" name="sort_job"
                    onChange={ (e) => setInputMultiColumnSortArguments({ ...inputMultiColumnSortArguments, job: e.target.value, }) }
                    checked={ inputMultiColumnSortArguments.job === '' }
                  />
                <label>Asc</label> 
                  <input type="radio" value="asc" name="sort_job"
                    onChange={ (e) => setInputMultiColumnSortArguments({ ...inputMultiColumnSortArguments, job: e.target.value, }) }
                    checked={ inputMultiColumnSortArguments.job === 'asc' }
                  />
                <label>Desc</label> 
                  <input type="radio" value="desc" name="sort_job"
                    onChange={ (e) => setInputMultiColumnSortArguments({ ...inputMultiColumnSortArguments, job: e.target.value, }) }
                    checked={ inputMultiColumnSortArguments.job === 'desc' }
                  />
              </div>
              <div>
                <label>Gender:</label>
                <br/>
                <label>None</label> 
                  <input type="radio" value="" name="sort_gender"
                    onChange={ (e) => setInputMultiColumnSortArguments({ ...inputMultiColumnSortArguments, gender: e.target.value, }) }
                    checked={ inputMultiColumnSortArguments.gender === '' }
                  />
                <label>Asc</label> 
                  <input type="radio" value="asc" name="sort_gender"
                    onChange={ (e) => setInputMultiColumnSortArguments({ ...inputMultiColumnSortArguments, gender: e.target.value, }) }
                    checked={ inputMultiColumnSortArguments.gender === 'asc' }
                  />
                <label>Desc</label> 
                  <input type="radio" value="desc" name="sort_gender"
                    onChange={ (e) => setInputMultiColumnSortArguments({ ...inputMultiColumnSortArguments, gender: e.target.value, }) }
                    checked={ inputMultiColumnSortArguments.gender === 'desc' }
                  />
              </div>
              <div>
                <label>Has Citizenship:</label>
                <br/>
                <label>None</label> 
                  <input type="radio" value="" name="sort_hasCitizenship"
                    onChange={ (e) => setInputMultiColumnSortArguments({ ...inputMultiColumnSortArguments, hasCitizenship: e.target.value, }) }
                    checked={ inputMultiColumnSortArguments.hasCitizenship === '' }
                  />
                <label>Asc</label> 
                  <input type="radio" value="asc" name="sort_hasCitizenship"
                    onChange={ (e) => setInputMultiColumnSortArguments({ ...inputMultiColumnSortArguments, hasCitizenship: e.target.value, }) }
                    checked={ inputMultiColumnSortArguments.hasCitizenship === 'asc' }
                  />
                <label>Desc</label> 
                  <input type="radio" value="desc" name="sort_hasCitizenship"
                    onChange={ (e) => setInputMultiColumnSortArguments({ ...inputMultiColumnSortArguments, hasCitizenship: e.target.value, }) }
                    checked={ inputMultiColumnSortArguments.hasCitizenship === 'desc' }
                  />
              </div>
              <button onClick={ multiColumnSort }>Sort</button>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
