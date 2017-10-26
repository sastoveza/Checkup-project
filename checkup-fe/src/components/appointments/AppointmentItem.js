import React from 'react';
import { Redirect, Link, withRouter } from 'react-router-dom';
import moment from 'moment'
import { connect } from 'react-redux'
import { getDayRange } from '../../actions/AppointmentActions';
import { filteredDoctors } from '../../actions/FilterActions';
import { Grid, Button } from 'semantic-ui-react'

class AppointmentItem extends React.Component {

	constructor(props) {
		super(props);

		this.appointmentGroup = props['appointmentGroup'];

		const days = getDayRange()
		this.state = {
		  today: days[0],
	      tomorrow: days[1],
	      dayAfter: days[2]
		}
	}

	getAppointment(index) {
		if (this.appointmentGroup[index] != null) {
			return this.appointmentGroup[index];
		}
		return null;
	}

	render() {

		const today = this.state['today'];
		const tomorrow = this.state['tomorrow'];
		const dayAfter = this.state['dayAfter'];

		var appointments = [];

        for (var i = 0; i < 3; i++){
        	var appointment = this.getAppointment(i);
        	if (appointment != null) {
        		appointments[i] = {
                    appId : appointment.id,
                    startTime: moment(appointment.start_time).format('hh:mm a')
                };
        	} else {
                appointments[i] = {
                    appId : null,
                    startTime: null
                };
        	}
        }

		return (
	            <Grid.Row>
	              <Grid.Column width={4}>
	                 <Link to={`/booking/${appointments[0].appId}`}>{appointments[0].startTime}</Link> 
	              </Grid.Column>
	              <Grid.Column width={4}>
	                <Link to={`/booking/${appointments[1].appId}`}>{appointments[1].startTime}</Link>
	              </Grid.Column>
	              <Grid.Column width={4}>
	                 <Link to={`/booking/${appointments[2].appId}`}>{appointments[2].startTime}</Link>
	              </Grid.Column>
                </Grid.Row>
	    )
	}
}



function mapDispatchToProps(dispatch) {
  return {
      filteredDoctors: (specialty, address) => 
        dispatch(filteredDoctors(specialty, address)),
      
    }
  }
 

 export default withRouter(connect(null, mapDispatchToProps)(AppointmentItem))