import axios from "axios";
import {HandlError,showSuccess, showError } from './HandlerError';



const createUser = async(userData, login)=>{
    const email = userData.email;
  const password = userData.password;
  const nickname = userData.nickname ?? null;
  const name = userData.name ?? null;
  const picture = userData.picture ?? null;
  try {
    const response = await axios.post(`/user/create`, {
        email,
        password,
        nickname,
        name,
        picture
    })
    if (response.status === 201) {
      const token = response.data.token;
      const user = response.data.data;
      login(token, user);
       showSuccess('User created successfully')
        //console.log(user)
        return user;
      }
  } catch (error) {
    HandlError(error);
    alert('algo pasó en la creacion')
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
            alert('login succesfully')
            console.log(token)
            console.log(user)
            
              return user;
        }
       
        } catch (error) {
          showError('Login fallido')
          alert('login fallido')
          //HandlError(error);
          throw error;
        }
               
            }


export {
    createUser,
    loginUser
}

