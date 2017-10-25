import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

const UserContainer = (props) => {
  const { appointment, doctor, cancel } = props;
  return(
    <li>
      <div>
        <h2>Reason: {`${appointment.reason}`}</h2>
        <h2>Time: {`${moment(appointment.start_time).format("dddd, MMMM, Do YYYY, h:mm a")}`}</h2>
        <h2>Address: {`${appointment.city}`}</h2>
        <h2>Doctor: {`${appointment.doctor_name}`}</h2>
        {apppointmentButtons(appointment, cancel)}
      </div>
    </li>


  )
}

const apppointmentButtons = (appointment, callback) => {
  const startTime = moment(appointment.start_time);
  if(startTime._d > new Date()) {
    return <button onClick={callback}>Cancel Appointment</button>
  } 
}


export default UserContainer