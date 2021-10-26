import React from "react";
import {useDispatch, useSelector} from "react-redux";

function  Photos (){
  const dispatch = useDispatch();
  const photos = useSelector(state => state.placeholder.photos)


  let elements = photos.map(photo => {
    return (
      <li key={photo.id} className="element">
        <p className='element-text'>
          <span className="element-id">{photo.id}</span>
        </p>
        <img  className="element-img" src={photo.thumbnailUrl} alt={"picture"}/>
      </li>
    )
  })

  return (
    <>
      {elements}
    </>
  )
}

export default Photos;