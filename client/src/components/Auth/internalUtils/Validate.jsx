import {useSelector}from 'react-redux';

const ValidLogin = (input) => {
  let errors = {};

  // Using Regular Expressions to validate the appropriate use
  const validEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  const validPass = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
  
  
  // Validaciones para el campo de email
  if (!input.email.trim()) {
    errors.email = "This field cannot be empty";
  } else if (!validEmail.test(input.email.trim())) {
    errors.email = "Invalid email format";
  } else if (input.email.length >= 50) {
    errors.email = "The email is too long";
  }

  // Validaciones para el campo de contraseña
  if (!input.password.trim()) {
    errors.password = "This field cannot be empty";
  } else if (!validPass.test(input.password.trim())) {
    errors.password = "Password must contain at least one uppercase letter and one digit";
  } else if (input.password.length < 8) {
    errors.password = "Password must be at least 8 characters long";
  }

  return errors;
};

const ValidCreate = (input) => {

  let errors = {};

  // Using Regular Expressions to validate the appropriate use
  const validEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
 
  
  // Validaciones para el campo de email
  if (!input.email.trim()) {
    errors.email = "This field cannot be empty";
  } else if (!validEmail.test(input.email.trim())) {
    errors.email = "Invalid email format";
  } else if (input.email.length >= 50) {
    errors.email = "The email is too long";
  }
  // Validaciones para el campo de name
  if (!input.name.trim()) {
    errors.name = "This field cannot be empty";
  } else if (input.name.length < 8) {
    errors.name = "Name must be at least 8 characters long";
  } 
  //Validaciones para el campo typeId:
  if(input.typeId===""){
    errors.typeId = "This field cannot be empty";
  }//Validaciones para el campo numberId:
  if(!input.numberId.trim()){
    errors.numberId = "This field cannot be empty";
  }else if (input.numberId.length < 6){
    errors.numberId = "The number is too short";
  }
  //Validaciones par el campo country.
  if(!input.country.trim()){
    errors.country = "This field cannot be empty";
  }

  return errors;
};

export {
  ValidLogin,
  ValidCreate
}; 
// const ValidCreate = (input) => {
//   //   const allUsers = useSelector((state) => state.allUsers)
//   //  const all = allUsers.data
//   //  console.log(all)
//     let errors = {};
  
//     // Using Regular Expressions to validate the appropriate use
//     const validEmail = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
//     const validPass = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
//    //const avoidRepetition = all.filter((email) => email.email === input.email);
    
//     // Validaciones para el campo de email
//     if (!input.email.trim()) {
//       errors.email = "This field cannot be empty";
//     // } else if (avoidRepetition.length !== 0) {
//     //   errors.email = "Please choose another email, it already exists";
//     } else if (!validEmail.test(input.email.trim())) {
//       errors.email = "Invalid email format";
//     } else if (input.email.length >= 50) {
//       errors.email = "The email is too long";
//     }
//     // Validaciones para el campo de contraseña
//     if (!input.password.trim()) {
//       errors.password = "This field cannot be empty";
//     } else if (!validPass.test(input.password.trim())) {
//       errors.password = "Password must contain at least one uppercase letter and one digit";
//     } else if (input.password.length < 8) {
//       errors.password = "Password must be at least 8 characters long";
//     } else if (input.password !== input.confirmPassword) {
//       errors.confirmPassword = "Passwords do not match";
//     }
    
  
//     return errors;
//   };