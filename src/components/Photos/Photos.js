import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Modal from "../Modal/Modal";
import { addCustomerPhotoAction, clearCustomerActiveAlbumAction} from "../../store/customDataReduser";

function  Photos ({activeAlbum}) {
  const dispatch = useDispatch();
  const photos = useSelector(state => state.customData.customPhotos)
  console.log("photos", photos)
  const [listPhotos, setListPhotos] = useState(null)
  const [modalActive, setModalActive] = useState(false)
  const [title, setTitle] = useState(null)
  let textInput = React.createRef()


  useEffect(() => {if (photos.length > 0) buildPhotos()},[photos]);

  const buildPhotos = () => {
    console.log(`buildPhotos`)
    if (photos.length > 0){
      let sortPhotos = photos.find(photo => photo.albumId === activeAlbum)

      console.log("sortPhotos", sortPhotos)

      sortPhotos.map(photo => {
        return (
          <li key={photo.id} className="element">
            <p className='element-text'>
              <span className="element-id">{photo.id}</span>
            </p>
            <img  className="element-img" src={photo.thumbnailUrl} alt={"cat"}/>
          </li>
        )
      })
      console.log(" MAP sortPhotos", sortPhotos)
      let listPhotos = <ul>{sortPhotos}</ul>;
      setListPhotos(listPhotos)
    }
  }

  const addPhotoClickHandler = () => {
    setModalActive(true)
  }

  const onCancelAddedHandler = () => {
    setModalActive(false);
    textInput.current.value = '';
  }

  const createdHandler = () => {
    if (textInput.current.value.length > 0) {
      setTitle(textInput.current.value)
      textInput.current.value = ''
      setModalActive(false)
    }
  }

  useEffect(() => {if (title) addPhoto(activeAlbum)},[title]);

  const addPhoto = (activeAlbum) => {
    const newPhoto = {
      albumId: activeAlbum,
      id: Math.floor(Math.random() * (9999 - 1)) + 1,
      title: "mew mew",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    }
    dispatch(addCustomerPhotoAction(newPhoto))
  }

  const modalBlock =  <Modal active={modalActive} setActive={setModalActive}>
                      <header className="modal__header">
                        <h4 className="modal__header-title">Add a new Photo</h4>
                        <button className="modal__header-btn" onClick={onCancelAddedHandler}>x</button>
                      </header>
                      <section className="header__section">
                        <label htmlFor="formTitle">Title Album</label>
                        <input id="formTitle" type="text" ref={textInput}/>
                      </section>
                      <section className="modal__panel">
                        <button className="panel__btn-cancel" onClick={onCancelAddedHandler}>Cancel</button>
                        <input className="panel__btn-create" type="button" value="Create" onClick={createdHandler}/>
                      </section>
                    </Modal>

  let btnBlock = <div>
                  <button className="btn-menu" onClick={addPhotoClickHandler}>Add Photo</button>
                  <div>Opened album # {activeAlbum}</div>
                </div>

  const photosEmptyMessage = <p>There were no photos here</p>

  return (
    <>
      {btnBlock}
      {listPhotos? listPhotos : photosEmptyMessage }
      {modalBlock}
    </>
  )
}

export default Photos