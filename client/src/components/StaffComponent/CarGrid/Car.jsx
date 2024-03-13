import style from './styles/Car.module.css'
import {Link} from 'react-router-dom'

const Car = ({data}) => {
  const {idUser, id, patent, mark, model, year, motorNum, chassisNum, observations, picture}=data;
 //console.log (data)
 const propietario= data.Users && data.Users[0].name;
 //console.log(propietario)
 
  return (
    <div className={style.cardContainer}>
    <p>Propietario: {propietario}</p>
    <Link to= {`/admin/detail/${id}?type=car`}>Ver mas:</Link>
    <p>Patente: {patent}</p>

    <p>Marca: {mark}</p>
    <p>Modelo: {model}</p>
    <img src= {picture}/>
    </div>
  )
}

export default Car
