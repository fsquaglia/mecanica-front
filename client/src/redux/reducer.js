import {
 LOGIN_USER,
  ISN_AUTH,
  ALL_USERS,
  USER_BY_IDFY,
  USER_BY_ID,
  ALL_CARS,
  CAR_PAT,
  CAR_BY_ID,
  SEARCH_START,
  SEARCH_END,
} from './actions'

const initialState = {
    allUsers: [],
    userBynumId:[],
    detailUsers: [],
    LogIn: [],
    info: [],
    isAuthenticate: false,
    isSearching: false,
    allCars:[],
    byPat:[],
    carById:[],
    cars:[],
    services: []
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
      case  USER_BY_IDFY:
        return{
          ...state,
          userBynumId: payload,
        }
    case USER_BY_ID:
      return {
        ...state,
        detailUsers: payload,
      };
//? %%%%%%%% Vehiculos (car & service) %%%%%%%%%%%%%%%%%%%%%%%%
       case SEARCH_START:
         return {
           ...state,
           isSearching: true,
         };
       case SEARCH_END:
         return {
           ...state,
           isSearching: false,
           };
      case ALL_CARS:
        return {
          ...state,
          allCars:payload,
        }
      case CAR_PAT:
        return {
          ...state,
          byPat:payload,
        }
      case CAR_BY_ID:
        return {
          ...state,
          carById: payload,
        }
      default :
      return {
        ...state,
      }
    }
}

export default reducer;