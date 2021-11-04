import './Content.css';
import React, {useState} from 'react';
import Albums from "../Albums/Albums";
import Modal from "../Modal/Modal";

function Content() {
  const [modalActive, setModalActive] = useState(false)

  const addAlbumClickHandler = () => {
    setModalActive(true)
  }

  return (
    <>
      <div>
        <button className="btn-menu" onClick={addAlbumClickHandler}>Add Album</button>
      </div>
      <Albums/>
      <Modal  active = {modalActive} setActive={setModalActive}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, nostrum!</p>
      </Modal>
    </>
  );
}

export default Content;