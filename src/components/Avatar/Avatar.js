import './Avatar.css';
import React from 'react';

function Avatar({src}) {
  return  <img src={src} alt="avatar" className="avatar-img"/>
}

export default Avatar;