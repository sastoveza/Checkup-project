import React from 'react';
import { Redirect } from 'react-router-dom'
import { receiveAppointment } from '../../actions/AppointmentActions'
import { Card, Icon, Image, Grid, Button} from 'semantic-ui-react'
import AppointmentBooking from '../appointments/AppointmentBooking'
// import DoctorAppointment from './DoctorAppointment'
import { getDayRange } from '../appointments/GetDayRange'
import { sortedAppointmentsByDay } from '../../reducers/Selectors'
import { filteredDoctors } from '../../actions/FilterActions';
import { connect } from 'react-redux'
// import {parseJwt} from '../../services/decodeJWT'


class SearchItem extends React.Component{

    constructor(props) {
    super(props);

    const days = getDayRange();

    this.state = {
      today: days[0],
      tomorrow: days[1],
      dayAfter: days[2],
      dayFour: days[3],
    };
  }

  render() {

    const { doctor, appointments } = this.props;
    const { today, tomorrow, dayAfter, dayFour } = this.state;
    // debugger;

    if (doctor) {
      if (doctor.specialties) {
        const daySortedApps = sortedAppointmentsByDay(
          appointments, [today, tomorrow, dayAfter, dayFour]
        );
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

    console.log('APPTS: ', this.props.doctor.appointments)
     return (
         <div>
          <Card.Group itemsPerRow={3}>
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
                <Button basic color='grey' size='large'>Book Appointment Now!</Button>
            </Card.Content>
            </Card>
          </Card.Group>
          
         </div>
        )
      }

    }
  }
}




// function mapStateToProps(state){
//   // debugger
//   return {
//     fitlredResults: state.doctors.filteredResults,
//     isSearching: state.doctors.isSearching
//   }
// }

function mapDispatchToProps(dispatch) {
  return {
      filteredDoctors: (specialty, address) => 
        dispatch(filteredDoctors(specialty, address)),
      
      receiveAppointment: () => 
        dispatch(receiveAppointment())
    }
  }
 

 export default connect(null, mapDispatchToProps)(SearchItem)


 // <DoctorAppointment 
          // apps={daySortedApps}
          // daysToRender={this.state} />