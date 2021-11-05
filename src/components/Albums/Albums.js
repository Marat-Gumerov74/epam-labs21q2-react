import './Albums.css'
import React, {useState} from "react";
import pic from '../../assets/images/image_10905190754015565846.gif'
import Photos from "../Photos/Photos";
import {useDispatch, useSelector} from "react-redux";
import {
  addCustomerPhotoAction,
  getCustomerPhotosAction,
  setCustomerActiveAlbumAction
} from "../../store/customDataReduser";
import CustomPhotos from "../CustomPhotos/CustomPhotos";

function  Albums () {
  const dispatch = useDispatch();
  const customAlbums = useSelector(state => state.customData.customAlbums)
  const [isActiveAlbum, setIsActiveAlbum] = useState(false)
  const [activeAlbum, setActiveAlbum] = useState(null)

  const customAlbumClickHandler = (id) => {
    //dispatch(getCustomerPhotosAction(id))
    // setActiveAlbum(id)
    setIsActiveAlbum(true)
    dispatch(setCustomerActiveAlbumAction(id))
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

  let albumsBlock = <ul>
                      {customElements.length ? customElements : <p>No custom albums</p>}
                    </ul>

  let photosBlock = <div className="album-photos">
    <button className="btn-menu" onClick={() => addPhoto(activeAlbum)}>Add custom Photo</button>
    <button className="btn-back" onClick={() => goBackHandler()}>Go Back</button>
    <section className="album-photos-wrapper">
      { isActiveAlbum ? <Photos/> : <CustomPhotos/>}
    </section>
  </div>

  return (
      <>
        {(isActiveAlbum) ? <CustomPhotos/> : albumsBlock}
      </>
   )
}

export default Albums;