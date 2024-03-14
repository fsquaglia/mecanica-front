import axios from "axios";
import {HandlError,showSuccess, showError } from './HandlerError';



const createUser = async(userData,openCreateCar)=>{
    const email = userData.email;
  const name = userData.name;
  const typeId = userData.typeId;
  const numberId = userData.numberId;
  const country = userData.country;
  try {
    const response = await axios.post(`/user/create`, {
        email,
        name,
        typeId,
        numberId,
        country
    })
    if (response.status === 201) {
      //const token = response.data.token;
      const user = response.data.data;
      const idUser =user.id
      sessionStorage.setItem('idUser',idUser)
       showSuccess('User created successfully')
       openCreateCar();
        //console.log(user)
        return user;
      }
  } catch (error) {
    HandlError(error);
    throw error;
  }
}
const loginUser = async(userData,login)=>{
    const email = userData.email;
    const password = userData.password;
    try {
        const response = await axios.post(`/user/login`,{
            email,
            password,
        });
        if (response.status === 200) {
          //console.log(response.data.data)
          const token = response.data.token;
          const user = response.data.data;
          login(token, user);
          //console.log(token)
          //console.log("Token almacenado en localStorage:", localStorage.getItem('validToken'));
      
          
            showSuccess('Login sucessfully')
            console.log(token)
            console.log(user)
            
              return user;
        }
       
        } catch (error) {
          showError('Login fallido')
          //HandlError(error);
          throw error;
        }
               
            }


export {
    createUser,
    loginUser
}

