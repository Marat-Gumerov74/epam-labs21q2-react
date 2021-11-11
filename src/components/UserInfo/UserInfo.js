import './UserInfo.css';
import React from 'react';
import {useSelector} from "react-redux";

function UserInfo() {
  const user = useSelector(state => state.user.user)

  return (
    <div className="userInfo">
      <ul>
        <li><p>name:</p><p>{user.name}</p></li>
        <li><p>username:</p><p>{user.username}</p></li>
        <li><p>email:</p><p>{user.email}</p></li>
      </ul>
    </div>
  );
}

export default UserInfo;