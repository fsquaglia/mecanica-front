import { NavLink, useLocation } from 'react-router-dom'
import { useAuth } from '../../Auth/AuthContext/AuthContext'
import style from './AdminLink.module.css'


const AdminLink = () => {
  const { authenticated, user } = useAuth()
  const { pathname } = useLocation();
  const isHome = pathname === '/home'; // Variable booleana para simplificar la lógica


  return (
    <div>
      <div>
        {authenticated && user.role !== 1 && (
          <NavLink to={isHome ? '/admin' : '/home'}>
            <a className={style.out} aria-current="page" href="#">{isHome ? 'Admin' : 'Home'}</a>

          </NavLink>
        )}
      </div>
    </div>
  )
}

export default AdminLink
