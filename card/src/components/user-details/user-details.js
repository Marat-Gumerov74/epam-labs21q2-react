import './user-details.css';
import React from 'react';
import Avatar from "../avatar/avatar";
import UserInfo from "../user-info/user-info";


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