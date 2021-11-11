import {Redirect} from 'react-router-dom';
import {useDispatch} from 'react-redux'
import { useAuth } from '../../hooks/use-auth';
import {removeUser} from '../../store/slices/userSlice'
import './HomePage.css'
import CustomAlbums from "../../components/Сustom-Albums/Custom-Albums";
import CustomAlbumCreator from "../../components/Custom-Album-Creator/Custom-Album-Creator";


const HomePage = () => {
  const dispatch = useDispatch();
  const {isAuth, email} = useAuth();

  return isAuth ? (
    <div>
      <header className="header">
        <h1 className="header__title">Welcome {email}</h1>
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