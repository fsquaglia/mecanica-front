import style from './styles/Modal.module.css'
import {useState, useEffect}from 'react'
import { useDispatch } from 'react-redux';
import {getAllUsers}from '../../redux/actions'
import {LoginForm,SignWindow} from './AuthIndex';
import {useAuth}from './AuthContext/AuthContext'


const Form = () => {
  const auth = useAuth();
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
  };
  return (
    <div>
      <LoginForm handleSignClick= {handleSignClick} auth={auth} />
      <div>
      {isModalOpen && <SignWindow onClose={handleSignWindowClose} auth = {auth}/>}
      </div>
     
    </div>
  )
}
export default Form;