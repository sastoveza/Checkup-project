import moment from 'moment'

export function receivingAppointment() {
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

export function creatingAppointment() {
  return {
    type: "CREATING_APPOINTMENT"
  }
}

export function createdAppointment(appointments) {
  return {
    type: "CREATED_APPOINTMENT",
    payload: appointments
  }
}

export function createAppointment(appointmentParams) {
  const body = JSON.stringify({reason: appointmentParams})
  const jwt = localStorage.getItem("jwtToken")
  return function (dispatch) {
    dispatch(creatingAppointment())
    fetch("http://localhost:3000/appointment", {
      method: "POST",
      body: body,
      headers: {
        "Accept":"application/json",
          "Content-Type":"application/json",
          "Authorization": "Bearer " + jwt
  }
})
    .then((res) => res.json())
    .then((json) => {
      dispatch(createdAppointment(json))
    })
  }
}

export function updatingAppointment() {
  return {
    type: "UPDATING_APPOINTMENT"
  }
}

export function updatedAppointment(appointmentUpdated) {
  return {
    type: "UPDATED_APPOINTMENT",
    payload: appointmentUpdated
  }
}


export function updateAppointment() {
  return function(dispatch) {
    dispatch(updatingAppointment())
    fetch('http://localhost:3000/appointments')
    .then(res => res.json())
    .then((json) => {
      dispatch(updatingAppointment(json))
    })
  }
}

export const getDayRange = () => {
  const cY = moment().get('year');
  const cM = moment().get('month');
  const cD = moment().get('date');
  const cH = moment().get('hour');
  const today = moment().year(cY).month(cM).date(cD).hour(cH);
  const tomorrow = moment().year(cY).month(cM).date(cD + 1).hour(23);
  const dayAfter = moment().year(cY).month(cM).date(cD + 2).hour(23);
  const dayFour = moment().year(cY).month(cM).date(cD + 3).hour(23);

  return [today._d, tomorrow._d, dayAfter._d, dayFour._d];
};

