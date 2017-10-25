import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import moment from 'moment'
import { connect } from 'react-redux'
import { filteredDoctors } from '../../actions/FilterActions';
import { Grid } from 'semantic-ui-react'

class AppointmentItem extends React.Component {

	render() {
		
		var appointments = this.props.appointment.start_time
		let appdate = moment(appointments).format("MMMM Do YYYY")
		let appday = moment(appointments).format("dddd")
		let apptime = moment(appointments).format("h:mm a")
		// const filteredAppointments = this.props.doctor.appointments.map((appointments) => )
		return (
		   <div>
	        <Grid>
	          <Grid.Row>
           		<Grid.Column>
          	  		{appday}
      	  		</Grid.Column>
      	  		<Grid.Column>
          	  		{apptime}
      	  		</Grid.Column>
  	  		  </Grid.Row>
  		  	</Grid>
	    </div>
	    )
	}
}



function mapDispatchToProps(dispatch) {
  return {
      filteredDoctors: (specialty, address) => 
        dispatch(filteredDoctors(specialty, address)),
      
    }
  }
 

 export default connect(null, mapDispatchToProps)(AppointmentItem)