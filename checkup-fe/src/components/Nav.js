import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { logoutUser } from '../actions/UserActions';


class Nav extends React.Component {



  render() {

  	if (localStorage.getItem('jwtToken')) {
  		return (
  			<div className="ui blue header menu">
	  			  <NavLink activeClassName="active" className="item" to="/home">Check Up</NavLink>
		        <NavLink activeClassName="active" className="item" to="/myProfile">My Profile</NavLink>
		        <NavLink activeClassName="active" className="item right" to="/login" onClick={this.props.logoutUser}>Log Out</NavLink>
  			</div>
		)
  	} else {
    return (
      	<div className="ui secondary menu">
      	
	        <NavLink activeClassName="active" className="item" to="/home">Check Up</NavLink>
	        <NavLink activeClassName="active" className="item right" to="/login">Log In</NavLink>
       	
     	 </div>
    	)
	   }	
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logoutUser: () => {
      dispatch(logoutUser())
    }
  }
}

export default connect(null, mapDispatchToProps)(Nav)
