import React from 'react';
import { searchDoctors } from '../../actions/DoctorActions';
import { connect } from 'react-redux';
import { Header, Icon, Popup } from 'semantic-ui-react'

class SearchForm extends React.Component {
	constructor() {
		super()
		this.state = {
			searchTerm: ""
		}
	}

	handleSearchChange = (event) => {
		event.preventDefault()
		this.setState ({
			searchTerm: event.target.value
		})
	}

	handleSearch = (event) => {
		event.preventDefault()
		if (this.state.searchTerm  !== "") {
			this.props.searchDoctors(this.state.searchTerm)
		}

		this.setState ({
			searchTerm: ""
		})
	}

	render() {
		return (
			<div className="ui header blue menu">	
				<form onSubmit={this.handleSearch}>
					<input type="text" value={this.state.searchTerm} onChange={this.handleSearchChange} placeholder="Search for Doctors" />
				 	<input type="submit" value="Search"/>
			 	</form>
			 	<br />
		 	</div>
	 	)

	}
}

function mapDispatchToProps(dispatch) {
	return {
		searchDoctors: (search) => {
			dispatch(searchDoctors(search))
		}
	}
}

export default connect(null, mapDispatchToProps)(SearchForm)