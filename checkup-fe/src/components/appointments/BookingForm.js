import React from 'react'
import moment from 'moment'
import { receiveAppointment } from '../../actions/AppointmentActions'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Form, Button, TextArea, Input } from 'semantic-ui-react'

class BookingForm extends React.Component {
	constructor(props) {
		super (props)

		this.state = {
			reason: ''
		}
	}

	// componentDidMount() {
	// 	const appId = this.props.match.params.id;
	// 	this.props.receiveAppointment()
	

	handleChange = (event) => {
		event.preventDefault()
		this.setState ({
			reason: event.target.value,
		})
	}

	handleSubmit = (event) => {
		event.preventDefault()
		console.log(this.props)
		if (this.state.reason !== "") {
		this.props.receiveAppointment(this.state.reason)
	}
	
		this.setState ({
			reason: ''
		})

	}

	render() {
		console.log(this.props)
		// const { appointment , user } = this.props
	// if (appointment) {
		return (
			<div>
				<ul>
					<h3>Book Appointment</h3>
					<Form onSubmit={this.handleSubmit}>
						<Form.Group>
							<Form.Field control={Input} label='Name' placeholder='Username'/>
							<br />
						</Form.Group>
						<Form.Group>
							<Form.Field control={Input} label='Time'/>	
							<br />
						</Form.Group>
						<Form.Group>
							<Form.Field control={Input} label='Doctor'/>
							<br />
						</Form.Group>
						<Form.Group inline>
							<Form.Field control={TextArea} 
								label='Reason for Visit'
								onChange={this.handleChange}
								value={this.state.reason}
								/>
								<br />
						</Form.Group>
						<Form.Group>
							<Form.Field control={Button}>Submit</Form.Field>
						</Form.Group>
					</Form>
				</ul>
			</div>

		)
	
	}
}

const mapStateToProps = (state, ownProps) => {
	// debugger;
	return {
		appointment: state.appointments[ownProps.match.params.id]
	}
}

const mapDispatchToProps = dispatch => {
	return {
		receiveAppointment: appointment => dispatch(receiveAppointment(appointment))
	}
}

        


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookingForm))
