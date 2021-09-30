import './UserDetails.css';
import React from 'react';
import Avatar from "../Avatar/Avatar";
import UserInfo from "../UserInfo/UserInfo";


function UserDetails(props) {
    const information = props.info;
    const avatar = props.info.ava;
    return (
        <div className="userDetails">
            <Avatar src={avatar}/>
            <UserInfo info={information}/>
        </div>
    );
}

export default UserDetails;