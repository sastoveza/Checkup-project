import moment from 'moment'

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

