import  './AlbumsBlock.css'
import React, {useEffect, useState} from "react";
import {JsonService} from "../../modules/JsonService";
import Albums from "../Albums/Albums";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";


function AlbumsBlock() {
  const jsonService = new JsonService();

  const [albums, setAlbums] = useState([])
  const [isError, setIsError] = useState(false)


  useEffect(() => {
    jsonService.getAllAlbums()
      .then(albums => setAlbums(albums))
      .catch(() => setIsError(true))
  },[])

  return(
    <ul className='album-list'>
      {isError ? <ErrorIndicator/> :  <Albums albums={albums}/>}
    </ul>
  )
}

export default AlbumsBlock;