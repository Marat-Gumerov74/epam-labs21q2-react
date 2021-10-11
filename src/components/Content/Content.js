import './Content.css';
import React, {useEffect, useState} from 'react';
import {JsonService} from "../../modules/JsonService";
import ava from '../../assets/images/ava-album.jpg'

function Content() {
    const avatar = ava;
    const jsonService = new JsonService()
    const [albums, setAlbums] = useState([])
    useEffect(() => {getAlbums(jsonService)},[]);
    function getAlbums () {
        jsonService.getAllAlbums()
            .then((albums)=> setAlbums(albums))
    }

    let elements = albums.map(album => {
        return (
            <li key={album.id} className="element" style ={{backgroundImage: `url(${avatar})`}}>
                <h4 className="element-title">{album.title}</h4>
            </li>
        )
    });

    return (
        <ul>{elements}</ul>
    );
}

export default Content;