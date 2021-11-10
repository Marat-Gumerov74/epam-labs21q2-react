import {useSelector} from 'react-redux';

export function useAuth() {
  const {email, token, id , username} = useSelector(state => state.user);

  return {
    isAuth: !!email,
    email,
    username,
    token,
    id,
  };
}