import React from 'react';
import { Redirect, Link, withRouter } from 'react-router-dom';
import moment from 'moment'
import { connect } from 'react-redux'
import { getDayRange } from '../../actions/AppointmentActions';
import { filteredDoctors } from '../../actions/FilterActions';
import { Grid, Button } from 'semantic-ui-react'

class AppointmentItem extends React.Component {

	constructor(props) {
		super(props)

		const days = getDayRange()

		this.state = {
		  today: days[0],
	      tomorrow: days[1],
	      dayAfter: days[2]
		}
	}

	render() {
		

		const { today, tomorrow, dayAfter } = this.state


		var appId = this.props.appointment.id
		var appointments = this.props.appointment.start_time
		let appdate = moment(appointments).format("MMMM Do YYYY")
		let appday = moment(appointments).format("dddd")
		let apptime = moment(appointments).format("h:mm a")


		let apptoday = ""
		let apptomorrow = ""
		let appdayAfter = ""
			if (appdate == today) {
				apptoday = apptime
			} else if (appdate = tomorrow) {
				apptomorrow = apptime
			} else {
				appdayAfter = apptime
			}



		return (
		   <div>
	        <Grid float='right' textAlign='center'>
	          <Grid.Row>
	          <Grid.Column width={7}></Grid.Column>
	          <Grid.Column width={1}>
	
	          </Grid.Column>
	          
	          <Grid.Column width={2}>
	            <Link to={`/booking/${appId}`}>{`${apptoday}`.slice(0, 10)}</Link>
	          </Grid.Column>
	          <br />

	          <Grid.Column width={2}>
	            <Link to={`/booking/${appId}`}>{`${apptomorrow}`.slice(0, 10)}</Link>
	          </Grid.Column>
	          <br />

	          <Grid.Column width={2}>
	            <Link to={`/booking/${appId}`}>{`${appdayAfter}`.slice(0, 10)}</Link>
	          </Grid.Column>
	          <br />

	          <Grid.Column width={1}>  
	          </Grid.Column>
	          <Grid.Column width={1}></Grid.Column>
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
 

 export default withRouter(connect(null, mapDispatchToProps)(AppointmentItem))