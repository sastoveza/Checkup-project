import React from 'react';
import UserContainer from './UserContainer';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateAppointment } from '../../actions/AppointmentActions';
import { currentUser } from '../../actions/UserActions'
import { getUserAppointments } from '../../reducers/Selectors';
import { isEmpty } from 'lodash';


class UserProfile extends React.Component {
	constructor(props){
		super(props);

		const { appointments }= this.props

		this.state = {
			appointments
		}
	}

	componentDidMount() {
		const { user } = this.props
		this.props.currenUser(user.id)
	}

	componentWillReceiveProps(nextProps) {
		const { appointments } = nextProps;
		this.setState({ appointments })
	}

	handleCancelAppointment(event, appointment) {
		event.preventDefault()
		const data = {
			reason: null,
			user_id: null,
			id: appointment.id
		}

		this.props.updateAppointment(data)
	}

	render() {
		const { appointments } = this.state

		return(
			<div>
				<h3>Welcome, {this.props.user.username}!</h3>
				<h2>Your Appointments:</h2>

				<ol>
					{appointments.map((app, index) => {
						return(
							<UserContainer key={index} appointment={app} cancel={(event) => this.handleCancelAppointment(event, app)} />)
					})}
				</ol>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	const user = state.user.currentUser

	let userAppointments
		if (isEmpty(state.appointments)) {
			userAppointments = []
		} else {
			userAppointments = getUserAppointments(state.appointments, user.appointments_ids)
		}

		return {
			user: user,
			appointments: userAppointments
	}
}

const mapDispatchToProps = dispatch => {
	return {
		updateAppointment: appointment => dispatch(updateAppointment(appointment)),
		currentUser: id => dispatch(currentUser(id)),
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile))