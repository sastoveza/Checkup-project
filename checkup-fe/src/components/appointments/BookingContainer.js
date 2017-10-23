import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getAppointment } from '../actions/AppointmentActions'
import AppointmentBooking from '/AppointmentBooking'


const mapStatetoProps = (state, ownProps) => {
	return {
		appointment: state.appointments[ownProps.match.params.id]
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetcchAppointment: appointment => dispatch(fetcchAppointment(appointment))
	}
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(AppointmentBooking))