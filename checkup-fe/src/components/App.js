import React, { Component } from 'react';
import Nav from './Nav';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { fetchFavorites } from '../actions/FavoriteActions';
import { connect } from 'react-redux';
import thunk from 'redux-thunk';
import UserProfile from './users/UserProfile';
import SearchContainer from './search/SearchContainer';
import Authorize from './Authorize';
import Homepage from './home/Homepage';


class App extends Component {



  render() {

    return (
      <div className="App">        
        	<Nav />
          <Route path="/" render={(props) => <Homepage {...props} />} />      	
       
      </div>
    );
  }
}


export default App;

