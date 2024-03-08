import axios from 'axios'

const interceptor = (logout) => {
 

    axios.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response && error.response.status === 401 || error.response && error.response.status === 403) {
                // Acceso no autorizado, redirigir al inicio de sesión
                redirectologin(logout)
            }
            return Promise.reject(error);
        }
        );
    };   
    const redirectologin =(logout)=>{
            setTimeout(()=>{
                logout();
                localStorage.clear(); 
            },2000);
    }
    
    const setAuthHeader = (token) => {
        //const token = localStorage.getItem('validToken');
        const config = {};
        
        if (token) {
            config.headers = {
                'x-access-token':`${token}`
            };
        }
        
        return config;
    };
    
    export {
        interceptor,
        setAuthHeader
    }
 