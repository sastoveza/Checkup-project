import React from 'react';
// import { getDayRange } from './AppointmentsDisplay';
import { connect } from 'react-redux';
import AppointmentList from './AppointmentList';
import { Route } from 'react-router-dom'
import { receivedAppointment } from '../../actions/AppointmentActions';


class AppointmentContainer extends React.Component {

	render () {
		console.log(this.props)
		return (
			<div>
				<Route path="/results" render={(props) => <AppointmentList {...this.props} {...props}/>} />
			</div>
		)
	}
}


function mapStateToProps(state) {
	return {
		appointment: state.appointments.appointment,
	}
}

export default connect(mapStateToProps)(AppointmentContainer)



// <Route path="/result" component={getDayRange}/>


