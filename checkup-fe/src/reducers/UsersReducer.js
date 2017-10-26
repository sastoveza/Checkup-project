function UsersReducer(state = { currentUser: {user: "", appointments: []} } , action){

  switch (action.type) {
    case "LOGGEDIN_USER":
      return Object.assign({}, state, {currentUser: action.payload})

    case "LOGGEDOUT_USER":
      return Object.assign({}, state, {currentUser: null})

  	 case "FETCHED_CURRENT_USER":
     console.log('fetch current user', action.payload)
      return Object.assign({}, state, {currentUser: action.payload})
  
    default:
        return state
    }
}

export default UsersReducer