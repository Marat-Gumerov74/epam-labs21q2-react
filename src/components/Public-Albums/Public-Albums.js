import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAlbums, fetchPhotos} from "../../store/asyncActions/placeholderActions";
import PublickPhotos from "../Public-Photos/Publick-Photos";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";


const PublicAlbums = () => {
  const dispatch = useDispatch();
  const albums = useSelector(state => state.placeholder.albums)
  const [elements, setElements] = useState('')
  const [activeAlbum, setActiveAlbum] = useState(null)

  useEffect(() => {
    dispatch(fetchAlbums());
  }, []);

  useEffect(() => {
    setElements(buildAlbums())
  }, [albums]);

  const albumClickHandler = (id) => {
    dispatch(fetchPhotos(id))
    setActiveAlbum(id)
  }

  const buildAlbums = () => {
    return albums.map(album => {
      return (
        <li key={album.id} className="element"
            onClick={()=>albumClickHandler(album.id)}>
          <p className='element-text'>
            <span className="element-id">{album.id}</span>
            <span className="element-title">Title: {album.title}</span>
          </p>
        </li>
      )
    })
  }

  const AlbumsBlock = (
    <ul>
      {elements || <ErrorIndicator/>}
    </ul>
  )

  return(
    <div>
      <ul>
        { activeAlbum ? <PublickPhotos /> : AlbumsBlock}
      </ul>
    </div>

  )
}

export default PublicAlbums