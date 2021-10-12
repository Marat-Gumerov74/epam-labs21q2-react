import './Content.css';
import React, {useCallback, useEffect, useState} from 'react';
import {JsonService} from "../../modules/JsonService";
import ava from '../../assets/images/ava-album.jpg'

function Content() {
    const avatar = ava;
    const jsonService = new JsonService()

    const [albums, setAlbums] = useState([])
    const [activeAlbum, setActiveAlbum] = useState(null)

    useEffect(() => {getAlbums(jsonService)},[]);
    function getAlbums () {
        jsonService.getAllAlbums()
            .then((albums)=> setAlbums(albums))
    }

    const albumClickHandler = useCallback((album) => {setActiveAlbum(album)},)
    useEffect(() =>{
        console.log(activeAlbum)},[activeAlbum])

    let elements = albums.map(album => {
        return (
            <li key={album.id} id={`${album.id}`} className='element'
                style ={{backgroundImage: `url(${avatar})`}}
                onClick={() => albumClickHandler(album.id)}
            >
                <h4 className="element-title">{album.title}</h4>
            </li>
        )
    });

    return (
        <ul>{elements}</ul>
    );
}

export default Content;