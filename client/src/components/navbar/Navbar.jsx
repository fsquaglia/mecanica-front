import style from './Navbar.module.css'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Link, animateScroll as scroll, } from 'react-scroll';
import { useAuth } from '../Auth/AuthContext/AuthContext'
import { AdminLink, LoginLinks, PanelAdmin } from './Links/Index'
import ShowUser from './ShowUser/ShowUser'
import logo from '../../assets/images/BoscarolHnos.png'
import userLogo from '../../assets/images/user.png'


const Navbar = () => {
  const { authenticated, user, logout } = useAuth()
  const { pathname } = useLocation()


  const admin = (user?.role === 0) ? true : false;
  const noRoutes = (pathname.startsWith('/login') || pathname.startsWith('/error') || pathname.startsWith('/home') || pathname.startsWith('tips')) ? false : true;


  const handleClick = () => {
    logout();
  }


  return (
    <div className={style.nav}>

      <div className={style.logo}>
        <img src={logo} alt="" className={style.logoImg} />
      </div>

      <div className={style.login}>

        {authenticated && location.pathname !== '/' ? (
          <>
            <NavLink to='/'><h3 className={style.linksH3}>Home</h3></NavLink>
            {admin && noRoutes ? <PanelAdmin /> : null}
          </>
        ) : (
          <>
            {location.pathname === '/' && (
              <Link to="/pagina" activeClass="active" smooth={true} duration={600} offset={-70} activeStyle={{ color: 'red' }}><h3 className={style.linksH3}>Home</h3></Link>
            )}
            {location.pathname !== '/tips' && (
              <>
                <Link to="/historia" activeClass="active" smooth={true} duration={600} offset={-70} activeStyle={{ color: 'red' }}><h3 className={style.linksH3}>Historia</h3></Link>
                <Link to="/servicios" activeClass="active" smooth={true} duration={600} offset={-70} activeStyle={{ color: 'red' }}><h3 className={style.linksH3}>Servicios</h3></Link>
                <Link to="/consejos" activeClass="active" smooth={true} duration={600} offset={-70} activeStyle={{ color: 'red' }}><h3 className={style.linksH3}>Tips</h3></Link>
                <Link to="/contacto" activeClass="active" smooth={true} duration={600} offset={-70}><h3 className={style.linksH3}>Contacto</h3></Link>
              </>
            )}
          </>
        )}



        {/* {authenticated && location.pathname !== "/" ?
          <>
            <NavLink to='/' ><h3 className={style.linksH3}>Home</h3> </NavLink>
            {admin && noRoutes ? <>
              <PanelAdmin />
            </> : null}
          </> :

          <> <Link to="pagina" activeClass="active" smooth={true} duration={600} offset={-70} activeStyle={{ color: 'red' }}><h3 className={style.linksH3}>Home</h3> </Link>
            <Link to="historia" activeClass="active" smooth={true} duration={600} offset={-70} activeStyle={{ color: 'red' }}> <h3 className={style.linksH3}>Historia</h3> </Link>
            <Link to="servicios" activeClass="active" smooth={true} duration={600} offset={-70} activeStyle={{ color: 'red' }}>   <h3 className={style.linksH3}>Servicios</h3> </Link>
            <Link to="consejos" activeClass="active" smooth={true} duration={600} offset={-70} activeStyle={{ color: 'red' }}>   <h3 className={style.linksH3}>Tips</h3> </Link>
            <Link to="contacto" activeClass="active" smooth={true} duration={600} offset={-70} >  <h3 className={style.linksH3}>Contacto</h3> </Link>
          </>} */}

      </div>


      <div className={style.userData}>

        <div class="dropdown">
          <button class={`btn btn-secondary ${authenticated ? style.dropDownButtonHidden : style.dropDownButton}`} type="button" data-bs-toggle="dropdown" aria-expanded="false">
            {(
              authenticated ? (
                <ShowUser />
              ) : (

                <img src={userLogo} className={style.userLogo} />
              )
            )}

          </button>
          <ul class={`dropdown-menu ${style.dropdownMenu}`}>
            <LoginLinks />
            <AdminLink />
            <li>
              {authenticated ?
                <a className={style.out} href='/' onClick={handleClick}>Salir</a>
                : null}

            </li>
          </ul>
        </div>
      </div>

      <button className={`navbar-toggler ${style.userDetails}`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
        <span class={style.togglerIcon}>&#9776;</span>
      </button>
      <div class="offcanvas offcanvas-end text-bg-dark" tabindex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel" backdrop={false}>
        <div class={`offcanvas-header ${style.divHeader}`}>

          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          <h2 class={`offcanvas-title ${style.titleDeployMenu}`} id="offcanvasDarkNavbarLabel"> Menú de Navegación</h2>
        </div>
        <div class="offcanvas-body">
          <br></br>

          <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">


            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
              {
                authenticated ? (`Bienvenido ${user.nickname}`) : null}
            </h5>
            <li class={`nav-item ${style.divPic}`}>
              {
                authenticated &&
                <img className={style.pictureDeployMenu} src={user.picture} alt="Not Found" />
              }
            </li>
            {authenticated ? (
              <>
                <br></br>
                <br></br>
              </>
            ) : (
              <>
                <li class="nav-item" data-bs-dismiss="offcanvas">
                  <NavLink to='/login'>
                    <a className={style.out} aria-current="page" href="#">Ingresar</a>
                  </NavLink>
                </li>
              </>
            )}
            <li class="nav-item" data-bs-dismiss="offcanvas">
              <LoginLinks />
            </li>
            <li class="nav-item" data-bs-dismiss="offcanvas">
              <AdminLink />
            </li>
            <br></br>
            <li class="nav-item" data-bs-dismiss="offcanvas">
              {
                authenticated ?
                  <a className={style.out} href='/' onClick={handleClick}>Salir</a>
                  : null}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar