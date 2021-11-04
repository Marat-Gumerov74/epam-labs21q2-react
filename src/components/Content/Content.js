import './Content.css';
import React, {useEffect, useState} from 'react';
import Albums from "../Albums/Albums";
import Modal from "../Modal/Modal";
import {useDispatch} from "react-redux";
import {addCustomerAlbumAction} from "../../store/customDataReduser";

function Content() {
  const dispatch = useDispatch();
  const [modalActive, setModalActive] = useState(false)
  const [title, setTitle] = useState(null)
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

  useEffect(() => {addAlbum()},[title]);

  const addAlbum = () => {
    console.log(typeof title)
    if (title) {
      const newAlbum = {
        title: title,
        id: Math.floor(Math.random() * (9999 - 1)) + 1,
      }
      dispatch(addCustomerAlbumAction(newAlbum))
    }
  }

  return (
    <>
      <div>
        <button className="btn-menu" onClick={addAlbumClickHandler}>Add Album</button>
      </div>
      <Albums/>
      <Modal active={modalActive} setActive={setModalActive}>
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
          <input
            className="panel__btn-create"
            type="button"
            value="Create"
            onClick={createAlbumHandler}
          />
        </section>
      </Modal>
    </>
  );
}

export default Content;