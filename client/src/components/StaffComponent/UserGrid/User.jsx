import style from './styles/User.module.css'

const User = ({data}) => {
  const {id, email, name, picture, typeId, numberId, enable}=data
  //const vehiculo= data.Cars.map((car)=>(car));
  const usuario= (data)=>{
    if (data=== true){
      return 'Activo'
    }else{
      return 'Bloqueado'
    }
  }
  return (
    <div className={style.cardContainer}>
    <p>Nombre: {name}</p>
    <p>Email: {email}</p>
    <p>Estado: {usuario(enable)}</p>
    {/* <p>Vehiculo: {vehiculo.name}</p> */}
  
    </div>
  )
}

export default User

