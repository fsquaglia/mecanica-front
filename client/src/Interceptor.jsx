import axios from 'axios'


const interceptor = (logout) => {
  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response && error.response.status === 401 || error.response && error.response.status === 403) {
        // Acceso no autorizado, redirigir al inicio de sesión
        redirectToLogin(logout)
      }
      return Promise.reject(error);
    }
  );
};

const redirectToLogin =(logout)=>{
  setTimeout(()=>{
    logout();
  },4000)
}
export default interceptor