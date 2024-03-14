
import {Routes, Route, Navigate, useNavigate} from 'react-router-dom'
import {About, Error, Home, Landing, Login} from './views/Index'
import {Admin, DetailAd} from './views/Staff/AdminIndex'
import {loginUser, isNotAuth} from './redux/actions'

import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useAuth } from './components/Auth/AuthContext/AuthContext'
import './App.css'

function App() {
  const { authenticated, user, logout } = useAuth();
  const dispatch = useDispatch();

  //console.log(authenticated)
  const allow = user? user.role : 1;
  //console.log(allow)
  //const navigate = useNavigate()
  useEffect(()=>{
    if(authenticated){

      dispatch(loginUser(user))
    } else {
      dispatch(isNotAuth())
    }
  }, [authenticated]);


  return (

   <div>
  <Routes>
    <Route path= '/' element={<Landing/>}/>
    <Route path= '/about' element={<About/>}/>
    <Route path= '/login' element={<Login/>}/>
    <Route path= {'/error'} element={<Error/>}/> 
    <Route path="/home" element= {(authenticated) ? <Home/>: <Navigate to = '/error'/>} />
    <Route exact path="/admin" element={(authenticated && allow === 0) || (authenticated && allow === 2) ? <Admin/>: <Navigate to = '/error'/>} />
    <Route path="/admin/:name" element={(authenticated && allow === 0) || (authenticated && allow === 2) ? <Admin/>: <Navigate to = '/error'/>} />
    <Route path="/admin/detail/:id" element= {(authenticated && allow === 0) || (authenticated && allow === 2) ? <DetailAd/>: <Navigate to = '/error'/>} /> 
    {/* <Route path= {'/home/:id'} element={<Detail/>}/> */}
    <Route path= {'*'} element={<Navigate to = '/error'/>}/>
  </Routes>
   </div>

  )
}

export default App
