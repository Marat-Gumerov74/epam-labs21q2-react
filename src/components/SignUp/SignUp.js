import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {setUser} from '../../store/slices/userSlice';
import FormLogin from "../Form-login/Form-login";

const SignUp = () => {
  const dispatch = useDispatch();
  const {push} = useHistory();

  const handleRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({user}) => {
        console.log(user);
        dispatch(setUser({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        }));
        push('/');
      })
      .catch(console.error)
  }

  return (
    <FormLogin
      title="register"
      handleClick={handleRegister}
    />
  )
}

export {SignUp}
