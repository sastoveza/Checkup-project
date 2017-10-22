import React from 'react';
import AppointmentItem from './AppointmentItem';
import { connect } from 'react-redux'


class AppointmentList extends React.Component {

	render() {
		console.log(this.props)
		const appointmentItems = this.props.appointment.map((appointment, index) => {
			return <AppointmentItem key={index} appointment={appointment} history={this.props.history} />
		})


		return (
			<div>
				{appointmentItems}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		appointment: state.appointments.appointment
	}
}

export default connect(mapStateToProps)(AppointmentList)
