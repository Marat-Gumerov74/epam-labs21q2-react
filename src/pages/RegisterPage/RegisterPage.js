import React from "react";
import { SignUp } from '../../components/SignUp/SignUp';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div>
      <header>
        <h1>Register</h1>
        <SignUp />
        <p>
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </header>
    </div>


  )
}

export default RegisterPage
