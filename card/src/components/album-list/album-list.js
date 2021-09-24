import {Component} from "react";
import {JsonService} from "../../modules/jsonService";
import {logDOM} from "@testing-library/react";

export default class AlbumList extends Component{

    jsonService = new JsonService()

    state = {
        albums: null,
    }

    constructor() {
        super();
        this.getAlbums()
    }

    getAlbums() {
        this.jsonService.getAllAlbums()
            .then((albums) => {
                this.setState({
                    albums: albums
                })
            })
    }

    render() {

        const { albums } = this.state;

        return(
            <div>
                {console.log(albums)}
            </div>
        )
    }
}