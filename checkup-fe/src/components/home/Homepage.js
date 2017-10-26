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

export default class HomepageLayout extends Component {
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
                  
                </Container>
          </Segment>  
        </Visibility>

        <Segment style={{ padding: '8em 0em' }} vertical>
          <Grid container stackable verticalAlign='middle'>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header as='h3' style={{ fontSize: '2em' }}>Find Doctors In Your City</Header>
                <p style={{ fontSize: '1.33em' }}>
                  It's hard to find time to take care of yourself. Let alone go to a doctor. This site makes it easy for you to find a doctor.
                </p>
                <Header as='h3' style={{ fontSize: '2em' }}>We Make Taking Care of Your Health Easy</Header>
                <p style={{ fontSize: '1.33em' }}>
                  Yes that's right, it's as easy as one, two, three. Search up. Book up. Get check up. 
                </p>
              </Grid.Column>
              <Grid.Column floated='right' width={6}>
                <Image
                  bordered
                  rounded
                  size='large'
                  src='/assets/images/wireframe/white-image.png'
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column textAlign='center'>
               <Link to="/doctors"><Button size='huge'>Check Them Out</Button></Link>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '0em' }} vertical>
          <Grid celled='internally' columns='equal' stackable>
            <Grid.Row textAlign='center'>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>"What a Company"</Header>
                <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
              </Grid.Column>
              <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                <Header as='h3' style={{ fontSize: '2em' }}>"I shouldn't have gone with their competitor."</Header>
                <p style={{ fontSize: '1.33em' }}>
                  <Image avatar src='/assets/images/avatar/large/nan.jpg' />
                  <b>Nan</b> Chief Fun Officer Acme Toys
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
        <Segment style={{ padding: '8em 0em' }} vertical>
          <Container text>
            <Header as='h3' style={{ fontSize: '2em' }}>Breaking The Grid, Grabs Your Attention</Header>
            <p style={{ fontSize: '1.33em' }}>
              Instead of focusing on content creation and hard work, we have learned how to master the art of doing
              nothing by providing massive amounts of whitespace and generic content that can seem massive, monolithic
              and worth your attention.
            </p>
            <Button as='a' size='large'>Read More</Button>
            <Divider
              as='h4'
              className='header'
              horizontal
              style={{ margin: '3em 0em', textTransform: 'uppercase' }}
            >
              <a href='#'>Case Studies</a>
            </Divider>
            <Header as='h3' style={{ fontSize: '2em' }}>Did We Tell You About Our Bananas?</Header>
            <p style={{ fontSize: '1.33em' }}>
              Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but it's really
              true.
              It took years of gene splicing and combinatory DNA research, but our bananas can really dance.
            </p>
            <Button as='a' size='large'>I'm Still Quite Interested</Button>
          </Container>
        </Segment>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided inverted stackable>
              <Grid.Row>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='About' />
                  <List link inverted>
                    <List.Item as='a'>Sitemap</List.Item>
                    <List.Item as='a'>Contact Us</List.Item>
                    <List.Item as='a'>Religious Ceremonies</List.Item>
                    <List.Item as='a'>Gazebo Plans</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={3}>
                  <Header inverted as='h4' content='Services' />
                  <List link inverted>
                    <List.Item as='a'>Banana Pre-Order</List.Item>
                    <List.Item as='a'>DNA FAQ</List.Item>
                    <List.Item as='a'>How To Access</List.Item>
                    <List.Item as='a'>Favorite X-Men</List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as='h4' inverted>Footer Header</Header>
                  <p>Extra space for a call to action inside the footer that could help re-engage users.</p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
}