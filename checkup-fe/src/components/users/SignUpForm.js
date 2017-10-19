import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { connect } from 'react-redux';
import { signUpUser } from '../../actions/UserActions';


class SignUpForm extends React.Component {

	state = {
		username: "",
		password: ""
	}



  	handleUsernameChange = (event) => {
    	this.setState({
        username: event.target.value
    })

  }

	handlePasswordChange = (event) => {
	    this.setState({
	    password: event.target.value
    })

  }

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.signUpUser({name: this.state.username, password: this.state.password})
		this.setState({
			username: "",
			password: ""
		})

	}

    


	render() {
		return(
			<div>
				<MuiThemeProvider>
					<div>
					<ul>
						<TextField
							hintText="Create your Username"
							floatingLabelText="Create your Username"
							onChange={this.handleUsernameChange} value={this.state.username} />
							<br />
						<TextField
							type="password"
							hintText="Create your Password"
							onChange={this.handlePasswordChange} value={this.state.password} />
							<br />
						<RaisedButton label="Submit" primary={true} style={style} onClick={this.handleSubmit} />
					</ul>
					</div>
				</MuiThemeProvider>
			</div>
		)
	}
}

const style = {
margin: 15,

}

function mapDispatchToProps(dispatch) {
	return{
		signUpUser: (loginParams) => {
			dispatch(signUpUser(loginParams))
		}
	}
}

export default connect(null, mapDispatchToProps)(SignUpForm)
