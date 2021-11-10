import React from "react";
import {useState} from 'react';
import './Form-login.css'

const FormLogin = ({title, handleClick}) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return (
    <div className="form__wrapper">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
      />
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="password"
      />
      <button onClick={() => handleClick(email, pass)}>
        {title}
      </button>
    </div>
  )
}

export default FormLogin
