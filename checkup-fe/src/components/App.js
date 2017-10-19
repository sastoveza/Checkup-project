import React, { Component } from 'react';
import Nav from './Nav';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { fetchFavorites } from '../actions/FavoriteActions';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import { fetchDoctors } from '../actions/DoctorActions'
import UserProfile from './users/UserProfile';
import SearchContainer from './search/SearchContainer';
import Authorize from './Authorize';
import Homepage from './home/Homepage';
// import './stylesheet/search.css'
// import SearchForm from './search/SearchForm'


class App extends Component {


	componentDidMount() {
		this.props.fetchDoctors()
	}



  render() {
    return (
      <div className="App">        
        	<Nav />
          <Route exact path="/" render={(props) => <Homepage {...this.props} {...props} />} />      	
       	  
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
	return {
		fetchDoctors: () => {
			dispatch(fetchDoctors())
		}
	}
}



export default connect(null, mapDispatchToProps)(App);
//<Route path="/results" render={(props) => <SearchForm {...props} />} />

