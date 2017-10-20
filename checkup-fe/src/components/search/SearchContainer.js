import React from 'react'
import SearchForm from './SearchForm'
// import { Grid, List, Loader} from 'semantic-ui-react'
import { connect } from 'react-redux'
import SearchList from './SearchList'
import { Route } from 'react-router-dom'


class SearchContainer extends React.Component {




  render(){
  	console.log("inside of SearchContainer", this.props)

    return (
      <div>
        <Route path="/" component={SearchForm}/>
        <Route path="/" render={(props) => <SearchList {...this.props} {...props}/> } />
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



export default connect(mapStateToProps)(SearchContainer)