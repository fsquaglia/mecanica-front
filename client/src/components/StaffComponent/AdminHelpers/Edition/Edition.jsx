import GenericButton from '../../../GenericButton/GenericButton';
import {useAuth} from './../../../Auth/AuthContext/AuthContext'

const Edition = ({allowedRoles=(allowedRoles),text, onClick })=>{
 const {user}=useAuth();
 const permit = user? user.role : null;
 return(
    <>
    {(allowedRoles.includes(permit)) ?
    <GenericButton buttonText={text} onClick={onClick}/> 
    : null }
    </>
 )
}

export default Edition;

//alowedRoles={(0, 2)}