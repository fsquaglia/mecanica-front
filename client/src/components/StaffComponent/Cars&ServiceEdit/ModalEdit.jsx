import { useState } from 'react';
import style from '../styles/ModalEdit.module.css'
import FormEdit from './FormEdit';
import axios from 'axios'
import GenericButton from '../Buttons/GenericButton';
import {showError, showSuccess,HandlError}from '../../Auth/HandlerError';


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
      const response = await axios.put(`/user/update/${id}`,editedUser);
      
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
  
 

  return (
    <div className={style.modal}>
      <h2>Editar Usuario</h2>
      <FormEdit id = {id} editedUser={editedUser} onInputChange={handleInputChange} onSaveChanges={handleSaveChanges} />
      <GenericButton onClick= {onClose} buttonText='Cancelar'/>
    </div>
  );
};

export default EditWindow;
