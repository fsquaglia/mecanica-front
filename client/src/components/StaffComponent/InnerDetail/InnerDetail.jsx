import {Link, useNavigate} from 'react-router-dom'
import style from './InnerDetail.module.css'
import {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {getAllServices} from '../../../redux/actions'
import GenericButton from '../../GenericButton/GenericButton'
import Edition from '../AdminHelpers/Edition/Edition';
import EditWindow from '../../Auth/EditComponents/ModalEdit';
import CreateModal from '../Cars&ServiceEdit/EditCars/Create/CreateModal'
import CarryTable from '../ServiceComp/CarryTable'
import {infoSelect, roles, allowing} from '../AdminHelpers/Helpers/InfoMap';

const InnerDetail = ({ type, data }) => {
    const navigate= useNavigate()
    const [userEdition, setUserEdition] = useState(false);
    const [createCar, setCreateCar]= useState(false)
    const infoEditing = useSelector((state)=>state.LogIn)
    
  
    const onClose=()=>{
      navigate(-1)
    }
    //Edicion de usuario
  const handlerUser = ()=>{
    setUserEdition(true);
  }
  //creacion de vehiculos 
  const handlerCreate = ()=>{
    const userId = (type==='user')? data.id: null;
    sessionStorage.setItem('idUser', userId)
    setCreateCar(true)
  }
  const closerAd = ()=>{
    setCreateCar(false)
  }
  //Presentacion y edicion de servicios
  //todo Hay que corregir y hacerla por Id; el componente que renderice a todos los 
  //todos los servicios debe estar en el Admin

  const dispatch = useDispatch()
  const services = useSelector((state)=>state.services)
  const [serv, setServ] = useState(false)
  const handleServ = ()=>{
    setServ(true)
  }
  const servClose = ()=>{
    setServ(false)
  }
  useEffect(()=>{
    if(serv===true){
      dispatch(getAllServices())
    }
  },[serv])
  
  const pars = (type === 'car')? data.Users : data.Cars
  const propietarios = infoSelect(pars)
  const info1 = (type==='user')? data.role: null;
  const rol = roles(info1)
  
  //Logica para gestionar permiso de edicion a usuario de su propia cuenta:
  
   const edt = allowing(infoEditing, data)
   //console.log('puedo editarme? ',edt)
  //===================================================
    return (
      <div className={style.container}>
        <h2>{type === 'car' ? 'Vehiculo:' : 'Usuario:'}</h2>
        <Edition onClick={()=>{navigate("/admin")}} text={'Volver a Admin'} allowedRoles={[0, 2]}/>
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
              <Edition allowedRoles={[0]}text={'Editar'}/>
              {serv? <><GenericButton onClick={servClose} buttonText={'Cerrar'}/>
              <CarryTable data= {services}/></> : 
              <GenericButton onClick={handleServ} buttonText={'Ver Servicios'}/>}
              </div>
            </>
          )}
          {type === 'user' && (
            <>
             <ul>
              <li>Email: {data.email}</li>
              <li>Nombre: {data.name}</li>
              <li>Apodo: {data.nickname}</li>
              <li>Tipo documento: {data.typeId}</li>
              <li>Numero documento: {data.numberId}</li>
              <li>Rol: {rol}</li>
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
              <Edition allowedRoles={[0]}  exception={edt} onClick={handlerUser} text={'Editar'} />
              </div>
              <div>
              <Edition allowedRoles={[0,2]}  onClick={handlerCreate} text={'Crear Vehiculo'} />
              </div>
            </>
          )}
          <GenericButton onClick={()=>{navigate(-1)}} buttonText={'Volver'}/>
         {userEdition?
         <EditWindow userEdit={data} onClose={onClose} />:
         null}
         {createCar?
         <CreateModal closer={closerAd}/>: null}
        
      </div>
    );
  };
  
  export default InnerDetail;
