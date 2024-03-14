import {Link, useNavigate} from 'react-router-dom'
import style from './InnerDetail.module.css'

const InnerDetail = ({ type, data }) => {
    const navigate= useNavigate()
    return (
      <div className={style.container}>
        <h2>{type === 'car' ? 'Vehiculo:' : 'Usuario:'}</h2>
          {type === 'car' && (
            <>
            <ul>
              <li>Patente: {data.patent}</li>
              <li>Marca: {data.mark}</li>
              <li>Modelo: {data.model}</li>
              <li>Año: {data.year}</li>
              <li>Numero de motor: {data.motorNum}</li>
              <li>Numero de chasis: {data.chassisNum}</li>
              <li>Estado: {data.country}</li>
              <li>Creado: {data.createdAt}</li>
              <li>Actualizado: {data.updatedAt}</li>
              {/* <li>Propietario/s: {data.Users[0].name}</li> */}
              </ul>
              <img src={data.picture} style={{ maxWidth: '150px' }}/>
              <label>Observaciones: {data.observations}</label>
            </>
          )}
          {type === 'user' && (
            <>
             <ul>
              <li>Email: {data.email}</li>
              <li>Nombre: {data.name}</li>
              <li>Apodo: {data.nickname}</li>
              <li>Tipo documento: {data.country}</li>
              <li>Numero documento: {data.country}</li>
              <li>Rol: {data.country}</li>
              <li>País: {data.country}</li>
              <li>Estado: {data.country}</li>
              <li>Creado: {data.createdAt}</li>
              <li>Actualizado: {data.updatedAt}</li>
              </ul>
              <img src={data.picture} style={{maxWidth:'150px'}}/>
            </>
          )}
          <button onClick={()=>{navigate(-1)}}><h3>Volver:</h3></button>
         
        
      </div>
    );
  };
  
  export default InnerDetail;
