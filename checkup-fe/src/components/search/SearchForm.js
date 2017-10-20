import React from 'react';
import { filteredDoctors } from '../../actions/FilterActions';
import { connect } from 'react-redux';
import { Header, Icon, Popup, Form, Button } from 'semantic-ui-react';


class SearchForm extends React.Component {
	constructor() {
		super()

		// const today = new Date()
		// const dayAfter = new Date()
		// dayAfter.setDate(dayAfter.getDate() + 2)

		this.state = {
			speciality: '',
			address: ''
		}
	}

	handleAddressChange = (event) => {
		event.preventDefault()
		this.setState ({
			address: event.target.value,
			// address: event.target.value
		})
	}

	handleSpecialtyChange = (event) => {
		event.preventDefault()
		this.setState ({
			specialty: event.target.value,
			// address: event.target.value
		})
	}

	handleSearch = (event) => {
		event.preventDefault()
		if (this.state.specialty  !== "" && this.state.address !== "") {
			this.props.filteredDoctors(this.state.specialty, this.state.address)
		}

		// if (this.state.address !== "") {
		// 	this.props.searchAddress(this.state.address)
		// }
		this.setState ({
			specialty: "",
			address: ""
		})

		this.props.history.push("/results")
	}



	// isHomepage() {
	// 	if (this.props.location.pathname === "/") {
	// 		return "search-home";
	// 	} else {
	// 		return "search-bar"
	// 	}
	// }


	render() {

		// const searchClass = this.isHomepage()

		return (
			<div>	
				<Form onSubmit={this.handleSearch}>
					<Form.Field inline>
						<input type="text" 
							value={this.state.specialty} 
							onChange={this.handleSpecialtyChange} 
							placeholder="Search for Doctors" />

						<input type="text"
							value={this.state.address}
							onChange={this.handleAddressChange}
							placeholder="Search with Address" />
					
					 	<Button>Search</Button>
				 	</Form.Field>
			 	</Form>
			 	<br />
		 	</div>
	 	)

	}
}

function mapDispatchToProps(dispatch) {
	return {
			filteredDoctors: (specialty, address) => 
				dispatch(filteredDoctors(specialty, address)),
			// searchAddress: (search) => 
			// 	dispatch(searchAddress(search))
		
	}
}

export default connect(null, mapDispatchToProps)(SearchForm)