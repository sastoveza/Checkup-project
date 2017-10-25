import React from 'react';
import { Redirect, Link, withRouter } from 'react-router-dom'
import { receiveAppointment } from '../../actions/AppointmentActions'
import { Card, Icon, Image, Grid, Button} from 'semantic-ui-react'
import { filteredDoctors } from '../../actions/FilterActions';
import { connect } from 'react-redux';
// import AppointmentsTable from '../actions/AppointmentsTable';
// import { sortedAppointmentsByDay } from '../../reducers/Selectors'
import BookingForm  from '../appointments/BookingForm'
// import {parseJwt} from '../../services/decodeJWT'


class SearchItem extends React.Component{
  // constructor(docInfo) {
  //   super(docInfo)

  //   const { doc, apps, dates } = docInfo
  //   const daySortedApps = sortedAppointmentsByDay(apps, dates)
  // }

  render() {

    if (this.props.doctor.image_url === "https://asset2.betterdoctor.com/assets/general_doctor_male.png" || this.props.doctor.image_url === "https://asset3.betterdoctor.com/assets/general_doctor_male.png" || this.props.doctor.image_url === "https://asset1.betterdoctor.com/assets/general_doctor_male.png"){
      this.props.doctor.image_url = "https://semantic-ui.com/images/avatar/large/elliot.jpg"
    }
    if (this.props.doctor.image_url === "https://asset2.betterdoctor.com/assets/general_doctor_female.png" || this.props.doctor.image_url === "https://asset1.betterdoctor.com/assets/general_doctor_female.png" || this.props.doctor.image_url === "https://asset3.betterdoctor.com/assets/general_doctor_female.png"){
      this.props.doctor.image_url = "https://semantic-ui.com/images/avatar2/large/rachel.png"
    }
    var bio = this.props.doctor.bio

    if(bio.length > 400){
      bio = bio.substring(0,400) + "...";
    }

    // console.log('APPTS: ', this.props.doctor.appointments)
   return (
       <div>
        <ul>
          <Card.Group>
            <Card color='olive'>
              <Card.Content>
                <Image floated='right' size='medium' src={this.props.doctor.image_url} />
                  <Card.Header>
                    <a>{this.props.doctor.name}</a>
                  </Card.Header>  
                  <Card.Meta>
                    <span className="date">{this.props.doctor.specialties.split(" ")[0]}</span>
                  </Card.Meta>
                  <Card.Description>
                     {bio}

                  </Card.Description>     
             </Card.Content>
              <Card.Content extra>
                <Icon name="user" />
                {this.props.doctor.city},{this.props.doctor.state}
                <br />
                <Link to="/booking"><Button basic color='grey' size='large'>Book Appointment Now!</Button></Link>
            </Card.Content>
            </Card>
          </Card.Group>
        </ul>
       </div>
      )
    }
  }




function mapDispatchToProps(dispatch) {
  return {
      filteredDoctors: (specialty, address) => 
        dispatch(filteredDoctors(specialty, address)),
      
      receiveAppointment: () => 
        dispatch(receiveAppointment())
    }
  }
 

 export default withRouter(connect(null, mapDispatchToProps)(SearchItem))


  // <AppointmentsTable appsByDays={daySortedApps} />
