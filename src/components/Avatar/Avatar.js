import './Avatar.css';
import React from 'react';

const Avatar = ({src}) => {
  return  <img src={src} alt="avatar" className="avatar-img"/>
}

export default Avatar;