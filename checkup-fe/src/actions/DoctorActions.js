function fetchingDoctors() {
	return {
		type: "FETCHING_DOCTORS"
	}
}

export function fetchedDoctors(alldoctors) {
	// debugger;
	return {
		type: "FETCHED_DOCTORS",
		payload: alldoctors
	}
}


export function fetchDoctors() {
	return function(dispatch) {
		dispatch(fetchingDoctors())
		fetch('http://localhost:3000/doctors')
		.then(res => res.json())
		.then((json) => {
			dispatch(fetchedDoctors(json))
		})
	}
}
