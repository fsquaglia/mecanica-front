import style from './Navbar.module.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../Auth/AuthContext/AuthContext'

const Navbar = () => {
  const { authenticated, user, logout } = useAuth()
  const handleClick = () => {
    logout();
  }
  return (
    <div className={style.nav}>
      <div className={style.login}>
        <Link className={style.botones} to='/login'>Ingresar</Link>

      </div>


      {
        authenticated ? <>
          <div className={style.userDetails}>
            <h4>Bienvenido: {user.nickname && user.nickname}</h4>
            <img src={user.picture} alt="Not Found" />
            <a className={style.out} href='/' onClick={handleClick}>Salir</a>
          </div>
        </> : null
      }


    </div>
  )
}

export default Navbar