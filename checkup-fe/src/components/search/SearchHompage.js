import React, { Component } from 'react'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
} from 'semantic-ui-react';
import { Link } from 'react-router-dom'
import SearchForm from '../search/SearchForm'


const FixedMenu = () => (
  <Menu fixed='top' size='large'>
    <Container>
      <Link to="/"><Menu.Item active>Home</Menu.Item></Link>
      <Link to="/doctors"><Menu.Item>Doctors</Menu.Item></Link>
      <Link to="/"><Menu.Item>Company</Menu.Item></Link>
      <Menu.Menu position='right'>
        <Menu.Item className='item'>
          <Link to="/login"><Button>Log in</Button></Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/signUp"><Button primary>Sign Up</Button></Link>
        </Menu.Item>
      </Menu.Menu>
    </Container>
  </Menu>
)

export default class SearchHomepage extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ visible: false })
  showFixedMenu = () => this.setState({ visible: true })

  render() {
    const { visible } = this.state

    return (
      <div>
        { visible ? <FixedMenu /> : null }

        <Visibility
          onBottomPassed={this.showFixedMenu}
          onBottomVisible={this.hideFixedMenu}
          once={false}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 500, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                  <Link to="/"><Menu.Item active>Home</Menu.Item></Link>
                  <Link to="/doctors"><Menu.Item>Doctors</Menu.Item></Link>
                  <Link to="/"><Menu.Item>About</Menu.Item></Link>
                  <Menu.Item position='right'>
                    <Link to="/login"><Button inverted>Log in</Button></Link>
                    <Link to="/signUp"><Button inverted style={{ marginLeft: '0.5em' }}>Sign Up</Button></Link>
                  </Menu.Item>
                  
              </Menu>
            </Container>

              <Container text>
                <Header
                  as='h1'
                  content='Book Your Doctor'
                  inverted
                  style={{ fontSize: '4em', fontWeight: 'normal', marginBottom: 0, marginTop: '1em' }}
                />
                <Header
                  as='h2'
                  content='Get checked up.'
                  inverted
                  style={{ fontSize: '1.7em', fontWeight: 'normal' }}
                />
                <Link to="/doctors"><Button primary size='huge'>
                  Get Started
                  <Icon name='right arrow' />
                </Button></Link>
              </Container>

                <Container>
                  <Header
                    inverted style={{ fontSize: '2.5em', fontWeight: 'normal' }}
                  />
                    <SearchForm />
                </Container>
          </Segment>  
        </Visibility>
      </div>
    )
  }
}