import './Album.css';
import {Component} from "react";
import { JsonService } from "../../modules/jsonService"

export default class Album extends Component{

    jsonService = new JsonService()
    state = {
        albumId: null,
        albumTitle: null,
        albums: null,
    }

    constructor() {
        super();
        this.getAlbum()
    }

    getAlbum() {
        this.jsonService.getAllAlbums()
            .then((albums) => {
                console.log(albums)
            })
    }

    render() {
        const { albumId, albumTitle, albums} = this.state;
        return (
            <section className="album">
                {/*<h4>Album</h4>*/}
                {/*<p>number: {albumId}</p>*/}
                {/*<p>title: {albumTitle}</p>*/}
                {albums}
            </section>
        )
    }
}