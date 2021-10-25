const defaultState = {
  customAlbums: [],
  customPhotos: [],
}

const ADD_CUSTOM_ALBUM = 'ADD_CUSTOM_ALBUM';

export const customDataReduser = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_CUSTOM_ALBUM:
      return {...state, albums: [...state.customAlbums, ...action.payLoad]}
    default:
      return state
  }
}

export const addCustomerAlbumAction = (payLoad) => ({type: ADD_CUSTOM_ALBUM, payLoad})