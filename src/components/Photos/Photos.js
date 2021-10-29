import React from "react";
import {useSelector} from "react-redux";

function  Photos (){
  const photos = useSelector(state => state.placeholder.photos)

  let elements = photos.map(photo => {
    return (
      <li key={photo.id} className="element">
        <p className='element-text'>
          <span className="element-id">{photo.id}</span>
        </p>
        <img  className="element-img" src={photo.thumbnailUrl} alt={"cat"}/>
      </li>
    )
  })

  let isClear = <p>There were no photos here</p>

  return (
    <>
      {photos.length >0 ? elements : isClear}
    </>
  )
}

export default Photos;