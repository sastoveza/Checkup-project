import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import { loginUser } from '../../actions/UserActions'
import { connect } from 'react-redux'

class LoginForm extends React.Component {

  state = {
    username: "",
    password: ""
  }

  handleUsernameChange = (event) => {
    this.setState ({
      username: event.target.value
    })
  }

  handlePassword = (event) => {
    this.setState ({
      password: event.target.value
    })
  }

   handleSubmit = (event) => {
    event.preventDefault()
	this.props.loginUser({ username: this.state.username, password: this.state.password})
    this.setState ({
      username: "",
      password: ""
    })
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <ul>
            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange={this.handleUsernameChange} value={this.state.useranme} />
              <br />
            <TextField 
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange={this.handlePassword} value={this.state.password} />
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
  margin: 50,
}

function mapDispatchToProps(dispatch) {
	return {
		loginUser: (loginParams) => {
			dispatch(loginUser(loginParams))
		}
	}
}

export default connect(null, mapDispatchToProps)(LoginForm)