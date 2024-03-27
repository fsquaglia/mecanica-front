import {
  LOGIN_USER,
  ISN_AUTH,
  ALL_USERS,
  USER_BY_IDFY,
  USER_BY_ID,
  CLEAN_DETAILS,
  ALL_CARS,
  CAR_PAT,
  CAR_BY_ID,
  SEARCH_START,
  SEARCH_END,
  ISMYCOMMERCE,
  POST_FAVORITES,
} from "./actions";

const initialState = {
  allUsers: [],
  userByDni: [],
  detailUsers: [],
  LogIn: [],
  info: [],
  isAuthenticate: false,
  allCars: [],
  byPat: [],
  carById: [],
  cars: [],
  services: [],
  myCommerce: undefined,
  postFav: null,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
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
    case USER_BY_IDFY:
      return {
        ...state,
        userBynumId: payload,
      };
    case USER_BY_ID:
      return {
        ...state,
        detailUsers: payload,
      };
    case CLEAN_DETAILS:
      return {
        ...state,
        detailUsers: payload,
        carById: payload,
      };
    //? %%%%%%%% Vehiculos (car & service) %%%%%%%%%%%%%%%%%%%%%%%%

    case ALL_CARS:
      return {
        ...state,
        allCars: payload,
      };
    case CAR_PAT:
      return {
        ...state,
        byPat: payload,
      };
    case CAR_BY_ID:
      return {
        ...state,
        carById: payload,
      };
    //? %%%%%%%% commerce %%%%%%%%%%%%%%%%%%%%%%%%
    case ISMYCOMMERCE:
      return {
        ...state,
        myCommerce: payload,
      };
    //? %%%%%%%% commerce end %%%%%%%%%%%%%%%%%%%%%%%%
    // %%%%%%%% post/tips/consejos %%%%%%%%%%%%%%%%%%%%%%%%
    case POST_FAVORITES:
      return {
        ...state,
        postFav: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
