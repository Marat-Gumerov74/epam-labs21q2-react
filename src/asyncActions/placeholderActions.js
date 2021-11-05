import {addAlbumsAction, addPhotosAction} from "../store/placeholderReduser";


export const fetchAlbums = () =>  {
  return function (dispatch) {
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(json => dispatch(addAlbumsAction(json)))
  }
}

export const fetchPhotos = (id) => {
  return function (dispatch) {
    fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${id}`)
      .then(response => response.json())
      .then(json => dispatch(addPhotosAction(json)))
  }
}