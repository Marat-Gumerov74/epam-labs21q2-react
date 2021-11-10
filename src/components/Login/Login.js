import React from "react";
import './Login.css'
import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import FormLogin from '../Form-login/Form-login';
import {setUser} from '../../store/slices/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const {push} = useHistory();

  const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user);
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }));
        push('/');
      })
      .catch(() => alert('Invalid user!'))
  }

  return (
    <FormLogin
      title="sign in"
      handleClick={handleLogin}
    />
  )
}

export default Login