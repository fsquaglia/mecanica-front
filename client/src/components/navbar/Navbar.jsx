import style from './Navbar.module.css'
import { Link } from 'react-router-dom'

import { useAuth } from '../Auth/AuthContext/AuthContext'
import LoginLinks from './Links/LoginLinks'
import AdminLink from './Links/AdminLink'
import ShowUser from './ShowUser/ShowUser'

const Navbar = () => {
  const { authenticated, user, logout } = useAuth()

  const handleClick = () => {
    logout();


  }










  return (
    <div className={style.nav}>

      <div className={style.logo}>
        <h3 className={style.logoTitle}>Boscarol hnos.</h3>
      </div>

      <div className={style.login}>
        <LoginLinks />
        <AdminLink />

        {/* <Link to='/login'>
          <h4 className={style.botones}>Ingresar</h4>
        </Link> */}

      </div>

      <div className={style.userData}>
        <ShowUser />
        {
          authenticated &&
          <a className={style.out} href='/' onClick={handleClick}>Salir</a>
        }
      </div>



      <button className={`navbar-toggler ${style.userDetails}`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        <span class={style.togglerIcon}>&#9776;</span>
      </button>
      <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel" backdrop={false}>
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
            {
              authenticated ? (`Bienvenido: ${user.nickname}`) : ("Bienvenido")}
          </h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
            <br></br>
            <li class="nav-item">
              {
                authenticated &&
                <img src={user.picture} alt="Not Found" />
              }
            </li>
            <br></br>
            <br></br>
            <li class="nav-item">
              <Link to='/login'>
                <a className={style.out} aria-current="page" href="#">Ingresar</a>
              </Link>
            </li>
            <li class="nav-item">
              <LoginLinks />


            </li>
            <li class="nav-item">
              <AdminLink />

            </li>

            <br></br>
            <li class="nav-item">
              {
                authenticated &&
                <a className={style.out} href='/' onClick={handleClick}>Salir</a>
              }
            </li>
          </ul>
        </div>
      </div>



      {/* {
        authenticated ? <>
          <div className={style.userDetails}>
            <h4>Bienvenido: {user.nickname && user.nickname}</h4>




            <img src={user.picture} alt="Not Found" />
            <a className={style.out} href='/' onClick={handleClick}>Salir</a>
          </div>
        </> : null
      } */}


    </div>
  )
}

export default Navbar