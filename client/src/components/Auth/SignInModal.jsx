
import style from './styles/Modal.module.css'
import SignInForm from './SignInForm';
import GenericButton from '../GenericButton/GenericButton';


const SignWindow = ({ onClose, auth}) => {
 


  return (
    <div className={style.modal}>
      <h2>Registro:</h2>
      <GenericButton onClick={onClose} buttonText={'Cancelar'} />
      <br/>
      <br/>
      <SignInForm auth = {auth}/>
    </div>
  );
};

export default SignWindow;
