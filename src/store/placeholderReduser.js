
const ADD_ALBUMS = 'ADD_ALBUMS';
const ADD_PHOTOS = 'ADD_PHOTOS';

const defaultState = {
  albums: [],
  photos: [],
}


export const placeholderReduser = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_ALBUMS:
      return {...state, albums: [...state.albums, ...action.payLoad]}
    case ADD_PHOTOS:
      return {...state, photos: [...state.photos, ...action.payLoad]}
    default:
      return state
  }
}

export const addAlbumsAction = (payLoad) => ({type: ADD_ALBUMS, payLoad})
export const addPhotosAction = (payLoad) => ({type: ADD_PHOTOS, payLoad})