const defaultState = {
  customAlbums: [],
  customPhotos: [],
  activeAlbum: 0,
}

const ADD_CUSTOM_ALBUM = 'ADD_CUSTOM_ALBUM';
const ADD_CUSTOM_PHOTO = 'ADD_CUSTOM_PHOTO';
const GET_CUSTOM_PHOTOS = 'GET_CUSTOM_PHOTOS';
const  SET_ACTIVE_ALBUM = 'SET_ACTIVE_ALBUM';
const CLEAR_ACTIVE_ALBUM = 'CLEAR_ACTIVE_ALBUM';

export const customDataReduser = (state = defaultState, action) => {
  switch (action.type) {
    case CLEAR_ACTIVE_ALBUM:
      return {...state, activeAlbum: 0}
    case  SET_ACTIVE_ALBUM:
      return {...state, activeAlbum: action.payLoad}
    case ADD_CUSTOM_ALBUM:
      return {...state, customAlbums: [...state.customAlbums, action.payLoad]}
    case ADD_CUSTOM_PHOTO:
      return {...state, customPhotos: [...state.customPhotos, action.payLoad]}
    case GET_CUSTOM_PHOTOS:
      return {...state, customPhotos: state.customPhotos.find(customPhoto => customPhoto.albumId === action.payLoad)}
    default:
      return state
  }
}

export const addCustomerAlbumAction = (payLoad) => ({type: ADD_CUSTOM_ALBUM, payLoad})
export const addCustomerPhotoAction = (payLoad) => ({type: ADD_CUSTOM_PHOTO, payLoad})
export const getCustomerPhotosAction = (payLoad) => ({type: GET_CUSTOM_PHOTOS, payLoad})
export const setCustomerActiveAlbumAction = (payLoad) => ({type: SET_ACTIVE_ALBUM, payLoad})
export const clearCustomerActiveAlbumAction = () => ({type: CLEAR_ACTIVE_ALBUM})