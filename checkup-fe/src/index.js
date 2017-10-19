import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { fetchDoctors } from './actions/DoctorActions';
import { fetchFavorites } from './actions/FavoriteActions';
import UsersReducer from './reducers/UsersReducer';
import DoctorsReducer from './reducers/DoctorsReducer';
import FavoritesReducer from './reducers/FavoritesReducer';
import { Provider } from 'react-redux'; 
import { HashRouter } from 'react-router-dom';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'


const RootReducer = combineReducers({
	doctors: DoctorsReducer,
	favorite: FavoritesReducer,
	users: UsersReducer
})

const store =
	createStore(
		RootReducer, composeWithDevTools(applyMiddleware(thunk)))



ReactDOM.render(<Provider store={store}><Router><App /></Router></Provider>, document.getElementById('root'));
registerServiceWorker();

