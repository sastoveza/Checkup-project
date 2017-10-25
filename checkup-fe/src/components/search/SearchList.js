import React from 'react';
import moment from 'moment';
import SearchResults from './SearchResults';
import { getDayRange } from '../../actions/AppointmentActions';
import { Card, Button, Form, Item, Grid } from 'semantic-ui-react';
import { connect } from 'react-redux';

class SearchList extends React.Component {

  constructor(props) {
    super(props)

    const days = getDayRange();

    this.state = {
      today: days[0],
      tomorrow: days[1],
      dayAfter: days[2]
    
    }
  }

  render() {
    const { today, tomorrow, dayAfter } = this.state

    const searchItems = this.props.filteredResults.map((doctor, index) => {
      return (<SearchResults key={index} doctor={doctor} history={this.props.history} />
    )})
  
    return (
      <div>
        <Grid float='right' textAlign='center'>
          <Grid.Row>
          <Grid.Column width={7}></Grid.Column>
          <Grid.Column width={1}>
            <Button color='blue'>&lt;</Button>
          </Grid.Column>
          
          <Grid.Column width={2}>
            {`${today}`.slice(0, 10)}
          </Grid.Column>
          
          <Grid.Column width={2}>
            {`${tomorrow}`.slice(0, 10)}
          </Grid.Column>

          <Grid.Column width={2}>
            {`${dayAfter}`.slice(0, 10)}
          </Grid.Column>
          
          <Grid.Column width={1}>
            <Button color='blue'>&gt;</Button>  
          </Grid.Column>
          <Grid.Column width={1}></Grid.Column>

          

          </Grid.Row>
        </Grid>

        <br />
          {searchItems}
         
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    filteredResults: state.doctors.filteredResults,
    isSearching: state.doctors.isSearching
  }
}
export default connect(mapStateToProps)(SearchList);


