import  './AlbumList.css'
import {Component} from "react";
import {JsonService} from "../../modules/JsonService";
import Album from "../Album/Album";
import ErrorIndicator from "../ErrorIndicator/ErrorIndicator";

export default class AlbumList extends Component {
  jsonService = new JsonService();

  state = {
    albums: [],
    loading: true,
    error: false,
  }

  constructor(props) {
    super(props);
    this.getAlbums();
  }

  onAlbumsLoaded = (albums) => {
    this.setState({
      albums: albums,
      loading:false,
    })
  }

  onError = () => {
    this.setState({
      error: true,
      loading: false,
    })
  }

  getAlbums() {
    this.jsonService
      .getAllAlbums()
      .then(this.onAlbumsLoaded)
      .catch(this.onError)
  }

  render() {
    const {albums, loading, error} = this.state;

    const hasData =  !(loading || error);
    const errorMessage = error ? <ErrorIndicator/>: null;
    const loadingMessage = loading ? <div>LOADING...</div> : null;
    const content = hasData ? <Album albums={albums}/> : null;

    return (
      <>
        {errorMessage}
        {loadingMessage}
        {content}
      </>
    )
    }

}