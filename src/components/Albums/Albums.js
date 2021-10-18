import './Albums.css'
import React, {useCallback, useEffect, useState} from "react";
import pic from '../../assets/images/image_10905190754015565846.gif'

function  Albums (props){
  const {albums}=props;

  const [activeAlbum, setActiveAlbum] = useState(null)

  const albumClickHandler = useCallback((album)=>{ setActiveAlbum(album)},)

  useEffect(() =>{console.log(activeAlbum)}, [activeAlbum])



  let elements = albums.map(album => {
    return (
      <li key={album.id} className="element"
        onClick={()=>albumClickHandler(album.id)}
      >
        <p className='element-text'>
          <span className="element-id">{album.id}</span>
          <span className="element-title">Title:  {album.title}</span>
        </p>
          <img  className="element-img" src={pic} alt={"picture"}/>
      </li>
    )
  })

  return (
      <ul>
        {elements}
      </ul>
  )
}

export default Albums;