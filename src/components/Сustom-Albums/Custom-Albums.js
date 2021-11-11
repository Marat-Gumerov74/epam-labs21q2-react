import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";
import './Custom-Albums.css'
import {clearCustomerActiveAlbumAction, setCustomerActiveAlbumAction} from "../../store/customDataReduser";
import CustomPhotos from "../Custom-Photos/Custom-Photos";


const CustomAlbums = () => {
  const dispatch = useDispatch();
  const customAlbums = useSelector(state => state.customData.customAlbums)
  const [activeAlbum, setActiveAlbum] = useState(null)

  const customAlbumClickHandler = (id) => {
    setActiveAlbum(id)
    dispatch(setCustomerActiveAlbumAction(id))
  }

  const goBackHandler = () => {
    setActiveAlbum(null)
    dispatch(clearCustomerActiveAlbumAction())
  }

  let customElements = customAlbums.map(album => {
    return (
      <li key={album.id} className="element"
          onClick={()=>customAlbumClickHandler(album.id)}>
        <p className='element-text'>
          <span className="element-id">{album.id}</span>
          <span className="element-title">Title: {album.title}</span>
        </p>
      </li>
    )
  })

  let AlbumList = <ul>
    {customElements.length ? customElements : <p>No custom albums</p>}
  </ul>

  let photosBlock = <div>
    <button className="btn-back" onClick={goBackHandler}>Go Back</button>
    <div>
      <CustomPhotos activeAlbum={activeAlbum}/>
    </div>
  </div>

  return (
    <>
      {(activeAlbum) ? photosBlock : AlbumList}
    </>
  )
}

export default CustomAlbums