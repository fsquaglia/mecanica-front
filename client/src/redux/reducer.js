import {
 LOGIN_USER,
  ISN_AUTH,
  ALL_USERS,
  USER_BY_ID,
} from './actions'

const initialState = {
    allUsers: [],
    LogIn: [],
    info: [],
    isAuthenticate: false,
    detailUsers: [],
};

const reducer = (state = initialState, { type, payload })=>{    
    switch(type){
        case LOGIN_USER:
      //console.log('usuario comun reducer  '+payload)
      return {
        ...state,
        LogIn: payload,
        isAuthenticate: true,
      };
    case ISN_AUTH:
      return {
        ...state,
        LogIn: payload,
        isAuthenticate: false,
      };
    case ALL_USERS:
      return {
        ...state,
        allUsers: payload,
      };
    case USER_BY_ID:
      return {
        ...state,
        detailUsers: payload,
      };
      default :
      return {
        ...state,
      }
    }
}

export default reducer;