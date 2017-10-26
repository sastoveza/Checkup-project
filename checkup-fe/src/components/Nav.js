import React from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/UserActions';
import { Menu, Segment } from 'semantic-ui-react'



class Nav extends React.Component {
  goToLocation(path) {
    window.location = path;
  }

  render() {
  	if (localStorage.getItem('jwtToken')) {
  		return (
  			<div>
          <Menu pointing secondary>
	  			  <NavLink activeClassName="active" className="item" to="/home">Check Up</NavLink>
		        <NavLink activeClassName="active" className="item" to="/profile">My Profile</NavLink>
            <NavLink activeClassName="active" className="item right" to="/login" onClick={this.props.logoutUser}>Log Out</NavLink>
          </Menu>
  			</div>
		)
  	} else {
    return (
      	<div>
          <Menu pointing secondary>
      	
  	        <NavLink activeClassName="active" className="item" to="/home">Check Up</NavLink>
            <NavLink activeClassName="active" className="item right" to="/login">Log In</NavLink>
       	  </Menu>
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
