function loggedinUser(user) {
	return {
		type: "LOGGEDIN_USER",
		payload: user
	}
}

export function loginUser(loginParams) {
	const body = JSON.stringify(loginParams)
	return function(dispatch) {
		fetch(`http://localhost:3000/login`, {
			method: 'POST',
			body: body,
			headers: {
				"Accept":"application/json",
     			"Content-Type":"application/json"
			}
		})
		.then((res) => res.json())
		.then((json) => {
			if (json.user) {
				localStorage.setItem("jwtToken", json.jwt)
				dispatch(loggedinUser(json.user))
			} else {
				window.alert(json.message)
			}
		})
	}
}

function loggedoutUser() {
	return {
		type: "LOGGEDOUT_USER"
	}
}

export function logoutUser() {
	return function(dispatch) {
		localStorage.removeItem("jwtToken")
		dispatch(loggedoutUser())
	}
}

export function signUpUser(loginParams) {
	const body = JSON.stringify(loginParams)
	return function(dispatch) {
		fetch("http://localhost:3000/users", {
			method: "POST",
			body: body,
			headers: {
				"Accept":"application/json",
     			"Content-Type":"application/json"
			}
		})

		.then((res) => res.json())
		.then((json) => {
			localStorage.setItem("jwtToken", json.jwt)
			dispatch(loggedinUser(json.user))
		})
	}
}

function fetchedCurrentUser (user) {
	return {
		type: "FETCHED_CURRENT_USER",
		payload: user
	}
}

export function currentUser() {
	const jwt = localStorage.getItem("jwtToken")
	return function(dispatch) {
		fetch(`http://localhost:3000/users/me`, {
			method: "GET",
			headers: {
				"Authorization": "Bearer " + jwt
			}
		})
		.then((res) => res.json())
		.then((json) => {
			dispatch(fetchedCurrentUser(json))
		})
	}
}