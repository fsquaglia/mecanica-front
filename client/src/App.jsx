import { Routes, Route, Navigate, useNavigate } from 'react-router-dom'
import { About, Home, Landing, Login, } from './views/Index'
import { loginUser, isNotAuth } from './redux/actions'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useAuth } from './components/Auth/AuthContext/AuthContext'
import './App.css'

function App() {
  const { authenticated, user, logout } = useAuth();
  const dispatch = useDispatch();
  console.log(authenticated)
  const allow = user ? user.role : 1;
  //console.log(allow)
  const navigate = useNavigate()
  useEffect(() => {
    if (authenticated) {
      dispatch(loginUser(user))
    } else {
      dispatch(isNotAuth())
    }
  }, [authenticated]);


  return (
    <div>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path="/home" element={(authenticated) ? <Home /> : <Navigate to='/' />} />
        {/* <Route path= {'/home/:id'} element={<Detail/>}/> */}
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        {/* <Route path= {'*'} element={<Error/>}/> */}
      </Routes>
    </div>
  )
}

export default App
