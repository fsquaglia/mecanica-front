import { useState } from 'react';
import style from '../styles/Modal.module.css'
import FormEdit from './FormEdit';
import axios from 'axios'
import GenericButton from '../../GenericButton/GenericButton';
import Confirmation from '../../Confirmation/Confirmation';
import {showError, showSuccess, HandlError}from '../HandlerError';


const EditWindow = ({ onClose, userEdit}) => {
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
  
    //Lógica para guardar los cambios (puedes conectarlo a tus acciones de Redux)
    try {
      // Realiza la solicitud PUT con Axios
      const response = await axios.put(`/user/${id}`,editedUser);
      
      if (response.status === 200) {
        showSuccess('Usuario actualizado con éxito')
        //alert('Usuario actualizado con éxito');
       onClose(); // Cierra el modal después de guardar los cambios
      } else {
        showError('Error al actualizar el usuario')
        //alert('Error al actualizar el usuario');
      }
    } catch (error) {
      HandlError({error:error.message})
      console.error('Error al actualizar el usuario:', error);
      //alert('Error al actualizar el usuario');
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
  const onCancel=()=>{
    setShowConfirmation(false);
  }

 const onResetPass = async()=>{
  try {
    const response = await axios.patch(`/user/${id}`);
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
      <FormEdit id = {id} editedUser={editedUser} onInputChange={handleInputChange} onSaveChanges={handleSaveChanges} />
      <GenericButton onClick= {onClose} buttonText='Cancelar'/>
      <GenericButton onClick= {resetPassword} buttonText='Reset Password'/>
      {showConfirmation && (
        <Confirmation onConfirm={handleConfirmation} close={onCancel} message={'¿Está seguro resetear la contraseña?'} />
      )}
    </div>
  );
};

export default EditWindow;
