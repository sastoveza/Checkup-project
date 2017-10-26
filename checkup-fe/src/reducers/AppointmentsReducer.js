function AppointmentsReducer(state = {appointment: null, appointments: [], appointmentUpdated: []}, action) {
  switch (action.type) {
    case "RECEIVED_APPOINTMENTS":
      return Object.assign({}, state, {appointment: action.payload, isFetching: false})
    case "RECEIVING_APPOINTMENTS":
      return Object.assign({}, state, { isFetching: true})
  	case "CREATED_APPOINTMENTS":
      return Object.assign({}, state, {appointments: action.payload, isFetching: false})
    case "CREATING_APPOINTMENTS":
      return Object.assign({}, state, { isFetching: true})
  case "UPDATED_APPOINTMENTS":
      return Object.assign({}, state, {appointmentUpdated: action.payload, isFetching: false})
    case "UPDATING_APPOINTMENTS":
      return Object.assign({}, state, { isFetching: true})
    default: 
      return state
  }
}

export default AppointmentsReducer