import style from './styles/Admin.module.css'
import {useEffect} from 'react'
import Navbar from '../../components/navbar/Navbar'
import SideBar from '../../components/sideBar/SideBar'
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
    <br></br>
    <h2>Panel de Administrador:</h2>
    <div className={style.cardList}>
    <SideBar/>
    <UserGrid/>
    <CarGrid />
    </div>
    </div>
  )
}

export default Admin