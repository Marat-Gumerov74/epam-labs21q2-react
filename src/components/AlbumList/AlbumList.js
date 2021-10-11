// import  './AlbumList.css'
// import {useEffect, useState} from "react";

// function AlbumList (props) {
//
//     const [props, setAlbums] = useState(props)
//     // useEffect((album) => {getAlbums(albums)},[]);
//     // console.log(props.albums)
//     console.log(props)
//     return(
//         <>
//             {/*{props.map( (item) => <div>{item}</div>)}*/}
//         </>
//     )
// }
// export default AlbumList



// export default class AlbumList extends Component{
//
//     jsonService = new JsonService()
//
//     state = {
//         albumslist: null
//     }
//
//     componentDidMount() {
//         this.getAlbums()
//     }
//
//     getAlbums() {
//         this.jsonService.getAllAlbums()
//             .then((albums) => {
//                 let elements = albums.map(album => {
//                     return (
//                         <li key={album.id} className="element">
//                             <p>
//                                 <span className="element-id">Id:  {album.id}</span>
//                                 <span className="element-title">Title:  {album.title}</span>
//                             </p>
//                         </li>
//                     )
//                 });
//                 this.setState({
//                     albumslist: elements,
//                 })
//             })
//     }
//
//     render() {
//         const {albumslist} = this.state;
//         return (
//             <ul className="album-list">
//                 {albumslist}
//             </ul>
//         )
//     }
// }