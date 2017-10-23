// make a stupid-ass component called ResultsContainer
// ALL ITS GUNNA DO is pass down 
// <DoctorContainer />
// <AppointmentContainer />
// Now they is siblings
// make your app.css route for /results component={ResultsContainer}

import React from 'react'
import SearchContainer from '../search/SearchContainer';
// import AppointmentContainer from '../appointments/AppointmentContainer';
import { Route } from 'react-router-dom'


class ResultsContainer extends React.Component {

	render() {
		return (
			<div>
				<SearchContainer />
				
			</div>
		)
	}
}

export default ResultsContainer