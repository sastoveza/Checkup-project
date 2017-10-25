import React from 'react';
import { Card, Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import AppointmentItem from './AppointmentItem'

class AppointmentList extends React.Component {

  // state = {
  //  doctors: []
  // }

  render() {
    // console.log(this.props)
    
 
  
    const appointmentItems = this.props.doctor.appointments.map((appointment, index) => {
      return <AppointmentItem key={index} appointment={appointment} history={this.props.history}  />
    })
    
    return (
      <div>
          {appointmentItems}
         
      </div>
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


