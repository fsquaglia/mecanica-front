import { HandlError} from '../components/Auth/HandlerError'
import axios from 'axios'
export const LOGIN_USER= 'LOGIN_USER';
export const ISN_AUTH= 'ISN_AUTH';
export const ALL_USERS= 'ALL_USERS';
export const  USER_BY_IDFY= ' USER_BY_IDFY';
export const USER_BY_ID='USER_BY_ID';
export const ALL_CARS='ALL_CARS';
export const CAR_PAT= 'CAR_PAT';
export const CAR_BY_ID = 'CAR_BY_ID';
export const SEARCH_START = 'SEARCH_START';
export const SEARCH_END = 'SEARCH_END';


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
    
      }
    }
  }
  export const userBynumId = (numberId, )=> async (dispatch)=>{
    try {
      const data = await axios(`/user?numberId=${numberId}`)
      return dispatch({
        type:  USER_BY_IDFY,
        payload: data.data,
      })
    } catch (error) {
      HandlError(error)
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
      
    }
  };

//?%%%%%%%%%%% cars & services %%%%%%%%%%%%%%%%%%%%%%%%%%

export const getAllCars = ()=>{
  return async (dispatch)=>{
    try {
      const data = await axios("/car");
      return dispatch({
        type:ALL_CARS,
        payload: data.data,
      })
    } catch (error) {
      HandlError(error)
    }
  }
}

export const carById = (id, token) => async (dispatch) => {
  try {
    const data = await axios(`/car/${id}`);
    return dispatch({
      type: CAR_BY_ID,
      payload:data.data,
    });
  } catch (error) {
    HandlError(error)
    
  }
};

export const carByPat = (patent, token) => async (dispatch) => {
  try {
    const data = await axios(`/car?patent=${patent}`);
    return dispatch({
      type: CAR_PAT,
      payload:data.data,
    });
  } catch (error) {
    HandlError(error)
    
  }
};

export const searchStart = (handleSearchStart) => ({
  type: SEARCH_START,
  payload: handleSearchStart,
});

export const searchEnd = (handleSearchEnd) => ({
  type: SEARCH_END,
  payload: handleSearchEnd,
});
 