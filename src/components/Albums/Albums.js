import './Albums.css'
import React, {useCallback, useEffect, useState} from "react";
import pic from '../../assets/images/image_10905190754015565846.gif'
import {JsonService} from "../../modules/JsonService";
import Photos from "../Photos/Photos";
import {useDispatch, useSelector} from "react-redux";
import {fetchPhotos} from "../../asyncActions/placeholderActions";

function  Albums () {
  const dispatch = useDispatch();
  const albums = useSelector(state => state.placeholder.albums)
  //const photos = useSelector(state => state.placeHolder.photos)
  const customers = useSelector(state => state.customData.customAlbums)

  const albumClickHandler = (id) => {
    dispatch(fetchPhotos(id))
  }

  let elements = albums.map(album => {
    return (
      <li key={album.id} className="element"
          onClick={()=>albumClickHandler(album.id)}>
        <p className='element-text'>
          <span className="element-id">{album.id}</span>
          <span className="element-title">Title: {album.title}</span>
        </p>
        <img className="element-img" src={pic} alt={"picture"}/>
      </li>
    )
  })

  let customElements = customers.map(album => {
    return (
      <li key={album.id} className="element">
        <p className='element-text'>
          <span className="element-id">{album.id}</span>
          <span className="element-title">Title: {album.title}</span>
        </p>
        <img className="element-img" src={pic} alt={"picture"}/>
      </li>
    )
  })

  let emptyMessage = <p>No custom albums</p>

  return (
    <ul>
      {elements}
      {customElements.length ? customElements : emptyMessage }
    </ul>
  )
}

export default Albums;