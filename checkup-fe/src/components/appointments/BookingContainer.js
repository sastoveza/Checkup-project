import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { receivedAppointment } from '../../actions/AppointmentActions'
import BookingForm from './BookingForm'

const mapStatetoProps = (state, ownProps) => {
	return {
		appointment: state.appointments[ownProps.match.params.id]
	}
}

const mapDispatchToProps = dispatch => {
	return {
		receivedAppointment: appointment => dispatch(receivedAppointment(appointment))
	}
}

export default withRouter(connect(mapStatetoProps, mapDispatchToProps)(BookingForm))