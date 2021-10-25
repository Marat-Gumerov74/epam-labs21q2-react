import './Albums.css'
import React, {useCallback, useEffect, useState} from "react";
import pic from '../../assets/images/image_10905190754015565846.gif'
import {JsonService} from "../../modules/JsonService";
import Photos from "../Photos/Photos";
import {useDispatch, useSelector} from "react-redux";

function  Albums () {
  const dispatch = useDispatch();
  const albums = useSelector(state => state.placeholder.albums)
  const customers = useSelector(state => state.customData.customAlbums)

  let elements = albums.map(album => {
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


  return (
    <ul>
      {elements}
      {customElements}
    </ul>
  )
}

export default Albums;