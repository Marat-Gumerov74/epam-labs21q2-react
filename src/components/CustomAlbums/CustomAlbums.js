import React from "react";
import {useSelector} from "react-redux";
import pic from "../../assets/images/image_10905190754015565846.gif";

function  CustomAlbums (){
  const customAlbums = useSelector( state => state.customData.customAlbums)

  let customElements = customAlbums.map(album => {
    return (
      <li key={album.id} className="element">
          {/*onClick={()=>customAlbumClickHandler(album.id)}>*/}
        <p className='element-text'>
          <span className="element-id">{album.id}</span>
          <span className="element-title">Title: {album.title}</span>
        </p>
        <img className="element-img" src={pic} alt="cat"/>
      </li>
    )
  })

  let isClear = <p>There were no Albums here</p>

  return (
    <>
      {customAlbums.length > 0 ? customElements : isClear}
    </>
  )
}

export default CustomAlbums;