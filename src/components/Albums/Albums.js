import './Albums.css'
import React, {useCallback, useEffect, useState} from "react";
import pic from '../../assets/images/image_10905190754015565846.gif'
import {JsonService} from "../../modules/JsonService";
import Photos from "../Photos/Photos";

function  Albums (props){
  const jsonService = new JsonService();
  const {albums}=props;

  const [activeAlbum, setActiveAlbum] = useState(null)
  const [albumPhotos, setAlbumPhotos] = useState( [])

  const albumClickHandler = useCallback((id) => { setActiveAlbum(id)},)

  useEffect(() =>{ if (activeAlbum) getPhotos(activeAlbum)}, [activeAlbum])
  const photosClickHandler = useCallback(() => {setAlbumPhotos([])},)

  const getPhotos = (activeAlbum) => {
      jsonService.getPhotos(activeAlbum)
        .then(albumPhotos => setAlbumPhotos(albumPhotos))}


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

  if (albumPhotos.length > 0) {
    return (
      <div className="album-photos">
        <button className="btn-back" onClick={() => photosClickHandler()}>Go Back</button>
        <section className="album-photos-wrapper">
          <Photos albumPhotos={albumPhotos}/>;
        </section>
      </div>
    )

  } else {
    return (
      <ul>
        {elements}
      </ul>
    )
  }
}

export default Albums;