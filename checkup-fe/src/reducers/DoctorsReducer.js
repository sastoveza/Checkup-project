function DoctorsReducer(state = { isSearching: false, searchResults: []}, action){
  switch (action.type) {
    case "SEARCHING_DOCTORS":
      return Object.assign({}, state, {isSearching: true})
    case "SEARCHED_DOCTORS":
      return Object.assign({}, state, {searchResults: action.payload, isSearching: false})
    case "LOGGEDOUT_USER":
        return Object.assign({}, state, {searchResults: [], isSearching: false})
    default:
      return state
  }
}

export default DoctorsReducer