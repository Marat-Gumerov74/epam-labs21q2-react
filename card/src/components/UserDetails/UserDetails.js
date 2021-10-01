import './UserDetails.css';
import React from 'react';
import Avatar from "../Avatar/Avatar";
import UserInfo from "../UserInfo/UserInfo";


function UserDetails({info, info:{ava}}) {
    return (
        <div className="user-details">
            <Avatar src={ava}/>
            <UserInfo info={info}/>
        </div>
    );
}

export default UserDetails;