import  './AlbumsBlock.css'
import React, {useCallback, useEffect } from "react";
import Albums from "../Albums/Albums";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import {fetchAlbums} from "../../asyncActions/placeholderActions";
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAlbumAction} from "../../store/customDataReduser";

function AlbumsBlock() {
  const dispatch = useDispatch();
  // const albums = useSelector(state => state.placeholder.albums)
  const albums = useSelector( state => state.customData.customAlbums)

  // useEffect(() => {
  //   dispatch(fetchAlbums());
  // }, []);
  //
  // const addAlbum = () => {
  //   const newAlbum = {
  //     title: 'custom Title',
  //     id: Math.floor(Math.random() * (9999 - 1)) + 1,
  //   }
  //   dispatch(addCustomerAlbumAction(newAlbum))
  // }

  return(
    <>
      <section>
        <button className="btn-menu" onClick={addAlbum}>Add custom Album</button>
      </section>
      <ul className='album-list'>
        {(albums.length > 0) ?
          <Albums/>:
          <ErrorIndicator/>
        }
      </ul>
    </>
  )
}

export default AlbumsBlock;