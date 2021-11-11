import { Link } from 'react-router-dom';
import Login from "../../components/Login/Login";
import "./LoginPage.css"
import PublicAlbums from "../../components/Public-Albums/Public-Albums";

const LoginPage = () => {
  return (
    <div>
      <header className="header">
        <h2 className="header__title">Welcom to public Ablums page</h2>
        <Login />
        <p className="header__text">
          Or <Link className="link" to="/register">register</Link>
        </p>
      </header>
      <PublicAlbums />
    </div>
  )
}

export default LoginPage
