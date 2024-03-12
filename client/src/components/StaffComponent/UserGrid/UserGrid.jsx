import User from './User'
import style from './styles/UserGrid.module.css'

const UserGrid = ({data}) => {
  return (
    <div className={style.cardList}>
    {data && data.map((frag)=>
    <User key={frag.id} data={frag}/>
    )}
    </div>
  )
}

export default UserGrid