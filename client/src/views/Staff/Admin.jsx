import style from './styles/Admin.module.css'
import {useEffect} from 'react'
import Navbar from '../../components/navbar/Navbar'
import {UserGrid, CarGrid} from '../../components/StaffComponent/Index'
import { getAllCars, getAllUsers } from '../../redux/actions'
import {useDispatch, useSelector} from 'react-redux'

const Admin = () => {
  const dispatch = useDispatch();
  const users = useSelector((state)=>state.allUsers)
 
  console.log(users)
  useEffect(()=>{
    dispatch(getAllUsers())
    dispatch(getAllCars())

  },[]);

  return (
    <div >
    <Navbar/>
    <h1>Estamos en el panel de Admin</h1>
    <div className={style.cardList}>
    <UserGrid data={users}/>
    <CarGrid />
    </div>
    </div>
  )
}

export default Admin