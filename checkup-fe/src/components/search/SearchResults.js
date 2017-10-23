import React from 'react'
import SearchItem from './SearchItem';
import AppointmentItem from '../appointments/AppointmentItem'
// import AppointmentContainer from '../appointments/AppointmentContainer';
import { Route } from 'react-router-dom'


class SearchResults extends React.Component {

	render() {
		return (
			<div>
				<SearchItem doctor={this.props.doctor}/>
				<AppointmentItem doctor={this.props.doctor} />	
			</div>
		)
	}
}

export default SearchResults