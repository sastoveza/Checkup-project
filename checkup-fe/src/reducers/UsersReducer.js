function UsersReducer(state = { currentUser: null } , action){

  switch (action.type) {
    case "LOGGEDIN_USER":
      return Object.assign({}, state, {currentUser: action.payload})

    case "LOGGEDOUT_USER":
      return Object.assign({}, state, {currentUser: null})

  	 case "FETCHED_CURRENT_USER":
      return Object.assign({}, state, {currentUser: action.payload})
  
    default:
        return state
    }
}

export default UsersReducer