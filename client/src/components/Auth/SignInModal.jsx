
import style from './styles/Modal.module.css'
import SignInForm from './SignInForm';
import GenericButton from '../GenericButton/GenericButton';


const SignWindow = ({ onClose, openCreateCar}) => {
 


  return (
    <div className={style.modal}>
      <h2>Registro:</h2>
      <GenericButton onClick={onClose} buttonText={'Cancelar'} />
      <br/>
      <br/>
      <SignInForm openCreateCar = {openCreateCar}/>
    </div>
  );
};

export default SignWindow;
