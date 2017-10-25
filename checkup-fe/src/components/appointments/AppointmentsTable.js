import React from 'react'
import { Link } from 'react-router-dom'
import AppointmentsDayDisplay from './AppointmentsDayDisplay'
import { sortBy } from 'lodash'


const AppointmentsTable = ({ appsByDays }) => {
	const guaranteeTimeOrder = appsByDays.map(thisDay => (
		sortBy(thisDay, 'start_time')))
	return (
		<section>
			{guaranteeTimeOrder.map((thisDay, index) => (
				<AppointmentsDayDisplay key={index} day={thisDay} />))}
		</section>
	)
}

export default AppointmentsTable