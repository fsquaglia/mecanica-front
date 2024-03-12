import style from './Navbar.module.css'
import {useAuth} from '../Auth/AuthContext/AuthContext'
import LoginLinks from './Links/LoginLinks'
import AdminLink from './Links/AdminLink'
import ShowUser from './ShowUser/ShowUser'

const Navbar = () => {
  const {logout}=useAuth()

  const handleClick = ()=>{
    logout();
  }
  return (
    <div className={style.nav}>
        Navbar
    <LoginLinks/>
    <AdminLink/>
    <ShowUser/>
    <a href='/' onClick={handleClick}>Salir</a>
    <br/>
    </div>
  )
}

export default Navbar