
const ADD_ALBUMS = 'ADD_ALBUMS'

const defaultState = {
  albums: [],
  photos: [],
}



export const placeholderReduser = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ALBUMS:
      return {...state, albums: [...state.albums, ...action.payLoad]}
    default:
      return state
  }
}

export const addAlbumsAction = (payLoad) => ({type: ADD_ALBUMS, payLoad})