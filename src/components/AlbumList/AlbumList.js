import  './AlbumList.css'
import {Component} from "react";
import {JsonService} from "../../modules/JsonService";
import Album from "../Album/Album";

export default class AlbumList extends Component {
  jsonService = new JsonService();

  state = {
    albums: [],
    loading: true,
  }

  constructor(props) {
    super(props);
    this.getAlbums();
  }

  getAlbums() {
    this.jsonService.getAllAlbums()
      .then((albums) => {
        this.setState({
          albums: albums,
          loading:false,
        })
      })
  }

  render() {
    const {albums, loading} = this.state;

    if (loading && !albums.length) {
      return <div>loading</div>
    }
    return <Album albums={albums}/>
  }
}