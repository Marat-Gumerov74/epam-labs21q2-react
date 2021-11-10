import React from "react";
import { SignUp } from '../../components/SignUp/SignUp';
import { Link } from 'react-router-dom';
import  './RegisterPage.css'

const RegisterPage = () => {
  return (
    <div>
      <header className="header">
        <h1 className="header__title">Register</h1>
        <SignUp />
        <p className="header__text">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </header>
    </div>


  )
}

export default RegisterPage
