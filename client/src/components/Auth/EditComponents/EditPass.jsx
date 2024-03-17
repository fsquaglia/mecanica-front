import GenericButton from "../../GenericButton/GenericButton";
import style from '../styles/Modal.module.css'
import { ValidPass } from "../internalUtils/Validate";
import { verifyPassword} from "../Auth";
import {useState}from 'react'

const EditPass = ({id, userUpdater, handlePasswordChange}) => {
    
    const { setShowConfPass}=userUpdater;


    const [verify, setVerify]= useState(true)
    const [inputPass, setInputPass]= useState({
        id : id, 
        password: "",
    })

    const [input, setInput] = useState({
        newPassword: "",
        confirmPassword: ""
    });
    const [error, setError] = useState({
        newPassword: "",
        confirmPassword: "",
      });

      const handleChangePass = (event) => {
        const { name, value } = event.target;
        setInputPass({
            ...inputPass,
            [name]: value,
        });
    }
    const handleChange = (event) => {
        const { name, value } = event.target;
        setInput({
            ...input,
            [name]: value,
        });
        setError((prevError) => ({
            ...prevError,
            [name]:
                name === "confirmPassword" && value !== input.newPassword
              ? "Las contraseñas no coinciden"
              : ValidPass({ ...input, [name]: value })[name],
          }));
    };

    const userData = {
        id: inputPass.id,
        password: inputPass.password
    };
    
    const handleSubmitVerify = (event) => {
        event.preventDefault();
        //  lógica para verificar la contraseña actual
        verifyPassword(userData, setVerify)
    };
    
    const passChange = {
        password: input.newPassword
    };

    const handleSubmitChange = (event) => {
        event.preventDefault();
        setShowConfPass(true);
        
    };
    handlePasswordChange(id, passChange, setVerify)
    

    const disabledInput = verify
    const disabledBy =
  !input.newPassword.trim() ||
  !input.confirmPassword.trim() ||
  error.newPassword ||
  error.confirmPassword ||
  disabledInput


  return (
    <div>
    <form>
                 <label>Intoduzca su contraseña actual:</label>
                <input
                    type="password"
                    placeholder="Contraseña actual"
                    value={inputPass.password}
                    name="password"
                    autoComplete="off"
                    onChange={(event) => handleChangePass(event)}
                />
                <label>Intoduzca su nueva contraseña:</label>
               <GenericButton type="submit" onClick={handleSubmitVerify} buttonText={'Verificar contraseña'} disabled={!inputPass.password}/>

                {/* Campos para el nuevo password */}
                {!disabledInput? 
                <label>¡Password confirmado! Puede continuar:</label>: null}
                <label>Intoduzca su nueva contraseña:</label>
                <input
                    type="password"
                    placeholder="Nuevo password"
                    value={input.newPassword}
                    name="newPassword"
                    autoComplete="off"
                    onChange={(event) => handleChange(event)}
                    disabled={disabledInput} // Deshabilitar si la contraseña actual no está verificada
                />
                {error.newPassword && <p className={style.errorMessage}>{error.newPassword}</p>}
                <label>Confirme su nueva contraseña:</label>
                <input
                    type="password"
                    placeholder="Confirmar nuevo password"
                    value={input.confirmPassword}
                    name="confirmPassword"
                    autoComplete="off"
                    onChange={(event) => handleChange(event)}
                    disabled={disabledInput} // Deshabilitar si la contraseña actual no está verificada
                />
                 {error.confirmPassword && <p className={style.errorMessage}>{error.confirmPassword}</p>}
                <GenericButton type="submit" onClick={handleSubmitChange} buttonText={'Cambiar contraseña'} disabled={disabledBy}/>
            </form>
          
    </div>
  )
}

export default EditPass