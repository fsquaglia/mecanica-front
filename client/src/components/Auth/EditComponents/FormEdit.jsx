import { useState } from 'react';
import axios from 'axios'
import style from '../styles/Form.module.css';
import GenericButton from '../../GenericButton/GenericButton';
import CloudinaryUpload from './CloudinaryUpload';
import Confirmation from '../../Confirmation/Confirmation'
import {useAuth} from '../AuthContext/AuthContext'
import EditPass from './EditPass';



const FormEdit = ({ id, editedUser, onInputChange, onSaveChanges, onClose}) => {
  const [imageUrl, setImageUrl] = useState(editedUser.picture);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const { authenticated, user}= useAuth()
 
  const onImageChange = (url) => {
    setImageUrl(url);
    //console.log(setImageUrl)
    onInputChange("picture", url);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    onInputChange(name, value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfirmation(true); 
  };
  const handleConfirmation = (e) => {
    onSaveChanges();
    setShowConfirmation(false); // Muestra el componente de confirmación
  };
  const onCancel=()=>{
    setShowConfirmation(false);
  }

  return (
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit}>
        <label>
          {imageUrl && <img style={{maxWidth:'120px'}} src={imageUrl} alt="Current User" />}
        </label>
        <CloudinaryUpload onImageChange={onImageChange}/>
        <label>
          Nombre:
          <input type="text" name="name" value={editedUser.name} onChange={handleInputChange} />
        </label>
        <label>
          Email:
          <input type="text" name="email" value={editedUser.email} onChange={handleInputChange} />
        </label>
        <label>
          Tipo documento:
          <select name="typeId" value={editedUser.typeId} onChange={handleInputChange}>
            <option value={'DNI'}>DNI</option>
            <option value={'CUIT/CUIL'}>CUIT/CUIL</option>
            <option value={'CDI'}>CDI</option>
            <option value={'PASSPORT'}>PASAPORTE</option>
            <option value={'CI_EXTRANGE'}>CI-extranjera</option>
          </select>
        </label>
        <label>
          Número:
          <input type="text" name="numberId" value={editedUser.numberId} onChange={handleInputChange} />
        </label>
        <label>
          País:
          <input type="text" name="country" value={editedUser.country} onChange={handleInputChange} />
        </label>
        {authenticated && user.role === 2 ? null : (
        <>
        <label>
          Rol:
          <select name="role" value={editedUser.role} onChange={handleInputChange}>
            <option value={0}>Admin</option>
            <option value={1}>Usuario</option>
            <option value={2}>Mecanico</option>
          </select>
        </label>
        <label>
          Estado:
          <select name="enable" value={editedUser.enable} onChange={handleInputChange}>
            <option value={true}>Activo</option>
            <option value={false}>Bloqueado</option>
          </select>
        </label>
        </>)}
        <GenericButton type="submit" buttonText="Guardar cambios" />
      </form>
      {showConfirmation && (
        <Confirmation onConfirm={ handleConfirmation} close={onCancel} message={'¿Está seguro de actualizar el usuario?'} />
      )}
      <hr></hr>
      <EditPass id={id} onClose={onClose}/>
     </div>
  );
};

export default FormEdit;
 
