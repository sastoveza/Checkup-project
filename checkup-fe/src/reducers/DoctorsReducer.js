function DoctorsReducer(state = { alldoctors: [], filteredResults: []}, action){
  switch (action.type) {
  	case "FETCHED_DOCTORS":
  		return Object.assign({}, state, {alldoctors: action.payload, isFetching: false})
	case "FETCHING_DOCTORS":
		return Object.assign({}, state, { isFetching: true})
	case "FILTERED_DOCTORS":
		let filtered = state.alldoctors.filter(doctor => (doctor.city.toLowerCase().includes(action.addresspayload) || doctor.state.toLowerCase().includes(action.addresspayload) || doctor.zip.includes(action.addresspayload) ) && ( doctor.specialties.split(" ")[0].toLowerCase().includes(action.specialtypayload)))
		console.log(filtered)
		return Object.assign({}, state, { filteredResults: [...filtered], isFetching: false})
	case "FILTERING_DOCTORS":
		return Object.assign({}, state, { isFetching: true})
    default:
      return state
  }
}

export default DoctorsReducer

