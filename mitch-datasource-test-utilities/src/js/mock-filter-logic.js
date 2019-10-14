export default function (data, searchText) {
  if (!searchText) {
    return data;
  }
  return data.filter((value) => {
    // Simple search logic by doing
    // a text search on the concatenation
    // of all the searchable fields
    const searchableText = `${value.firstName
    } ${value.lastName
    } ${value.job
    } ${value.gender}`;
    if (searchableText.indexOf(searchText) > -1) {
      return true;
    }
    return false;
  });
}
