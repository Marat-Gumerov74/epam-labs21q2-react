import { Link } from 'react-router-dom';
import Login from "../../components/Login/Login";

const LoginPage = () => {
  return (
    <div>
      <header>
        <h1>Login</h1>
        <Login />
        <p>
          Or <Link to="/register">register</Link>
        </p>
      </header>
      <>Albums</>
    </div>
  )
}

export default LoginPage
