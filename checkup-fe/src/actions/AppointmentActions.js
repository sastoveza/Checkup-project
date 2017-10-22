function receivingAppointment() {
  return {
    type: "RECEIVING_APPOINTMENTS"
  }
}


export function receivedAppointment(appointment) {
  return {
    type: "RECEIVED_APPOINTMENTS",
    payload: appointment
  }
}

export function receiveAppointment() {
  return function (dispatch) {
    dispatch(receivingAppointment())
    fetch('http://localhost:3000/appoint')
    .then(res => res.json())
    .then((json) => {
      // console.log(json)
      dispatch(receivedAppointment(json))
    })
  }
}


