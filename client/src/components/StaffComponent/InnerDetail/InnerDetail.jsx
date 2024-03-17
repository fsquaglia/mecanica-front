import {Link, useNavigate} from 'react-router-dom'
import style from './InnerDetail.module.css'
import {useState} from 'react'
import GenericButton from '../../GenericButton/GenericButton'
import Edition from '../AdminHelpers/Edition/Edition';
import EditWindow from '../../Auth/EditComponents/ModalEdit';

const InnerDetail = ({ type, data }) => {
    const navigate= useNavigate()
    const [userEdition, setUserEdition] = useState(false);
    const onClose=()=>{
      navigate(-1)
    }
  const handlerUser = ()=>{
    setUserEdition(true);
  }
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
              <div>
              <GenericButton buttonText={'Ver Servicios'}/>
              <Edition allowedRoles={[0, 2]} />
              </div>
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
              <div>
              <Edition allowedRoles={[0,1, 2]} onClick={handlerUser}/>
              </div>
            </>
          )}
          <button style={{maxWidth:'10rem'}} onClick={()=>{navigate(-1)}}><h3>Volver:</h3 ></button>
         {userEdition?
         <EditWindow userEdit={data} onClose={onClose}/>:
         null}
        
      </div>
    );
  };
  
  export default InnerDetail;
