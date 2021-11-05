import './Albums.css'
import React, {useState} from "react";
import pic from '../../assets/images/image_10905190754015565846.gif'
import Photos from "../Photos/Photos";
import {useDispatch, useSelector} from "react-redux";

function  Albums () {
  const customAlbums = useSelector(state => state.customData.customAlbums)
  const [activeAlbum, setActiveAlbum] = useState(null)

  const customAlbumClickHandler = (id) => {
    setActiveAlbum(id)
  }

  const goBackHandler = () => {
    setActiveAlbum(null)
  }

  let customElements = customAlbums.map(album => {
    return (
      <li key={album.id} className="element"
          onClick={()=>customAlbumClickHandler(album.id)}>
        <p className='element-text'>
          <span className="element-id">{album.id}</span>
          <span className="element-title">Title: {album.title}</span>
        </p>
        <img className="element-img" src={pic} alt="cat"/>
      </li>
    )
  })

  let AlbumList = <ul>
                      {customElements.length ? customElements : <p>No custom albums</p>}
                  </ul>

  let photosBlock = <div>
                      <button className="btn-back" onClick={goBackHandler}>Go Back</button>
                      <div>
                        <Photos activeAlbum={activeAlbum}/>
                      </div>
                    </div>

  return (
      <>
        {(activeAlbum) ? photosBlock : AlbumList}
      </>
   )
}

export default Albums;