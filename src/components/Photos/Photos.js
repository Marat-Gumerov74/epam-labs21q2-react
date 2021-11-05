import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Modal from "../Modal/Modal";
import { addCustomerPhotoAction, clearCustomerActiveAlbumAction} from "../../store/customDataReduser";

function  Photos () {
  const dispatch = useDispatch();
  const photos = useSelector(state => state.customData.customPhotos)

  let customElements = photos.map(photo => {
    return (
      <li key={photo.id} className="element">
        <p className='element-text'>
          <span className="element-id">{photo.id}</span>
        </p>
        <img  className="element-img" src={photo.thumbnailUrl} alt={"cat"}/>
      </li>
    )
  })

  return (
    <>
    </>
  )
}

export default Photos