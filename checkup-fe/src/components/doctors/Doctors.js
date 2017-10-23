import React from 'react'
import DoctorAppointments from './DoctorAppointments'
import { getDayRange } from '../actions/AppointmentActions'
import { sortedAppointmentsByDay } from '../../reducers/Selectors'


class Doctor extends React.Component {
	constructor(props) {
		super(props)

		const days = getDayRange()

		this.state = {
			today: days[0],
			tomorrow: days[1],
			dayAfter: days[2],
			dayFour: days[3]
		}
	}

}



