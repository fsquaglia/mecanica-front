import User from './User'
import style from './styles/UserGrid.module.css'
import UserSearch from './searchUserComp/UserSearch'
import {userBynumId, getAllUsers} from '../../../redux/actions'
import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {useParams} from 'react-router-dom'


const UserGrid = ({data}) => {
  const dispatch = useDispatch();
  const {name}=useParams();
  console.log(name)
  
 const user = useSelector((state)=>state.userBynumId)
 const allUsers = useSelector((state)=>state.allUsers)
 console.log( allUsers)
 console.log(user)
 useEffect(()=>{
  if(name){
    dispatch(userBynumId(name))
  }else{
    dispatch(getAllUsers())
  }
 },[dispatch, name])

  return (
    <div className={style.cardList}>
       <UserSearch  direction={'admin'}  place={'documento...'}/>
    {name? (
      <User key={user.id} data={user}/>
    ) :(allUsers&& allUsers.map((frag)=>
    <User key={frag.id} data={frag}/>
    ))}
    </div>
  )
}

export default UserGrid