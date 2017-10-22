// import React from 'react';
// import { Route } from 'react-router-dom';
// import LoginForm from './LoginForm';
// import SignUpForm from './SignUpForm';
// import Authorize from '../Authorize';
// import { connect } from 'react-redux';


// class UserProfile extends React.Component{

// 	render() {

// 		const AuthLoginForm = Authorize(LoginForm)
// 		const AuthSignUpForm = Authorize(SignUpForm)

// 		return (
// 			<div>
// 				<Route exact path="/login" component={AuthLoginForm} />
// 				<Route exacpt path="signUp" component={AuthSignUpForm} />
// 			</div>
// 		)
// 	}
// }

// function mapStateToProps(state) {
// 	return {
// 		currentUser: state.users.currentUser
// 	}
// }

// export default connect(mapStateToProps)(UserProfile)