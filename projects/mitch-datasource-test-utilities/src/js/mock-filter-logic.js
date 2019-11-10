export default function (data, searchArguments) {
  if (!searchArguments) {
    return data;
  }

  if (typeof searchArguments === 'string') {
    return data.filter((value) => {
      // Simple search logic by doing
      // a text search on the concatenation
      // of all the searchable fields
      const searchableText = `${value.firstName
      } ${value.lastName
      } ${value.job
      } ${value.gender}`;
      return searchableText.indexOf(searchArguments) > -1;
    });
  }
  const entries = Object.entries(searchArguments);
  return data.filter((value) => {
    for (let i = 0; i < entries.length; i += 1) {
      const searchFieldName = entries[i][0];
      const searchValue = entries[i][1].toLowerCase();
      let searchableText = value[searchFieldName];
      if (!searchableText || !searchValue) {
        return false;
      }
      searchableText = typeof searchableText === 'string'
        ? searchableText.toLowerCase()
        : searchableText.toString().toLowerCase();
      if (searchableText.indexOf(searchValue) === -1) {
        return false;
      }
    }
    return true;
  });
}
