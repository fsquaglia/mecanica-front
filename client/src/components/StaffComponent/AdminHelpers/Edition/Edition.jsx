import GenericButton from '../../../GenericButton/GenericButton';
import {useAuth} from './../../../Auth/AuthContext/AuthContext'

const Edition = ({allowedRoles=(allowedRoles), onClick })=>{
 const {user}=useAuth();
 const permit = user? user.role : 1;
 return(
    <>
    {(allowedRoles.includes(permit)) ?
    <GenericButton buttonText={'Editar'} onClick={onClick}/> 
    : null }
    </>
 )
}

export default Edition;

//alowedRoles={(0, 2)}