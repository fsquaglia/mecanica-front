import {useNavigate} from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import CreateModal from '../../components/StaffComponent/Cars&ServiceEdit/EditCars/Create/CreateModal'
import Confirmation from '../../components/Confirmation/Confirmation'



const Home = () => {
  const navigate = useNavigate()
  
  function closer(){
    setTimeout(()=>{navigate(-1)},3000)
  }
  
  return (
    <div>
     <Navbar/>
      <h1>Soy Home y estoy sin hacer todavia</h1>
      {/* <CreateModal closer={closer}/> */}
      <Confirmation message={'¿Seguro que desea correr la liebre?'}/>
    </div>
  )
}

export default Home