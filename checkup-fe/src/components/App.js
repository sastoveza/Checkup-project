import React, { Component } from 'react';
import Nav from './Nav';
import { withRouter, Route, Redirect, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import { fetchDoctors } from '../actions/DoctorActions'
// import UserProfile from './users/UserProfile';
import SearchContainer from './search/SearchContainer';
// import AppointmentContainer from './appointments/AppointmentContainer';
// import ResultsContainer from './results/ResultsContainer';
import Authorize from './Authorize';
// import Homepage from './home/Homepage';
import SearchForm from './search/SearchForm'
import LoginForm from './users/LoginForm';
import SignUpForm from './users/SignUpForm';
import BookingForm from './appointments/BookingForm'




class App extends Component {


	componentDidMount() {
		this.props.fetchDoctors()
	}



  render() {

    // const AuthUserProfile = Authorize(UserProfile)
    const AuthLoginForm = Authorize(LoginForm)
    const AuthSignUpForm = Authorize(SignUpForm)


    return (
      <div className="App">        
        	
          <Route path="/" component={Nav}/>
          
          <Route path="/login" render={(props) => <AuthLoginForm  {...props} /> } />
          <Route path="/signUp" render={(props) => <AuthSignUpForm {...props} /> } />
          <Route path="/" render={(props) => <SearchForm {...props}/>} />
          <Route exact path="/results" render={(props) => <SearchContainer {...this.props} {...props} />} /> 
          <Route exact path="/booking" component={BookingForm} />

      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
	return {
		fetchDoctors: () => {
			dispatch(fetchDoctors())
		}
	}
}



export default withRouter(connect(null, mapDispatchToProps)(App));

//<Route exact path="/" render={(props) => <SearchContainer {...this.props} {...props} />} />  
//<Route path="/results" render={(props) => <SearchForm {...props} />} />

