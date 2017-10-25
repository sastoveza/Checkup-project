import React from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/UserActions';



class Nav extends React.Component {
  goToLocation(path) {
    window.location = path;
  }

  render() {
  	if (localStorage.getItem('jwtToken')) {
  		return (
  			<div className="ui secondary menu">
	  			  <NavLink activeClassName="active" className="item" to="/">Check Up</NavLink>
		        <NavLink activeClassName="active" className="item" to="/profile">My Profile</NavLink>
            <NavLink activeClassName="active" className="item right" to="/login" onClick={this.props.logoutUser}>Log Out</NavLink>
          
  			</div>
		)
  	} else {
    return (
      	<div className="ui secondary menu">
      	
	        <NavLink activeClassName="active" className="item" to="/">Check Up</NavLink>
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



export default withRouter(connect(null, mapDispatchToProps)(Nav))
