import style from './styles/Modal.module.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ValidCreate } from './internalUtils/Validate';
import { createUser } from './Auth';
import GenericButton from '../GenericButton/GenericButton';
import Confirmation from '../Confirmation/Confirmation';

const SignInForm = ({openCreateCar}) => {
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [input, setInput] = useState({
    email: "",
    name: "",
    typeId: "",
    numberId: "",
    country: "",
    });

  const [error, setError] = useState({
    email: "",
    name: "",
    typeId: "",
    numberId: "",
    country: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));

    setError({
      ...error,
      [name]: ValidCreate({ ...input, [name]: value })[name],
    });
  };
  const handleConfirmation = async (e) => {

    const validationErrors = ValidCreate(input);
    setError(validationErrors);

    if (Object.values(validationErrors).every((error) => error === "")) {
      await createUser(input, openCreateCar);
      setInput({
        email: "",
        name: "",
        typeId: "",
        numberId: "",
        country: "",
      });
      
    }
    setShowConfirmation(false); // Muestra el componente de confirmación
  };

  const handleSubmit =  (event) => {
    event.preventDefault();
    setShowConfirmation(true);
  };

  // const permit= (error.email|| error.name||error.typeId||error.numberId||error.country)? true :false;
  const permit =
  !input.email.trim() ||
  !input.name.trim() ||
  !input.typeId.trim() ||
  !input.numberId.trim() ||
  !input.country.trim() ||
  error.email ||
  error.name ||
  error.typeId ||
  error.numberId ||
  error.country;

  
  const onCancel=()=>{
    setShowConfirmation(false);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
       <div>
         </div>   
         <div >
           <input
             type="text"
             placeholder="email"
             value={input.email}
             name="email"
             autoComplete="off"
             onChange={(event) => handleChange(event)}
             className=''
           />
           <label > Email: </label>
           {error.email && <p className={style.errorMessage}>{error.email}</p>}
         </div>
         <br/>
         <div >
           <input
             type="text"
             placeholder="name"
             value={input.name}
             name="name"
             autoComplete="off"
             onChange={(event) => handleChange(event)}
             className=''
           />
           <label > Nombre, Apellido o Razón social: </label>
           {error.name && <p className={style.errorMessage}>{error.name}</p>}
         </div>
         <br/>
         <div>
      <label htmlFor="typeId">Tipo documento:</label>
      <select 
      id="typeId" 
      name="typeId" 
      value={input.typeId} 
      onChange={(event) => handleChange(event)}>
        <option value="">Selecciona un tipo</option>
        <option value="DNI">DNI</option>
        <option value="CUIT">CUIT</option>
        <option value="CDI">CDI</option>
        <option value="PASSPORT">PASAPORTE</option>
        <option value="CI_EXTRANGE">CI extranjera.</option>
      </select>
      {error.typeId && <p className={style.errorMessage}>{error.typeId}</p>}
      <br />
      <label htmlFor="numberId">Número documento:</label>
      <input 
      type="text" 
      id="numberId" 
      name="numberId" 
      value={input.numberId} 
      onChange={(event) => handleChange(event)} />
       {error.numberId && <p className={style.errorMessage}>{error.numberId}</p>}
    </div>
    <br/>
    <div >
           <input
             type="text"
             placeholder="country"
             value={input.country}
             name="country"
             autoComplete="off"
             onChange={(event) => handleChange(event)}
             className=''
           />
           <label > Pais: </label>
           {error.country && <p className={style.errorMessage}>{error.country}</p>}
         </div>
         <br/>
    <GenericButton type='submit' buttonText={'Crear Usuario'} disabled={permit}/>
      </form>
      {showConfirmation && (
        <Confirmation onConfirm={ handleConfirmation} close={onCancel} message={'¿Está seguro de crear el usuario?'} />
      )}
    </div>
  );
};

export default SignInForm;

