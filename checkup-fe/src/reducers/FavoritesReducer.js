function FavoritesReducer(state = { list: [] }, action){
  switch (action.type) {
    case "FETCHED_FAVORITES":
      return Object.assign({}, state, {list: action.payload})

    case "CREATED_FAVORITES":
      return Object.assign({}, state, {list: [...state.list, action.payload: {} ]})

    case "DELETED_FAVORITES":
      return Object.assign({}, state, {list: state.list.filter((favorite) => favorite.id !== action.payload.id)})

    case "UPDATED_FAVORITES_NAME":
      return Object.assign({}, state, {
        list: state.list.map((favorite) => {
          if (favorite.id === action.payload.id) {
            return Object.assign({}, favorite, {name: action.payload.name})
          }
          return favorite
        })
      })

    case "REMOVED_DOCTOR_FROM_FAVORITE":
      return Object.assign({}, state,{
        list: state.list.map((favorite) =>{
          if (favorite.id === action.payload.favorite_id){
            return Object.assign({}, favorite, {videos: favorite.videos.filter((doctor) => doctor.id !== action.payload.doctor_id)})
          }
          return favorite
        })
      })

    case "ADDED_TO_COLLECTION":
        return Object.assign({}, state, {
          list: state.list.map((favorite) => {
            if (favorite.id === action.favoritePayload.id){
              return Object.assign({}, favorite, {favorites: [...favorite.doctors, action.doctorPayload: {} ]})
            }
            return favorite
          })
        })

    case "LOGGEDOUT_USER":
      return Object.assign({}, state, {list: []})
    default:
      return state
  }
}

export default FavoritesReducer