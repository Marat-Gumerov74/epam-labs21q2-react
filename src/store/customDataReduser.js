const defaultState = {
  customAlbums: [],
  customPhotos: [],
}

const ADD_CUSTOM_ALBUM = 'ADD_CUSTOM_ALBUM';
const ADD_CUSTOM_PHOTO = 'ADD_CUSTOM_PHOTO';
const GET_CUSTOM_PHOTOS = 'GET_CUSTOM_PHOTOS';

export const customDataReduser = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CUSTOM_ALBUM:
      return {...state, customAlbums: [...state.customAlbums, action.payLoad]}
    case ADD_CUSTOM_PHOTO:
      return {...state, customPhotos: [...state.customPhotos, action.payLoad]}
    case GET_CUSTOM_PHOTOS:
      return {...state, customPhotos: state.customPhotos.filter(customPhoto => customPhoto.albumId === action.payLoad)}
    default:
      return state
  }
}

export const addCustomerAlbumAction = (payLoad) => ({type: ADD_CUSTOM_ALBUM, payLoad})
export const addCustomerPhotoAction = (payLoad) => ({type: ADD_CUSTOM_PHOTO, payLoad})
export const getCustomerPhotosAction = (payLoad) => ({type: GET_CUSTOM_PHOTOS, payLoad})