import React from "react";
import {useSelector} from "react-redux";

function  CustomPhotos (){
  const customPhotos = useSelector( state => state.customData.customPhotos)

  let customElements = customPhotos.map(photo => {
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
      {customPhotos.length > 0 ? customElements : isClear}
    </>
  )
}

export default CustomPhotos;