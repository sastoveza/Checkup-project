import React from 'react';
import { filteredDoctors } from '../../actions/FilterActions';
import { connect } from 'react-redux';
import { Link, Redirect, withRouter } from 'react-router-dom'
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Visibility,
  Form
} from 'semantic-ui-react';
// import { receiveAppointment } from '../../actions/AppointmentActions';


class SearchForm extends React.Component {
	constructor() {
		super()

		this.state = {
			speciality: '',
			address: ''
		}
	}

	handleAddressChange = (event) => {
		event.preventDefault()
		this.setState ({
			address: event.target.value,
			
		})
	}

	handleSpecialtyChange = (event) => {
		event.preventDefault()
		this.setState ({
			specialty: event.target.value,
			
		})
	}

	handleSearch = (event) => {
		event.preventDefault()
		if (this.state.specialty  !== "" && this.state.address !== "") {
			this.props.filteredDoctors(this.state.specialty, this.state.address)
		}
		// console.log("hitting the search")
		// this.props.receiveAppointment()

		
		this.setState ({
			specialty: "",
			address: ""
		})

		this.props.history.push("/results")
	}

	render() {

	

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
								placeholder="Search with City" />
						
						 	<Button>Search</Button>
					 	</Form.Field>
				 	</Form>
		 	</div>
	 	)

	}
}

function mapDispatchToProps(dispatch) {
	return {
			filteredDoctors: (specialty, address) => 
				dispatch(filteredDoctors(specialty, address)),
			
			// receiveAppointment: () => 
			// 	dispatch(receiveAppointment())
	}
}

export default withRouter(connect(null, mapDispatchToProps)(SearchForm))