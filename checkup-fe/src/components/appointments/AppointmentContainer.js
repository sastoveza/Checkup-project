import React from 'react'
// import { Grid, List, Loader} from 'semantic-ui-react'
import { connect } from 'react-redux'
import AppointmentList from './AppointmentList'
import { Route } from 'react-router-dom'


class AppointmentContainer extends React.Component {




  render(){
  	// console.log("inside of AppointmentContainer", this.props)

    return (
      <div>
        <Route path="/" render={(props) => <AppointmentList {...this.props} {...props}/> } />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    alldoctors: state.doctors.alldoctors,
    isAppointmenting: state.doctors.isAppointmenting
  }
}



export default connect(mapStateToProps)(AppointmentContainer)

