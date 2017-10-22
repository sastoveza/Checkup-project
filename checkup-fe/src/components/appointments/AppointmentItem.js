import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'

class AppointmentItem extends React.Component {

	render() {

		return (
		   <div>
	        <Table celled inverted selectable>
	          <Table.Header>
	            <Table.Row>
	              <Table.HeaderCell>Day</Table.HeaderCell>
	              <Table.HeaderCell>Date</Table.HeaderCell>
	              <Table.HeaderCell>Time</Table.HeaderCell>
              	</Table.Row>
          	  </Table.Header>

          	  <Table.Body>
          	  	<Table.Row>
          	  		<Table.Cell>{this.props.appointment.start_time}</Table.Cell>
      	  		</Table.Row>
  	  		  </Table.Body>
  		  	</Table>
	    </div>
	    )
	}
}

export default AppointmentItem