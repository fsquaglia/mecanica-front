import {NavLink, useLocation} from 'react-router-dom'
import {useAuth} from '../../Auth/AuthContext/AuthContext'


const AdminLink = () => {
    const {authenticated, user}=useAuth()
    const {pathname} = useLocation();
    const isHome = pathname === '/home'; // Variable booleana para simplificar la lógica

   
  return (
    <div>
     <div>
     {authenticated && user.role !== 1 && (
          <NavLink to={isHome ? '/admin' : '/home'}>
            {isHome ? 'Admin' : 'Home'}
          </NavLink>
        )}
    </div>
    </div>
  )
}

export default AdminLink
