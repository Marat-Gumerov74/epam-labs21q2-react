import './UserDetails.css';
import React from 'react';
import Avatar from "../Avatar/Avatar";
import UserInfo from "../UserInfo/UserInfo";

function UserDetails({info:{name, username, email, ava}}) {
  const dataInfo = {name, username, email};
  return (
    <div className="user-details">
      <Avatar src={ava}/>
      <UserInfo data={dataInfo}/>
    </div>
  );
}

export default UserDetails;