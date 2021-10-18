import  './AlbumsBlock.css'
import React, {useEffect, useState} from "react";
import {JsonService} from "../../modules/JsonService";
import Albums from "../Albums/Albums";


function AlbumsBlock() {
  const jsonService = new JsonService();

  const [albums, setAlbums] = useState([])
  //https://jsonplaceholder.typicode.com/albums?userId=1

  useEffect(() => {
    jsonService.getAllAlbums()
      .then(albums => setAlbums(albums))
  },[])

  return(
    <ul className='album-list'>
      <Albums albums={albums}/>
    </ul>
  )
}

export default AlbumsBlock;