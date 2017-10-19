function searchingDoctors() {
	return {
		type: "SEARCHING_DOCTORS"
	}
}

function searchedDoctors(doctors){
	return{
		type: "SEARCHED_DOCTORS",
		payload: doctors
	}
}

export function searchDoctors(search) {
	return function(dispatch) {
		dispatch(searchingDoctors())
		fetch('http://localhost:3000/doctors')
		.then(res => res.json())
		.then((json) => {
			dispatch(searchedDoctors(json))
		})
	}
}