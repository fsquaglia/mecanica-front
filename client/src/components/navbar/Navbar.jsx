import style from './Navbar.module.css'
import {Link} from 'react-router-dom'
import {useAuth} from '../Auth/AuthContext/AuthContext'

const Navbar = () => {
  const {authenticated, user, logout}=useAuth()
  const handleClick = ()=>{
    logout();
  }
  return (
    <div className={style.nav}>
        Navbar
    <Link to='/login'>Ingresar</Link>
    {authenticated?<>
     <div className={style.userDetails}>
        <h4>Bienvenido: {user.nickname&& user.nickname}</h4>
        <img src={user.picture} alt="Nor Found" />
      </div>
     </> : null
    }
    <a href='/' onClick={handleClick}>Salir</a>
    <br/>
    </div>
  )
}

export default Navbar