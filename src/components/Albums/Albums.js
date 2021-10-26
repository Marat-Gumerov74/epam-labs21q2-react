import './Albums.css'
import React, {useState} from "react";
import pic from '../../assets/images/image_10905190754015565846.gif'
import Photos from "../Photos/Photos";
import {useDispatch, useSelector} from "react-redux";
import {fetchPhotos} from "../../asyncActions/placeholderActions";

function  Albums () {

  const dispatch = useDispatch();
  const albums = useSelector(state => state.placeholder.albums)
  const customAlbums = useSelector(state => state.customData.customAlbums)

  const [isActiveAlbum, setActiveAlbum] = useState(false)

  const albumClickHandler = (id) => {
    dispatch(fetchPhotos(id))
    setActiveAlbum(true)
  }

  const goBackHandler = () => {
    setActiveAlbum(false)
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

  let customElements = customAlbums.map(album => {
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

  let photosBlock = <div className="album-photos">
                      <button className="btn-back" onClick={() => goBackHandler()}>Go Back</button>
                      <section className="album-photos-wrapper">
                        <Photos/>
                      </section>
                    </div>

  let emptyMessage = <p>No custom albums</p>

  let componentBlock = <>
                        {elements}
                        {customElements.length ? customElements : emptyMessage }
                       </>

   return (
    <ul>
      {isActiveAlbum ? photosBlock : componentBlock}
    </ul>
  )
}

export default Albums;