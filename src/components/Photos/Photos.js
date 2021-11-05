import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Modal from "../Modal/Modal";
import {addCustomerAlbumAction} from "../../store/customDataReduser";

function  Photos (){
  const dispatch = useDispatch();
  const [modalActive, setModalActive] = useState(false)
  const [title, setTitle] = useState(null)
  const photos = useSelector(state => state.placeholder.photos)
  let textInput = React.createRef()

  const addPhotoClickHandler = () => {
    setModalActive(true)
  }

  const onCancelAddedHandler = () => {
    setModalActive(false)
    textInput.current.value = ''
  }

  const createAlbumHandler = () => {
    if (textInput.current.value.length > 0) {
      setTitle(textInput.current.value)
      textInput.current.value = ''
      setModalActive(false)
    }
  }

  useEffect(() => {if (title) addAlbum()},[title]);

  const addAlbum = () => {
    const newAlbum = {
      title: title,
      id: Math.floor(Math.random() * (9999 - 1)) + 1,
    }
    dispatch(addCustomerAlbumAction(newAlbum))
  }

  let elements = photos.map(photo => {
    return (
      <li key={photo.id} className="element">
        <p className='element-text'>
          <span className="element-id">{photo.id}</span>
        </p>
        <img  className="element-img" src={photo.thumbnailUrl} alt={"cat"}/>
      </li>
    )
  })



  let isClear = <p>There were no photos here</p>

  const modalBlock =  <Modal active={modalActive} setActive={setModalActive}>
                        <header className="modal__header">
                          <h4 className="modal__header-title">Add a new album</h4>
                          <button className="modal__header-btn" onClick={onCancelAddedHandler}>x</button>
                        </header>
                        <section className="header__section">
                          <label htmlFor="formTitle">Title Album</label>
                          <input id="formTitle" type="text" ref={textInput}/>
                        </section>
                        <section className="modal__panel">
                          <button className="panel__btn-cancel" onClick={onCancelAddedHandler}>Cancel</button>
                          <input className="panel__btn-create" type="button" value="Create" onClick={createAlbumHandler}/>
                        </section>
                      </Modal>

  const buttonPanel = <div>
    <button className="btn-menu" onClick={addPhotoClickHandler}>Add Photo</button>
  </div>

  return (
    <>
      {buttonPanel}
      {photos.length >0 ? elements : isClear}
    </>
  )
}

export default Photos;