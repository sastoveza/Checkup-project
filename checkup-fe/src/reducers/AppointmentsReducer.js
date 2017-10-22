function AppointmentsReducer(state = {appointment: []}, action) {
  switch (action.type) {
    case "RECEIVED_APPOINTMENTS":
      return Object.assign({}, state, {appointment: action.payload, isFetching: false})
    case "RECEIVING_APPOINTMENTS":
      return Object.assign({}, state, { isFetching: true})
    default: 
      return state
  }
}

export default AppointmentsReducer