import React from 'react'
import { connect } from 'react-redux'
import SearchList from './SearchList'
import { Route, Redirect, withRouter } from 'react-router-dom'


class SearchContainer extends React.Component {




  render(){
  

    return (
      <div>
        <Route path="/results" render={(props) => <SearchList {...this.props} {...props}/> } />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    alldoctors: state.doctors.alldoctors,
    isSearching: state.doctors.isSearching
  }
}



export default withRouter(connect(mapStateToProps)(SearchContainer))

