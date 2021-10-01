import './UserInfo.css';
import React from 'react';

function UserInfo({name, username, email}) {
    return (
        <div className="userInfo">
            <ul>
                <li><p>name: </p><p>{name}</p></li>
                <li><p>username:</p><p>{username}</p></li>
                <li><p>email:</p><p>{email}</p></li>
            </ul>
        </div>
    );
}

export default UserInfo;