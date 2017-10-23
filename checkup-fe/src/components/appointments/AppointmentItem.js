import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { filteredDoctors } from '../../actions/FilterActions';
import { Table } from 'semantic-ui-react'

class AppointmentItem extends React.Component {




	render() {
		console.log(this.props.doctor)
		return (
		   <div>
	        <Table celled inverted selectable>
	          <Table.Header>
	            <Table.Row>
	              <Table.HeaderCell>Date</Table.HeaderCell>
	              <Table.HeaderCell>Day</Table.HeaderCell>
	              <Table.HeaderCell>Time</Table.HeaderCell>
              	</Table.Row>
          	  </Table.Header>

          	  <Table.Body>
          	  	<Table.Row>
          	  		<Table.Cell>{this.props.doctor.appointments.start_time}</Table.Cell>
      	  		</Table.Row>
  	  		  </Table.Body>
  		  	</Table>
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