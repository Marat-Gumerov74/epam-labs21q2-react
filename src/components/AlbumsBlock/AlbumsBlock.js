import  './AlbumsBlock.css'
import React, {useEffect, useState} from "react";
import {JsonService} from "../../modules/JsonService";
import Albums from "../Albums/Albums";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import {fetchAlbums} from "../../asyncActions/placeholderActions";


function AlbumsBlock() {
  const jsonService = new JsonService();

  const [albums, setAlbums] = useState([])
  const [isError, setIsError] = useState(false)


  useEffect(() => {
    dispatch(fetchAlbums())
  },[])

  return(
    <>
      <ul className='album-list'>
        {isError ? <ErrorIndicator/> :  <Albums albums={albums}/>}
      </ul>
      <section>
        <button>Add Album</button>
        <button>Add Photos</button>
      </section>
    </>


  )
}

export default AlbumsBlock;