import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addCustomerAlbumAction} from "../../store/customDataReduser";
import CustomAlbums from "../Сustom-Albums/Custom-Albums";
import Modal from "../Modal/Modal";
import './Custom-Album-Creater.css'

const CustomAlbumCreator = () => {
  const dispatch = useDispatch();
  const [modalActive, setModalActive] = useState(false)
  const [title, setTitle] = useState(null)
  const activeAlbum = useSelector(state => state.customData.activeAlbum)
  let textInput = React.createRef()

  const addAlbumClickHandler = () => {
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

  const buttonPanel = (
    <div className="wrapper__btn-menu">
      <button className="btn-menu" onClick={addAlbumClickHandler}>Add Album</button>
    </div>
  )

  return (
    <>
      { !activeAlbum ? buttonPanel : null}
      <CustomAlbums/>
      {modalBlock}
    </>
  );
}

export default CustomAlbumCreator