import style from '../components/Auth/styles/Modal.module.css'
import {useState, useEffect}from 'react'
import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import {getAllUsers}from '../redux/actions'
import {LoginForm,SignWindow} from '../components/Auth/AuthIndex';
import {useAuth}from '../components/Auth/AuthContext/AuthContext'


const Login = () => {
  const auth = useAuth();
  const navigate= useNavigate()
  const dispatch = useDispatch();
 useEffect(()=>{
   dispatch(getAllUsers())
 },[])
 
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleSignClick = () => {
    setIsModalOpen(true);
  };

  const handleSignWindowClose = () => {
    setIsModalOpen(false);
    navigate(-1)
  };
  return (
    <div className={style.window}>
     
      <LoginForm handleSignClick= {handleSignClick} auth={auth} />
      <div>
      {isModalOpen && <SignWindow onClose={handleSignWindowClose} auth = {auth}/>}
      </div>
  
    </div>
  )
}
export default Login;