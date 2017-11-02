import React from 'react';
import UserContainer from './UserContainer';
import { connect, Link } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateAppointment } from '../../actions/AppointmentActions';
import { currentUser } from '../../actions/UserActions'
import { getUserAppointments } from '../../reducers/Selectors';
import { isEmpty } from 'lodash';
import moment from 'moment'
import { currentUserAppointment } from '../../actions/AppointmentActions'
import { Button, Card } from 'semantic-ui-react'
import Nav from '../Nav'
import { deleteAppointment } from '../../actions/AppointmentActions'

class UserProfile extends React.Component {
	constructor(props){
		super(props);

		const { appointments }= this.props

		this.state = {
			appointments
		}
	}

	componentDidMount() {
		// const { user } = this.props
	console.log("cdm",this.props)
	}

	// componentWillReceiveProps(nextProps) {
	// 	const { appointments } = nextProps;
	// 	this.setState({ appointments })
	// }

	// handleCancelAppointment(event, appointment) {
	// 	event.preventDefault()
	// 	const data = {
	// 		reason: null,
	// 		user_id: null,
	// 		id: appointment.id
	// 	}

	// 	this.props.updateAppointment(data)
	// }

	renderWelcome = () => {
		if (this.props.users && this.props.users.user) {
		return (<h2>Welcome, {this.props.users.user.username}!</h2>)
		}
	}

	onClick = (event) => {
		event.preventDefault()
		console.log(this.props.users.appointments)
		alert("THANKS FOR USING CHECKUP!!!")
		// event.target.value
		
		// const appt = this.props.users.appointments.filter(obj => {
		// 	return obj.id = event.target.value
		// })
		// this.props.deleteAppointment(appt.toString(), this.props.users.user)
	}

	renderReason = () => {
		let list = ""
		if (this.props.appointments) {
			list = this.props.appointments.map((appointment, index) => 
				<li value={index}>
					<div>Reason: {appointment.reason}</div>
					<div>Time: {`${moment(appointment.start_time).format("dddd, MMMM, Do YYYY, h:mm a")}`} </div>
					<div>Doctor: {appointment.doctor.name}</div>
					<Button onClick={this.onClick}>Cancel Appointment</Button>
				</li>
			)}
				return list
	}


	getUserAppointments = () => {
		// debugger;
		let params = {id: this.props.users.user.id}
		this.props.currentUserAppointment(params)
	}


	render() {
		// console.log("render", this.props)
		if (this.props.users !== null) {
			if(this.props.appointments === null)
			this.getUserAppointments()
	}
		return(
			<div>
				<ul>
					{this.renderWelcome()}
					<h3>Your Appointments:</h3>
					</ul>
				<ol>
					{this.renderReason()}
					
				</ol>
			</div>
		)
	}
}



const mapStateToProps = (state) => {	
	const users = state.users.currentUser

	let userAppointments
		if (state.appointments.appointments.length === 0) {
			userAppointments = []
				console.log(userAppointments)

		} else {

			userAppointments = getUserAppointments(state.appointments, users.appointments_ids)
		}

		return {
			users: users,
			appointments: state.appointments.appointment
	}
}

const mapDispatchToProps = dispatch => {
	return {
		updateAppointment: appointment => dispatch(updateAppointment(appointment)),
		currentUser: id => dispatch(currentUser(id)),
		currentUserAppointment: id => dispatch(currentUserAppointment(id)),
		deleteAppointment: (appt, user) => dispatch(deleteAppointment(appt,user))
	}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserProfile))