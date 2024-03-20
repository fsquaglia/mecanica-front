import {Link, useNavigate} from 'react-router-dom'
import style from './InnerDetail.module.css'
import {useState} from 'react'
import GenericButton from '../../GenericButton/GenericButton'
import Edition from '../AdminHelpers/Edition/Edition';
import EditWindow from '../../Auth/EditComponents/ModalEdit';
import infoSelect from '../AdminHelpers/Helpers/InfoMap';
import CreateModal from '../Cars&ServiceEdit/EditCars/Create/CreateModal'

const InnerDetail = ({ type, data }) => {
    const navigate= useNavigate()
    const [userEdition, setUserEdition] = useState(false);
    const [carAdd, setCarAdd]= useState(false);
    const addHandCar = ()=>{
      setCarAdd(true)
    }
    const handleClose = ()=>{
      setCarAdd(false)
    }


    const onClose=()=>{
      navigate(-1)
    }
  const handlerUser = ()=>{
    setUserEdition(true);
  }
   const pars = (type === 'car')? data.Users : data.Cars
  const propietarios = infoSelect(pars)
  

    return (
      <div className={style.container}>
        <h2>{type === 'car' ? 'Vehiculo:' : 'Usuario:'}</h2>
        <Edition onClick={()=>{navigate("/admin")}} text={'...Admin'} allowedRoles={[0, 2]}/>
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
              </ul>
              <div>
               <p>Propietario:</p>
                 {propietarios?.map((propietario, index) => (
                    <span key={index}>
                  <Link to={`/admin/detail/${propietario.id}?type=user`}>Nombre: {propietario.name}</Link>
                    {index !== propietarios.length - 1 ? ', ' : ''}
                       </span>
                       ))}
              </div>
              <img src={data.picture} style={{ maxWidth: '150px' }}/>
              <label>Observaciones: {data.observations}</label>
              <div>
              <GenericButton buttonText={'Ver Servicios'}/>
              <Edition allowedRoles={[1, 0, 2]} text={'Editar'}/>
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
              <div>
               <p>Vehiculo:</p>
                 {propietarios?.map((propietario, index) => (
                    <span key={index}>
                  <Link to={`/admin/detail/${propietario.id}?type=car`}>Patente: {propietario.name}</Link>
                    {index !== propietarios.length - 1 ? ', ' : ''}
                       </span>
                       ))}
              </div>
              <img src={data.picture} style={{maxWidth:'150px'}}/>
              <div>
              <Edition allowedRoles={[0,1, 2]} onClick={handlerUser} text={'Editar'} />
              <Edition allowedRoles={[0, 2]} onClick={addHandCar} text={'Agregar vehiculo'} />
              {carAdd?
              <CreateModal idUser= {data.id} closer= {handleClose}/> : null
               }
              </div>
            </>
          )}

          <GenericButton onClick={()=>{navigate(-1)}} buttonText={'Volver'}/>
         {userEdition?
         <EditWindow userEdit={data} onClose={onClose} />:
         null}
        
      </div>
    );
  };
  
  export default InnerDetail;
