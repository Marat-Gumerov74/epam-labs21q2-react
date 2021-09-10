import './avatar.css';
import React from 'react';


function Avatar(props) {
    return  <img src={props.src} alt="avatar" className="avatar-img"/>
}

export default Avatar;