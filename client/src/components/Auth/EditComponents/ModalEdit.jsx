import { useState } from 'react';
import style from '../styles/Modal.module.css'
import FormEdit from './FormEdit';
import axios from 'axios'
import {useAuth} from '../AuthContext/AuthContext'
import GenericButton from '../../GenericButton/GenericButton';
import Confirmation from '../../Confirmation/Confirmation';
import {showError, showSuccess, HandlError}from '../HandlerError';
import {changePassword} from '../Auth'
import setAuthHeader from '../axiosUtils'


const EditWindow = ({ onClose, userEdit}) => {
  const {authenticated, user}= useAuth()
  const {id, email,name, typeId, numberId, role, enable, country, picture}= userEdit;
 
  const [editedUser, setEditedUser] = useState({
    email,
    name,
    typeId,
    numberId,
    country,
    picture,
    role,
    enable,
  });



  const handleInputChange = (name, value) => {
    const processedValue = name === 'enable' ? value === 'true' : value;
    setEditedUser((prevUser) => ({
      ...prevUser,
      [name]: processedValue,
    }));
  };

  const handleSaveChanges = async () => {
  
    //Lógica para guardar los cambios
    try {
      // Realiza la solicitud PUT con Axios
      const response = await axios.put(`/user/${id}`,editedUser, setAuthHeader());
      
      if (response.status === 200) {
        showSuccess('Usuario actualizado con éxito')
       onClose(); // Cierra el modal después de guardar los cambios
      } else {
        showError('Error al actualizar el usuario')
      }
    } catch (error) {
      HandlError({error:error.message})
      console.error('Error al actualizar el usuario:', error);
    }
  };
  //---------------Funciones de blanqueo de password y confirmacion
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  const resetPassword = () => {
    setShowConfirmation(true); 
  };
  const handleConfirmation = () => {
    onResetPass();
    setShowConfirmation(false); // oculta el componente de confirmación
  };
  //%%%%%%%% Funciones de actualizacion de usuario
  const [showConfUser, setShowConfUser] = useState(false);
  const userConfirmation=()=>{
    handleSaveChanges();
    setShowConfUser(false);
  }
  //@@@@@@ Funciones de actualizacion de password
  const [showConfPass, setShowConfPass] = useState(false);
  const [isPasswordChangeConfirmed, setIsPasswordChangeConfirmed] = useState(false);

   const handlePasswordChange = (id, passChange, setVerify) => {
    if (isPasswordChangeConfirmed === true) {
      // Lógica para cambiar la contraseña
      changePassword(id, passChange, setVerify, onClose)
      setShowConfPass(false); // Oculta el Confirmation después de ejecutar la lógica
      setIsPasswordChangeConfirmed(false); // Reinicia el estado de confirmación
     }
  };

  const handleConfirPass = () => {
    setIsPasswordChangeConfirmed(true);
};

  const userUpdater = {
    setShowConfUser,
    setShowConfPass,
    
  }
  
  const onCancel=()=>{
    setShowConfirmation(false);
    setShowConfUser(false)
    setShowConfPass(false)
  }

 const onResetPass = async()=>{
  try {
    const response = await axios.patch(`/user/${id}`, setAuthHeader());
    if (response.status === 200) {
      showSuccess('Contraseña actualizada con exito')
     onClose(); // Cierra el modal después de guardar los cambios
    } else if (response.status ===400){
      showError('Error al actualizar la contraseña')
    }
  } catch (error) {
    if (error.response) {// Si hay una respuesta del servidor, muestra el mensaje de error correspondiente
      HandlError(error);
    } else {// Si no hay respuesta del servidor, muestra un mensaje de error genérico
      showError('Error al actualizar la contraseña');
    }
  }
 }

 
  return (
    <div className={style.modal}>
      <h2>Editar Usuario</h2>
      <FormEdit id = {id} editedUser={editedUser} onInputChange={handleInputChange} onSaveChanges={handleSaveChanges} onClose={onClose} userUpdater={userUpdater} userConfirmation={userConfirmation} handlePasswordChange={handlePasswordChange}/>
      <GenericButton onClick= {onClose} buttonText='Cancelar'/>
      {authenticated && user.role===0? (
      <GenericButton onClick= {resetPassword} buttonText='Reset Password'/>) : null}
      {showConfirmation && (
      <Confirmation onConfirm={handleConfirmation} close={onCancel} message={'¿Está seguro de resetear la contraseña?'} />
      )}
      {showConfUser && (
      <Confirmation onConfirm={userConfirmation} close={onCancel} message={'¿Está seguro de actualizar el usuario?'} />
      )}
      {showConfPass && (
      <Confirmation onConfirm={handleConfirPass} close={onCancel} message={'¿Está seguro de actualizar la contraseña?'} />
      )}
     
    </div>
  );
};

export default EditWindow;
