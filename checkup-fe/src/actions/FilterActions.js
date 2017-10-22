import { fetchDoctors } from './DoctorActions'


export function filteringDoctors() {
	return {
		type: "FILTERING_DOCTORS"
	}
}

export function filteredDoctors(specialty, address) {
	return {
		type: "FILTERED_DOCTORS",
		specialtypayload: specialty,
		addresspayload: address

	}
}


