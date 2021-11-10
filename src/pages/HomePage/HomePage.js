import {Redirect} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { useAuth } from '../../hooks/use-auth';
import {removeUser} from '../../store/slices/userSlice'
import './HomePage.css'


const HomePage = () => {
  const dispatch = useDispatch();
  const {isAuth, email} = useAuth();

  return isAuth ? (
    <div>
      <header>
        <h1>Welcome {email}</h1>
        <button onClick={()=> dispatch(removeUser())}>
          Log out from {email}
        </button>
      </header>
      <>CustomAlbum</>
    </div>
  ) : (
    <Redirect to="/login" />
  )
}

export default HomePage