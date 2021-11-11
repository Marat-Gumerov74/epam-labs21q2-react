import {Redirect} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { useAuth } from '../../hooks/use-auth';
import {removeUser} from '../../store/slices/userSlice'
import './HomePage.css'
import CustomAlbumCreator from "../../components/Custom-Album-Creator/Custom-Album-Creator";
import UserDetails from "../../components/UserDetails/UserDetails";


const HomePage = () => {
  const dispatch = useDispatch();
  const {isAuth, email} = useAuth();

  return isAuth ? (
    <div>
      <header className="header">
        <h2 className="header__title">Welcome user</h2>
        <UserDetails email={email}/>

        <button className='btn' onClick={()=> dispatch(removeUser())}>
          Log out
        </button>
      </header>
      <CustomAlbumCreator/>
    </div>
  ) : (
    <Redirect to="/login" />
  )
}

export default HomePage