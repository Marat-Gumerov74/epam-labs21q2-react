import './Album.css';
import {Component} from "react";
import { JsonService } from "../../modules/jsonService"

export default class Album extends Component{

    jsonService = new JsonService()
    state = {
        albumId: null,
        albumTitle: null,
    }

    constructor() {
        super();
        this.getAlbum()
    }

    getAlbum() {
        const id =  Math.floor(Math.random()*9) + 1;
        this.jsonService.getAlbum(id)
            .then((album) => {
                this.setState({
                    albumId: album.id,
                    albumTitle: album.title,
                })
            })
    }

    render() {
        const { albumId, albumTitle} = this.state;
        return (
            <section className="album">
                <h4>Album</h4>
                <p>number: {albumId}</p>
                <p>title: {albumTitle}</p>
            </section>
        )
    }
}