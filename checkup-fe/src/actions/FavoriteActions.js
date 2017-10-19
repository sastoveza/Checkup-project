// import {} from '../../services/decodeJWT'


export function createdDoctorFavorite(favorites) {
	return {
		type: "CREATED_FAVORITES",
		payload: favorites
	}
}

function createFavoritedoctor(doctor) {
	return {
		type: "CREATE_FAVORITE",
		payload: doctor
	}
}

export function createDoctorFavorite(name) {
      const userId = (localStorage.getItem('jwtToken')).user_id
      const docId = this.props.doctor.id
      return function(dispatch) {
      fetch('http://localhost:3000/users/add',{
      method: 'PATCH',
      body: JSON.stringify({user_id: userId, doc_id: docId}),
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
	  })
	    .then((res) => res.json())
	    .then((json) => {
	    	dispatch(createdDoctorFavorite(json))
	    	return json
	    })
	}
}

function deletedFavorites(favorite) {
	return {
		type: "DELETED_FAVORITES",
		payload: favorite
	}
}

export function deleteFavorites(favorites,id) {
	const userId = (localStorage.getItem('jwtToken')).user_id
  	const docId = id
  	return function(dispatch) {
  	fetch('http://localhost:3000/users/delete',{
      method: 'DELETE',
      body: JSON.stringify({user_id: userId, doc_id: docId}),
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      }
    })
	    .then((res) => res.json())
		.then((json) => {
	      dispatch(deletedFavorites(json))
	 })
  }
}


function addFavorite(doctor, favorite){
	const userId = (localStorage.getItem('jwtToken')).user_id
    console.log("im ok with this")
    return function(dispatch){
    fetch('http://localhost:3000/users/me',{
    method: 'POST',
    body: JSON.stringify({id: userId}),
    headers: {
      "Accept":"application/json",
      "Content-Type":"application/json"
    }
  })
    .then(res => res.json())
    .then((json) => {
    	dispatch(addToFavorite(json, favorite))
      })
    }
}

function addToFavorite(doctor, favorite){
	return {
		type: "ADD_TO_FAVORITE",
		doctorpayload: doctor,
		favoritepayload: favorite

	}
}
