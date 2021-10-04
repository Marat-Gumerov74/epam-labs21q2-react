import  './AlbumList.css'
import {Component} from "react";
import {JsonService} from "../../modules/JsonService";


export default class AlbumList extends Component{

    jsonService = new JsonService()

    state = {
        albumslist: null
    }

    componentDidMount() {
        this.getAlbums()
    }

    getAlbums() {
        this.jsonService.getAllAlbums()
            .then((albums) => {
                let elements = albums.map(album => {
                    return (
                        <li key={album.id} className="element">
                            <p>
                                <span className="element-id">Id:  {album.id}</span>
                                <span className="element-title">Title:  {album.title}</span>
                            </p>
                        </li>
                    )
                });
                this.setState({
                    albumslist: elements,
                })
            })
    }

    render() {
        const {albumslist} = this.state;
        return (
            <ul className="album-list">
                {albumslist}
            </ul>
        )
    }
}