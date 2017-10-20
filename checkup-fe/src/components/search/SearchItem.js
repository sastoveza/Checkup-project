import React from 'react';
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { createDoctorFavorite } from '../../actions/FavoriteActions'
// import { create } from '../../actions/FavoriteActions'
import { Card, Icon, Image, Grid } from 'semantic-ui-react'
// import {parseJwt} from '../../services/decodeJWT'


class SearchItem extends React.Component{


  render(){
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

   return (
       <div>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <Card>
                <Image src={this.props.doctor.image_url} size='medium' />
                <Card.Content>
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
                  <a>
                  <Icon name="user" />
                  {this.props.doctor.city},{this.props.doctor.state}
                  </a>..................... <a  className="add" onClick={this.handleClick}>Add Doc</a>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid.Row>
      </Grid>
        
    </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    doctors: state.doctors.list
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createDoctorFavorite: () => {
      dispatch(createDoctorFavorite())
    }
  }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(SearchItem)