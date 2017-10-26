import React from 'react'
import SearchItem from './SearchItem';
import AppointmentList from '../appointments/AppointmentList'
import { Route } from 'react-router-dom'
import { Grid, Button } from 'semantic-ui-react'


class SearchResults extends React.Component {

	render() {
		return (
			<div>
				<Grid>
					<Grid.Row>
						<Grid.Column width={4}><SearchItem doctor={this.props.doctor}/></Grid.Column>
						<Grid.Column width={2}></Grid.Column>
						<Grid.Column width={7}><AppointmentList doctor={this.props.doctor}  />	</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		)
	}
}

export default SearchResults