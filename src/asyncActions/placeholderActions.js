import {addAlbumsAction} from "../store/placeholderReduser";


export const fetchAlbums = () =>  {
  return function(dispatch){
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(response => response.json())
      .then(json => dispatch(addAlbumsAction(json)))
  }
}