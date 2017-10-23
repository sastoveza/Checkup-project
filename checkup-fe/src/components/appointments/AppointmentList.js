import React from 'react';
import { Card, Button, Form } from 'semantic-ui-react'
import { connect } from 'react-redux'
import AppointmentItem from './AppointmentItem'

class AppointmentList extends React.Component {

  // state = {
  //  doctors: []
  // }

  render() {
    // console.log("rendering search list")
    // const searched = this.props.searched.toLowerCase()
    
    // // var filteredDocs= this.props.doctors.filter(doctor => doctor.name.toLowerCase().includes(searched) && JSON.parse(doctor.insurance).includes(insuranceSearch)  || doctor.city.toLowerCase().includes(searched) && JSON.parse(doctor.insurance).includes(insuranceSearch) || doctor.state.toLowerCase().includes(searched) && JSON.parse(doctor.insurance).includes(insuranceSearch) || doctor.zip.includes(this.props.searched) && JSON.parse(doctor.insurance).includes(insuranceSearch) || doctor.specialties.split(" ")[0].toLowerCase().includes(searched) && JSON.parse(doctor.insurance).includes(insuranceSearch)  )
 
    // var filteredDocs = this.props.alldoctors.filter(doctor => doctor.name.toLowerCase().includes(searched) || doctor.city.toLowerCase().includes(searched) || doctor.state.toLowerCase().includes(searched) || doctor.zip.includes(this.props.searched) || doctor.specialties.split(" ")[0].toLowerCase().includes(searched))
  
    const appointmentItems = this.props.doctor.appointments.map((appointment, index) => {
      return <AppointmentItem key={index} appointment={appointment} history={this.props.history} />
    })
    //const insuranceSearch = this.props.insuranceSearch
    

    // const searchItems = filteredDocs.map((doctor, index) => {
    //   return <SearchItem key={doctor.id} doctor={doctor} history={this.props.history}/>
    // })
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


//  { this.props.isSearching ? "Searching..." : null }
          // { this.props.searchResults.length === 0 ? null : <div>
          //   <p></p>