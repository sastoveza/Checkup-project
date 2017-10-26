import React from 'react'
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import { Link, Redirect, withRouter } from 'react-router-dom'
import { loginUser } from '../../actions/UserActions'
import { connect } from 'react-redux'



class LoginForm extends React.Component {
  constructor() {
    super()
  
    this.state = {
    username: "",
    password: ""
  }
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
        <div className='login-form'>
          {/*
            Heads up! The styles below are necessary for the correct render of this example.
            You can do same with CSS, the main idea is that all the elements up to the `Grid`
            below must have a height of 100%.
          */}
          <style>{`
            body > div,
            body > div > div,
            body > div > div > div.login-form {
              height: 100%;
            }
          `}</style>
          <Grid
            textAlign='center'
            style={{ height: '100%' }}
            verticalAlign='middle'
          >
            <Grid.Column style={{ maxWidth: 450 }}>
              <Header as='h2' color='teal' textAlign='center'>
                <Image src='/logo.png' />
                {' '}Log-in to your account
              </Header>
              <Form size='large'>
                <Segment stacked>
                  <Form.Input
                    fluid
                    icon='user'
                    iconPosition='left'
                    placeholder='Username'
                    onChange={this.handleUsernameChange}
                    value={this.state.useranme}
                  />
                  <Form.Input
                    fluid
                    icon='lock'
                    iconPosition='left'
                    placeholder='Password'
                    type='password'
                    onChange={this.handlePassword} 
                    value={this.state.password}
                  />

                  <Button color='teal' fluid size='large' onClick={this.handleSubmit}>Login</Button>
                </Segment>
              </Form>
              <Message>
                New to us?<Link to="/signUp">Sign Up</Link>
              </Message>
            </Grid.Column>
          </Grid>
        </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
 return {
   loginUser: (loginParams) => {
     dispatch(loginUser(loginParams))
   }
 }
}

export default withRouter(connect(null, mapDispatchToProps)(LoginForm))










// import React from 'react'
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';
// import { Link, Redirect } from 'react-router-dom'
// import { loginUser } from '../../actions/UserActions'
// import { connect } from 'react-redux'

// class LoginForm extends React.Component {
//   constructor() {
//     super()
  
//     this.state = {
//     username: "",
//     password: ""
//   }
// }


//   handleUsernameChange = (event) => {
//     this.setState ({
//       username: event.target.value
//     })
//   }

//   handlePassword = (event) => {
//     this.setState ({
//       password: event.target.value
//     })
//   }

//    handleSubmit = (event) => {
//     event.preventDefault()
// 	this.props.loginUser({ username: this.state.username, password: this.state.password})
//     this.setState ({
//       username: "",
//       password: ""
//     })
//   }

//   render() {
//     return (
//       <div>
//         <MuiThemeProvider>
//           <div>
//           <ul>
//             <TextField
//               hintText="Enter your Username"
//               floatingLabelText="Username"
//               onChange={this.handleUsernameChange} value={this.state.useranme} />
//               <br />
//             <TextField 
//               type="password"
//               hintText="Enter your Password"
//               floatingLabelText="Password"
//               onChange={this.handlePassword} value={this.state.password} />
//               <br />
//             <RaisedButton label="Submit" primary={true} style={style} onClick={this.handleSubmit} />
//           </ul>
//           </div>
//         </MuiThemeProvider>
//       </div>
//     )
//   }
// }

// const style = {
//   margin: 50,
// }

// function mapDispatchToProps(dispatch) {
// 	return {
// 		loginUser: (loginParams) => {
// 			dispatch(loginUser(loginParams))
// 		}
// 	}
// }

// export default connect(null, mapDispatchToProps)(LoginForm)