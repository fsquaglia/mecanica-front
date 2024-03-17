import {Link} from 'react-router-dom'
import {useAuth} from '../../Auth/AuthContext/AuthContext'

const LoginLinks = () => {
    const {authenticated, user}=useAuth()
  
  return (
    <div>
           {authenticated ? (
        user.role === 1 ? null : (
          <Link to="/login">{user.role === 0 || user.role === 2 ? "Crear usuario" : "Ingresar"}</Link>
        )
      ) : (
        <Link to="/login">Ingresar</Link>
      )}
      <br></br>
      {authenticated? 
      <Link to={`/home/user/${user.id}?type=user`}>Perfil:</Link>:null}
    </div>
    
  )
}

export default LoginLinks
