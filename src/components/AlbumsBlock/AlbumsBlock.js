import  './AlbumsBlock.css'
import React, {useEffect, useState} from "react";
import {JsonService} from "../../modules/JsonService";
import Albums from "../Albums/Albums";


function AlbumsBlock() {
  const jsonService = new JsonService();
  const value = 1
  const [albums, setAlbums] = useState(null)
  //https://jsonplaceholder.typicode.com/albums?userId=1

  useEffect(() => {
    jsonService.getAllAlbums()
      .then(album => setAlbums)
  },[])

  return(
    <ul>
      <Albums/>
    </ul>
  )
}

export default AlbumsBlock;