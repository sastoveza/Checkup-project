import React, { Component } from 'react';
import Nav from './Nav';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import { fetchDoctors } from '../actions/DoctorActions'
// import UserProfile from './users/UserProfile';
import SearchContainer from './search/SearchContainer';
// import AppointmentContainer from './appointments/AppointmentContainer';
import ResultsContainer from './results/ResultsContainer';
import Authorize from './Authorize';
// import Homepage from './home/Homepage';
import LoginForm from './users/LoginForm';
import SignUpForm from './users/SignUpForm';




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
        	<Nav />
          
          
          <Route exact path="/login" render={(props) => <AuthLoginForm {...this.props} {...props} /> } />
          <Route exact path="/signUp" render={(props) => <AuthSignUpForm {...this.props} {...props} /> } />
       	  <Route exact path="/results" component={ResultsContainer} />
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



export default connect(null, mapDispatchToProps)(App);

//<Route exact path="/" render={(props) => <SearchContainer {...this.props} {...props} />} />  
//<Route path="/results" render={(props) => <SearchForm {...props} />} />

