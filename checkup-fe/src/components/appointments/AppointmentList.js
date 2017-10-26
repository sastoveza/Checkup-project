import React from 'react';
import { Card, Button, Form, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';
import AppointmentItem from './AppointmentItem';
import { chunk } from 'lodash';
import { getDayRange } from '../../actions/AppointmentActions';
import moment from 'moment';

class AppointmentList extends React.Component {

  // state = {
  //  doctors: []
  // }

  render() {
    // console.log(this.props)
    var appointmentDays = {
      today: [],
      tomorrow: [],
      dayAfter: []
    };

    const days = getDayRange()
    this.state = {
      today: moment(days[0]).format("MMMM Do YYYY"),
      tomorrow: moment(days[1]).format("MMMM Do YYYY"),
      dayAfter: moment(days[2]).format("MMMM Do YYYY")
    };

    this.props.doctor.appointments.map((appointment, index) => {
      let appdate = moment(appointment.start_time).format("MMMM Do YYYY");
      switch (appdate) {
        case this.state.today:
          appointmentDays.today.push(appointment);
          break;
        case this.state.tomorrow:
          appointmentDays.tomorrow.push(appointment);
          break;
        case this.state.dayAfter:
          appointmentDays.dayAfter.push(appointment);
          break;
        }
    });

    // Create all the rows.
    var appointmentRows = [];
    var isDone = false;
    while(!isDone) {
      // Create row.
      var appointmentRow = [];
      appointmentRow[0] = appointmentDays.today.pop();
      appointmentRow[1] = appointmentDays.tomorrow.pop();
      appointmentRow[2] = appointmentDays.dayAfter.pop();

      if (appointmentRow[0] == null && 
        appointmentRow[1] == null && 
        appointmentRow[2] == null) {
        isDone = true;
      } else {
        appointmentRows.push(appointmentRow);
      }
    }

    const appointmentItems = appointmentRows.map((appointmentRow, index) => {
      return <AppointmentItem key={index} appointmentGroup={appointmentRow} history={this.props.history}  />
    })

    return (
      
        <Grid float='right' textAlign='center'>
          {appointmentItems}
        </Grid>
      
    )
  }
}

function mapStateToProps(state) {
  return {
    filteredResults: state.doctors.filteredResults,
    isSearching: state.doctors.isSearching
  }
}
export default connect(mapStateToProps)(AppointmentList);


