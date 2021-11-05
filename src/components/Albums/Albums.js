import './Albums.css'
import React, {useEffect, useState} from "react";
import pic from '../../assets/images/image_10905190754015565846.gif'
import Photos from "../Photos/Photos";
import {useDispatch, useSelector} from "react-redux";
import {
  addCustomerPhotoAction, clearCustomerActiveAlbumAction,
  getCustomerPhotosAction,
  setCustomerActiveAlbumAction
} from "../../store/customDataReduser";
import CustomPhotos from "../CustomPhotos/CustomPhotos";

function  Albums () {
  const dispatch = useDispatch();
  const customAlbums = useSelector(state => state.customData.customAlbums)
  const activeAlbum = useSelector(state => state.customData.activeAlbum)
  //const [isActiveAlbum, setIsActiveAlbum] = useState(false)
  //const [activeAlbum, setActiveAlbum] = useState(null)

  const customAlbumClickHandler = (id) => {
    dispatch(getCustomerPhotosAction(id))
    // setActiveAlbum(id)
    //setIsActiveAlbum(true)
    dispatch(setCustomerActiveAlbumAction(id))
  }

  //useEffect(() => {if (customAlbums) addAlbum()},[isActiveAlbum]);

  // const addPhoto = (albumId) => {
  //   const newPhoto = {
  //     albumId: albumId,
  //     id: Math.floor(Math.random() * (9999 - 1)) + 1,
  //     title: "mew mew",
  //     thumbnailUrl: "https://via.placeholder.com/150/92c952",
  //   }
  //   dispatch(addCustomerPhotoAction(newPhoto))
  // }

  // const goBackHandler = () => {
  //   dispatch(clearCustomerActiveAlbumAction())
  // }

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

  let AlbumList = <ul>
                      {customElements.length ? customElements : <p>No custom albums</p>}
                    </ul>

  return (
      <>
        {(activeAlbum) ? <Photos/> : AlbumList}
      </>
   )
}

export default Albums;