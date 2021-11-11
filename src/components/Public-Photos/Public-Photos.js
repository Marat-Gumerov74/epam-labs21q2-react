import React from "react";
import {useSelector} from "react-redux";

const PublicPhotos = () => {
  const photos = useSelector(state => state.placeholder.photos)

  let elements = photos.map(photo => {
   return (
     <li key={photo.id} className="element">
      <p className='element-text'>
       <span className="element-id">{photo.title}</span>
      </p>
      {/*<img  className="element-img" src={photo.thumbnailUrl} alt={"cat"}/>*/}
     </li>
   )
  })

  const isClear = (<p>There were no photos here</p>);

  return (
    <ul>
     {photos.length >0 ? elements : isClear}
    </ul>
  )
}

export default PublicPhotos