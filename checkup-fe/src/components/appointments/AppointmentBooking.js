import React from 'react'
import moment from 'moment'

class AppointmentBooking extends React.Component {
	constructor(props) {
		super (props)

		this.state = {
			reason: ''
		}
	}

	componentDidMount() {
		const appId = this.props.match.params.id;
		this.props.getAppointment(appId)
	}

	handleChange = (event) => {
		event.preventDefault()
		this.setState ({
			reason: event.target.value,
		})
	}

	handleSubmit(event) {
		event.preventDefault()
		const result = {
			reason: this.state.reason,
			user_id: this.props.user.id,
			id: this.props.appointment.id
		}

		this.props.handleChange(result)
		.then(() => this.props.history.push('/patient'))
	}

	render() {
		const { appointment , user } = this.props
		if (appointment) {
			return (
				<form onSubmit={this.handleSubmit}>
					<h3>Review and Book</h3>

				<label>Name:</label>
				<div>{`${user.username}`}</div>
				<br />

				<label>Time:</label>
				<div>
					{`${moment(appointment.start_time)
						.format("dddd, MMMM Do YYYY, h:mm a")}`}
				</div>
				<br />

				<label>Doctor:</label>
				<div>{`${appointment.doctor_name}`}</div>
				<br />

				<label>Reason for Visit:</label>
				<br />
				<textarea 
					onChange={this.handleChange('reason')}
					value={this.state.reason}
					></textarea>
				<br />

				<input type="Submit" value="Book Appointment" />
			</form>
			)
		} else {
			return <section />
		}
	}
	
}

export default AppointmentBooking

