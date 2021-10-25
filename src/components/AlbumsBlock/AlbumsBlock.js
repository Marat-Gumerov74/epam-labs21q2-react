import  './AlbumsBlock.css'
import React, {useEffect, useState} from "react";
import Albums from "../Albums/Albums";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import {fetchAlbums} from "../../asyncActions/placeholderActions";
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAlbumAction} from "../../store/customDataReduser";


function AlbumsBlock() {
  const dispatch = useDispatch();
  const albums = useSelector(state => state.placeholder.albums)
  const customers = useSelector(state => state.customData.customAlbums)

  useEffect(() => {
    dispatch(fetchAlbums());
  }, []);

  const addAlbum = () => {
    const newAlbum = {
      title: 'custom Title',
      id: Date.now(),
    }
    dispatch(addCustomerAlbumAction(newAlbum))
  }

  return(
    <>
      <ul className='album-list'>
        { (albums.length > 0) ?
          <Albums albums={albums}/>:
          <ErrorIndicator/>
        }
      </ul>
      <section>
        <button onClick={() => addAlbum()}>Add Album</button>
      </section>
      <ul className='album-list'>
        { (customers.length > 0) ?
          <Albums albums={customers}/>:
          <ErrorIndicator/>
        }
      </ul>
    </>


  )
}

export default AlbumsBlock;