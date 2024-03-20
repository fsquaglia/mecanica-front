import style from '../styles/Modal.module.css'
import { useState } from "react";
import { useNavigate} from "react-router-dom";
import  ValidService from '../ServValidate';
//import { postCar } from '../SendPosts';
import GenericButton from '../../../../GenericButton/GenericButton';
import Confirmation from '../../../../Confirmation/Confirmation';

const CreateService = ({idCar}) => {
  

    const [showConfirmation, setShowConfirmation] = useState(false);
 
  const [input, setInput] = useState({
         type: "",
        detail: "",
        date_in: "",
        date_out: "",
        observations: "",
        picture: "",
         idCar:idCar,
       });

  const [error, setError] = useState({
    detail: "",
    date_in: "",
    date_out: "",
    observations: "",
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
      [name]: ValidService({ ...input, [name]: value })[name],
    });
  };

  const handleSubmit =  (event) => {
    event.preventDefault();
    setShowConfirmation(true); 
  };

  const handleConfirmation = async (e) => {
    const validationErrors = ValidCar(input);
    setError(validationErrors);

    if (Object.values(validationErrors).every((error) => error === "")) {
      await postCar(input);
      setInput({
        type: "",
        detail: "",
        date_in: "",
        date_out: "",
        observations: "",
        picture: "",
        idCar:idCar,
      });
      navigate("/admin");
    }
    setShowConfirmation(false); 
  };
  const onCancel=()=>{
    setShowConfirmation(false);
  }

  const permit =
  !input.detail.trim() ||
  !input.date_in.trim() ||
  !input.date_out.trim() ||
  !input.observations.trim() ||
  error.detail ||
  error.date_in ||
  error.date_out ||
  error.observations;

  return (
    <div>
       {showConfirmation && (
        <Confirmation onConfirm={ handleConfirmation} close={onCancel} message={'¿Está seguro de crear el vehiculo?'} />
      )}
      <form onSubmit={handleSubmit}>
       <div>
         </div> 
         <div >
           <select name="type" value={input.type} onChange={(event) => handleChange(event)}>
             <option value={'estimation'}>Presupuesto</option>
             <option value={'reparation'}>Reparacion</option>
             <option value={'service'}>Service</option>
          </select>
           <label >  Tipo de servicio: </label>
         </div>
    <br/>
    <div >
           <textarea
             type="text"
             placeholder="Detalle"
             value={input.detail}
             name="detail"
             autoComplete="off"
             onChange={(event) => handleChange(event)}
             className=''
           />
           <label > Detalle: </label>
           {error.detail && <p className={style.errorMessage}>{error.detail}</p>}
         </div>
         <br/>
         <div >
           <input
             type="date"
             placeholder="Fecha entrada"
             value={input.date_in}
             name="date_in"
             autoComplete="off"
             onChange={(event) => handleChange(event)}
             className=''
           />
           <label > Fecha de entrada: </label>
           {error.date_in && <p className={style.errorMessage}>{error.date_in}</p>}
         </div>
         <br/>
         <div >
           <input
             type="date"
             placeholder="Fecha salida"
             value={input.date_out}
             name="date_out"
             autoComplete="off"
             onChange={(event) => handleChange(event)}
             className=''
           />
           <label > Fecha de salida: </label>
           {error.date_out && <p className={style.errorMessage}>{error.date_out}</p>}
         </div>
         <br/>
         <div >
           <textarea
             type="text"
             placeholder="observaciones"
             value={input.observations}
             name="observations"
             autoComplete="off"
             onChange={(event) => handleChange(event)}
             className=''
           />
           <label > Observaciones: </label>
           {error.observations && <p className={style.errorMessage}>{error.observations}</p>}
         </div>
         <br/>
         <div >
           <input
             type="text"
             placeholder="imagen"
             value={input.picture}
             name="picture"
             autoComplete="off"
             onChange={(event) => handleChange(event)}
             className=''
           />
           <label > Imagen: </label>
         </div>
         <br/>
    <GenericButton type='submit' buttonText={'Crear Servicio'} disabled={permit}/>
      </form>
    </div>
  );
};

export default CreateService