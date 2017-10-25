import React from 'react';
import moment from 'moment';
import SearchResults from './SearchResults';
import { getDayRange } from '../../actions/AppointmentActions';
import { Card, Button, Form } from 'semantic-ui-react';
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
        <Button>L</Button>
        {`${today}`.slice(0, 10)}
        {`${tomorrow}`.slice(0, 10)}
        {`${dayAfter}`.slice(0, 10)}
        <Button>R</Button>
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


