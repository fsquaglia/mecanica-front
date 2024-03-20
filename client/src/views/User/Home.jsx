import {useNavigate} from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'
import CreateService from '../../components/StaffComponent/Cars&ServiceEdit/EditServices/Create/CreateService'




const Home = () => {
  const navigate = useNavigate()
  
  
  return (
    <div>
     <Navbar/>
     <br></br>
     <br></br>
      <h1>Soy Home y estoy sin hacer todavia</h1>
      <CreateService/>
    </div>
  )
}

export default Home