import React from "react";

function  Photos (props){
  const {albumPhotos}=props;

  let elements = albumPhotos.map(album => {
    return (
      <li key={album.id} className="element">
        <p className='element-text'>
          <span className="element-id">{album.id}</span>
        </p>
        <img  className="element-img" src={album.thumbnailUrl} alt={"picture"}/>
      </li>
    )
  })

  return (
    {elements}
  )
}

export default Photos;