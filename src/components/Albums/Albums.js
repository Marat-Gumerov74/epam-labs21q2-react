import './Albums.css'
import React, {useState} from "react";
import pic from '../../assets/images/image_10905190754015565846.gif'
import Photos from "../Photos/Photos";
import {useDispatch, useSelector} from "react-redux";
import {fetchPhotos} from "../../asyncActions/placeholderActions";
import {addCustomerPhotoAction, getCustomerPhotosAction} from "../../store/customDataReduser";
import CustomPhotos from "../CustomPhotos/CustomPhotos";

function  Albums () {

  const dispatch = useDispatch();
  const albums = useSelector(state => state.placeholder.albums)
  const customAlbums = useSelector(state => state.customData.customAlbums)
  const [isActiveAlbum, setIsActiveAlbum] = useState(true)
  const [activeAlbum, setActiveAlbum] = useState(null)

  const albumClickHandler = (id) => {
    dispatch(fetchPhotos(id))
    setActiveAlbum(id)
  }

  const customAlbumClickHandler = (id) => {
    dispatch(getCustomerPhotosAction(id))
    setActiveAlbum(id)
    setIsActiveAlbum(false)
  }

  const addPhoto = (albumId) => {
    const newPhoto = {
      albumId: albumId,
      id: Math.floor(Math.random() * (9999 - 1)) + 1,
      title: "mew mew",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    }
    dispatch(addCustomerPhotoAction(newPhoto))
  }

  const goBackHandler = () => {
    setActiveAlbum(false)
  }

  let elements = albums.map(album => {
    return (
      <li key={album.id} className="element"
          onClick={()=>albumClickHandler(album.id)}>
        <p className='element-text'>
          <span className="element-id">{album.id}</span>
          <span className="element-title">Title: {album.title}</span>
        </p>
        <img className="element-img" src={pic} alt="cat"/>
      </li>
    )
  })

  let customElements = customAlbums.map(album => {
    return (
      <li key={album.id} className="element"
          onClick={()=>customAlbumClickHandler(album.id)}>
        <p className='element-text'>
          <span className="element-id">{album.id}</span>
          <span className="element-title">Title: {album.title}</span>
        </p>
        <img className="element-img" src={pic} alt="cat"/>
      </li>
    )
  })

  let photosBlock = <div className="album-photos">
                      <button className="btn-menu" onClick={() => addPhoto(activeAlbum)}>Add custom Photo</button>
                      <button className="btn-back" onClick={() => goBackHandler()}>Go Back</button>
                      <section className="album-photos-wrapper">
                        { isActiveAlbum ? <Photos/> : <CustomPhotos/>}
                      </section>
                    </div>

  let emptyMessage = <p>No custom albums</p>

  let componentBlock = <>
                        {elements}
                        {customElements.length ? customElements : emptyMessage }
                       </>

   return (
    <ul>
      {activeAlbum ? photosBlock : componentBlock}
    </ul>
  )
}

export default Albums;