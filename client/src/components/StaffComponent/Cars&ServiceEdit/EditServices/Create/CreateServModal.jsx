import { useNavigate } from 'react-router-dom';
import style from '../styles/Modal.module.css'
import CreateService from './CreateService';
import GenericButton from '../../../../GenericButton/GenericButton';
import Confirmation from '../../../../Confirmation/Confirmation';


const CreateModal = ({closer, idCar}) => {
  const navigate = useNavigate()
 
 const onClose =()=>{
    closer()
 }

  return (
    <div className={style.modal}>
      <h2>Crear Servicio:</h2>
      <GenericButton onClick={onClose} buttonText={'Cancelar'} />
      <br/>
      <br/>
      <CreateService idCar= {idCar}/>
      
    </div>
  );
};

export default CreateModal;
