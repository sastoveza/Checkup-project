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



// function searchingDoctors() {
// 	return {
// 		type: "SEARCHING_DOCTORS"
// 	}
// }

// function searchedDoctors(doctors){
// 	return{
// 		type: "SEARCHED_DOCTORS",
// 		payload: doctors
// 	}
// }

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

// function searchingAddress() {
// 	return {
// 		type: "SEARCHING_ADDRESS"
// 	}
// }

// function searchedAddress(address) {
// 	return {
// 		type: "SEARCHED_ADDRESS",
// 		payload: address
// 	}
// }

// export function searchAddress(search) {
// 	return function(dispatch) {
// 		dispatch(searchingAddress())
// 		fetch('http://localhost:3000/doctors')
// 		.then(res => res.json())
// 		.then(json => {
// 			dispatch(searchedAddress(json))
// 		})
// 	}
// }