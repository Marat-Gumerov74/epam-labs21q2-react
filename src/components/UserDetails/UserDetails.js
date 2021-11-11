import './UserDetails.css';
import React from 'react';
import Avatar from "../Avatar/Avatar";
import ava from '../../assets/images/avatar.jpg'


const UserDetails = ({email}) =>  {

  return (
    <div className="user-details">
      <Avatar src={ava}/>
      <p className="info">email user: {email}</p>
    </div>
  );
}

export default UserDetails;