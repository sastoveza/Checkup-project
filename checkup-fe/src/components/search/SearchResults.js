import React from 'react'
import SearchItem from './SearchItem';
import AppointmentList from '../appointments/AppointmentList'
import { Route } from 'react-router-dom'


class SearchResults extends React.Component {

	render() {
		return (
			<div>
				<SearchItem doctor={this.props.doctor}/>
				<AppointmentList doctor={this.props.doctor}  />	
			</div>
		)
	}
}

export default SearchResults