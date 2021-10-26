import  './AlbumsBlock.css'
import React, {useEffect} from "react";
import Albums from "../Albums/Albums";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import {fetchAlbums} from "../../asyncActions/placeholderActions";
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAlbumAction, addCustomerPhotoAction} from "../../store/customDataReduser";


function AlbumsBlock() {
  const dispatch = useDispatch();
  const albums = useSelector(state => state.placeholder.albums)
  //const customers = useSelector(state => state.customData.customAlbums)

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

  const addPhoto = () => {
    const newPhoto = {
      id: Math.floor(Math.random() * (9999 - 1)) + 1,
      title: "mew mew",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    }
    dispatch(addCustomerPhotoAction(newPhoto))
  }

  return(
    <>
      <section>
        <button onClick={() => addAlbum()}>Add custom Album</button>
        <button onClick={() => addPhoto()}>Add custom Photo</button>
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