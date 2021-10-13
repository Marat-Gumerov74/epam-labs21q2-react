import './Content.css';
import React, {useCallback, useEffect, useState} from 'react';
import {JsonService} from "../../modules/JsonService";
import ava from '../../assets/images/ava-album.jpg'

function Content() {
    const avatar = ava;
    const jsonService = new JsonService()

    //useStates
    const [albums, setAlbums] = useState([])
    const [photosAlbumId, setPhotos] = useState([])
    const [activeAlbum, setActiveAlbum] = useState(null)
    const [isAlbumVisible, setAlbumVisible] =useState(true)

    //useEffects
    useEffect(() => {getAlbums(jsonService)},[]);
    useEffect(() => {getPhotos(jsonService);setAlbumVisible(false)},);

    //Getters
    const getAlbums = () => {jsonService.getAllAlbums().then((albums)=> setAlbums(albums))}
    const getPhotos = () => {jsonService.getPhotos(activeAlbum).then((photos)=> setPhotos(photos))}

    //useCallback
    const albumClickHandler = useCallback((album) => {setActiveAlbum(album)},)

    //for Render
    let albumPhotos = photosAlbumId.map(photo => {
        console.log(photo)
        return (
            <li key={photo.id} id={`${photo.id}`} className="element-photo">
                <p className="element-title">{photo.title}</p>
                <p className={"element-url"}>{photo.thumbnailUrl}</p>
            </li>
        )
    })


    let elements = albums.map(album => {
        return (
            <li key={album.id} id={`${album.id}`} className='element'
                style ={{backgroundImage: `url(${avatar})`}}
                onClick={() => albumClickHandler(album.id)}
            >
                <h4 className="element-title">{album.title}</h4>
                {activeAlbum}
            </li>
        )
    });

    return (

        <ul>
            {(isAlbumVisible)?  albumPhotos: elements}
        </ul>
    );
}

export default Content;