const search = (state = {
  searchType: 'GOOGLE'
}, action) => {
  switch (action.type) {
    case 'changeSearchType':
      return {
        ...state,
          searchType: action.searchType
      }
    default:
      return state
  }
}

export default search