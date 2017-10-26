import React, { Component } from 'react';
import Nav from './Nav';
import { withRouter, Route, Redirect, Link} from 'react-router-dom';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import { fetchDoctors } from '../actions/DoctorActions'
import SearchContainer from './search/SearchContainer';
import Authorize from './Authorize';
import Homepage from './home/Homepage';
import SearchHomepage from './search/SearchHompage'
import LoginForm from './users/LoginForm';
import SignUpForm from './users/SignUpForm';
import BookingForm from './appointments/BookingForm'
import UserProfile from './users/UserProfile'
import { currentUser } from '../actions/UserActions';





class App extends Component {


	componentDidMount() {
    console.log("this is in app", this.props.user)
		this.props.fetchDoctors()
    if (localStorage.getItem("jwtToken") && this.props.user === "") {
      console.log("got jwt", this.props)
      this.props.currentUser()
    }
	}



  render() {

    console.log("this is in app", this.props.user)
    const AuthLoginForm = Authorize(LoginForm)
    const AuthSignUpForm = Authorize(SignUpForm)


    return (
      <div className="App">        
        	
        
          <Route path="/home" component={Homepage}/>
          <Route exact path="/doctors" render={(props) => <SearchHomepage {...props}/>} />
         

          <Route path="/" component={Nav} />
          <Route path="/login" render={(props) => <AuthLoginForm  {...props} /> } />
          <Route path="/signUp" render={(props) => <AuthSignUpForm {...props} /> } />
          <Route exact path="/results" render={(props) => <SearchContainer {...this.props} {...props} />} /> 
          <Route exact path="/booking/:id" component={BookingForm} />
          <Route path="/profile" render={(props) => <UserProfile users={this.props.user}/> } />

      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("mapStateToProps", state)
  return {
    user: state.users.currentUser.user
  }
}

function mapDispatchToProps(dispatch) {
	return {
		fetchDoctors: () => {
			dispatch(fetchDoctors())

		},
    currentUser: () => {
      dispatch(currentUser())
    }
	}
}




export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));

//  <Route path="/" component={Nav}/>
//<Route exact path="/" render={(props) => <SearchContainer {...this.props} {...props} />} />  
//<Route path="/results" render={(props) => <SearchForm {...props} />} />

