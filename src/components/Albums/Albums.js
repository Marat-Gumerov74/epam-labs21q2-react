import './Albums.css'
import React, {useCallback, useEffect, useState} from "react";
import pic from '../../assets/images/image_10905190754015565846.gif'
import {JsonService} from "../../modules/JsonService";
import Photos from "../Photos/Photos";

function  Albums (props){
  const jsonService = new JsonService();
  const {albums}=props;

  const [activeAlbum, setActiveAlbum] = useState(null)
  const [albumPhotos, setAlbumPhotos] = useState( null)

  const albumClickHandler = useCallback((id)=>{ setActiveAlbum(id)},)

  useEffect(() =>{ getPhotos(activeAlbum)}, [activeAlbum])

  const getPhotos = (activeAlbum) => {
    jsonService.getPhotos(activeAlbum)
      .then(albumPhotos => {
        console.log(albumPhotos);
        setAlbumPhotos(albumPhotos);
      })
  }

  let elements = albums.map(album => {
    return (
      <li key={album.id} className="element"
        onClick={()=>albumClickHandler(album.id)}>
        <p className='element-text'>
          <span className="element-id">{album.id}</span>
          <span className="element-title">Title:  {album.title}</span>
        </p>
          <img  className="element-img" src={pic} alt={"picture"}/>
      </li>
    )
  })

  if (albumPhotos) {
    return <Photos albumPhotos={albumPhotos}/>;
  } else {
    return (
      <ul>
        {elements}
      </ul>
    )
  }
}

export default Albums;