import { HandlError} from '../components/Auth/HandlerError'
import axios from 'axios'
export const LOGIN_USER= 'LOGIN_USER';
export const ISN_AUTH= 'ISN_AUTH';
export const ALL_USERS= 'ALL_USERS';
export const USER_BY_ID='USER_BY_ID';
 

export const loginUser = (payload) => (dispatch)=>{
    return dispatch({
      type: LOGIN_USER,
      payload: payload,
    });
  
};
export const isNotAuth =()=>(dispatch)=>{
return dispatch({
type:ISN_AUTH,
payload: [],
})
}
export const getAllUsers = ()=>{
    return async (dispatch)=>{
      try {
        const data = await axios("/user");
        return dispatch({
          type:ALL_USERS,
          payload: data.data,
        })
      } catch (error) {
        HandlError(error)
        //alert("Could not get the users");
      }
    }
  }
  export const getById = (id, token) => async (dispatch) => {
    try {
      const data = await axios(`/user/${id}`);
      return dispatch({
        type: USER_BY_ID,
        payload:data.data,
      });
    } catch (error) {
      HandlError(error)
      //console.error('Error fetching game', error);
    }
  };