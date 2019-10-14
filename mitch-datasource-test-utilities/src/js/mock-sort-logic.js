export default function (data, fieldName, direction) {
  if (direction === 'asc' || direction === 'ascending') {
    data.sort((a, b) => ((a[fieldName] > b[fieldName]) ? 1 : -1));
  } else if (direction === 'desc' || direction === 'descending') {
    data.sort((a, b) => ((a[fieldName] < b[fieldName]) ? 1 : -1));
  }
  return data;
}
