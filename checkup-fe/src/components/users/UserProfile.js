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

	// componentDidMount() {
	// 	const { user } = this.props
	// 	this.props.currentUser(user.id)
	// }

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

	renderWelcome = () => {
		if (this.props.users) {
		return (<h2>Welcome, {this.props.users.user.username}!</h2>)
		}
	}

	render() {
		const { appointments } = this.state
		console.log(this.props)
		return(
			<div>
				<ul>
					{this.renderWelcome()}
					<h3>Your Appointments:</h3>
					</ul>
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


//const UserContainer = (props) => {
//   const { appointment, doctor, cancel } = props;
//   return(
//     <li>
//       <div>
//         <h2>Reason: {`${appointment.reason}`}</h2>
//         <h2>Time: {`${moment(appointment.start_time).format("dddd, MMMM, Do YYYY, h:mm a")}`}</h2>
//         <h2>Address: {`${appointment.city}`}</h2>
//         <h2>Doctor: {`${appointment.doctor_name}`}</h2>
//         {apppointmentButtons(appointment, cancel)}
//       </div>
//     </li>


//   )
// }

// const apppointmentButtons = (appointment, callback) => {
//   const startTime = moment(appointment.start_time);
//   if(startTime._d > new Date()) {
//     return <button onClick={callback}>Cancel Appointment</button>
//   } 
// }





const mapStateToProps = (state) => {
	
	const user = state.users.currentUser

	let userAppointments
		if (state.appointments.appointments.length === 0) {
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