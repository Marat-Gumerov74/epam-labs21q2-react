import  './AlbumsBlock.css'
import React, {useEffect, useState} from "react";
import {JsonService} from "../../modules/JsonService";


function AlbumsBlock() {
  const jsonService = new JsonService();
  const value = 1
  const [albums, setAlbums] = useState(null)
  //https://jsonplaceholder.typicode.com/albums?userId=1

  useEffect(() => {
    jsonService.getAllAlbums()
      .then(album => setAlbums)
  },[])

  useEffect(() => {
    let elements = albums.map(album => {
      return (
        <li key={album.id} className="element">
          <p>
            <span className="element-id">Id:  {album.id}</span>
            <span className="element-title">Title:  {album.title}</span>
          </p>
        </li>
      )
    })
  },[albums])




  return(
    <ul>
      {elements}
    </ul>

  )


}

export default AlbumsBlock;