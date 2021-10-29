import  './AlbumsBlock.css'
import React, {useCallback, useEffect, useRef} from "react";
import Albums from "../Albums/Albums";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import {fetchAlbums} from "../../asyncActions/placeholderActions";
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAlbumAction} from "../../store/customDataReduser";


function AlbumsBlock() {
  const divRef = useRef(null);
  const dispatch = useDispatch();
  const albums = useSelector(state => state.placeholder.albums)

  useEffect(() => {
    dispatch(fetchAlbums());
  }, []);

  const addAlbum = () => {
    const newAlbum = {
      title: 'custom Title',
      id: Math.floor(Math.random() * (9999 - 1)) + 1,
    }
    dispatch(addCustomerAlbumAction(newAlbum))
  }

  const goDown = useCallback(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  },[divRef]);

  return(
    <>
      <section>
        <button className="btn-menu" onClick={addAlbum}>Add custom Album</button>
        <button className="btn-menu" onClick={goDown}>Go down</button>
      </section>
      <ul className='album-list'>
        {(albums.length > 0) ?
          <Albums/>:
          <ErrorIndicator/>
        }
      </ul>
      <div ref={divRef}/>
    </>
  )
}

export default AlbumsBlock;