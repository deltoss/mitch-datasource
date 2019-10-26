export default function (data, sortArguments) {
  if (!sortArguments) {
    return data;
  }
  data.sort((a, b) => {
    const entries = Object.entries(sortArguments);
    for (let i = 0; i < entries.length; i += 1) {
      const sortFieldName = entries[i][0];
      const sortDirection = entries[i][1].toLowerCase();
      if (sortDirection === 'asc' || sortDirection === 'ascending') {
        if (a[sortFieldName] > b[sortFieldName]) {
          return 1;
        }
        if (a[sortFieldName] < b[sortFieldName]) {
          return -1;
        }
      } else if (sortDirection === 'desc' || sortDirection === 'descending') {
        if (a[sortFieldName] < b[sortFieldName]) {
          return 1;
        }
        if (a[sortFieldName] > b[sortFieldName]) {
          return -1;
        }
      }
    }
    return 0;
  });
  return data;
}
