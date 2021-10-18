import './UserDetails.css';
import React from 'react';
import Avatar from "../Avatar/Avatar";
import UserInfo from "../UserInfo/UserInfo";
import ava from '../../assets/images/avatar.jpg'


function UserDetails(props) {

  return (
    <div className="user-details">
      <Avatar src={ava}/>
      <UserInfo {...props}/>
    </div>
  );
}

export default UserDetails;