import { HandlError } from "../components/Auth/HandlerError";
import axios from "axios";
import setAuthHeader from "../components/Auth/axiosUtils";
export const LOGIN_USER = "LOGIN_USER";
export const ISN_AUTH = "ISN_AUTH";
export const ALL_USERS = "ALL_USERS";
export const USER_BY_IDFY = " USER_BY_IDFY";
export const USER_BY_ID = "USER_BY_ID";
export const CLEAN_DETAILS = "CLEAN_DETAILS";
export const ALL_CARS = "ALL_CARS";
export const CAR_PAT = "CAR_PAT";
export const CAR_BY_ID = "CAR_BY_ID";
export const SEARCH_START = "SEARCH_START";
export const SEARCH_END = "SEARCH_END";
export const ISMYCOMMERCE = "ISMYCOMMERCE";

//?%%%%%%%%%%% commerce %%%%%%%%%%%%%%%%%%%%%%%%%%
export const isMyCommerce = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios("/commerce?active=true");
      return dispatch({
        type: ISMYCOMMERCE,
        payload: data[0],
      });
    } catch (error) {
      //si la petición falla enviar un objeto básico
      const dataError = {
        razonsocial: "...",
        fantasia: "...",
        direccion: "...",
        ciudad: "...",
        telefono: "...",
        celular: "",
        email: "",
        instagram: "",
        facebook: "",
        otro: "",
        idProvince: 21,
        Province: {
          descProvince: "...",
        },
      };
      return dispatch({
        type: ISMYCOMMERCE,
        payload: dataError,
      });
    }
  };
};
//?%%%%%%%%%%% commerce end %%%%%%%%%%%%%%%%%%%%%%%%%%

export const loginUser = (payload) => (dispatch) => {
  return dispatch({
    type: LOGIN_USER,
    payload: payload,
  });
};
export const isNotAuth = () => (dispatch) => {
  return dispatch({
    type: ISN_AUTH,
    payload: [],
  });
};
export const getAllUsers = () => {
  return async (dispatch) => {
    try {
      const data = await axios("/user", setAuthHeader());
      return dispatch({
        type: ALL_USERS,
        payload: data.data,
      });
    } catch (error) {
      HandlError(error);
    }
  };
};
export const userBynumId = (numberId) => async (dispatch) => {
  try {
    const data = await axios(`/user?numberId=${numberId}`,setAuthHeader());
    return dispatch({
      type: USER_BY_IDFY,
      payload: data.data,
    });
  } catch (error) {
    HandlError(error);
  }
};
export const getById = (id, token) => async (dispatch) => {
  try {
    const data = await axios(`/user/${id}`,setAuthHeader());
    return dispatch({
      type: USER_BY_ID,
      payload: data.data,
    });
  } catch (error) {
    HandlError(error);
  }
};
export const cleanDetails = () => (dispatch) => {
  return dispatch({
    type: CLEAN_DETAILS,
    payload: [],
  });
};

//?%%%%%%%%%%% cars & services %%%%%%%%%%%%%%%%%%%%%%%%%%

export const getAllCars = () => {
  return async (dispatch) => {
    try {
      const data = await axios("/car", setAuthHeader());
      return dispatch({
        type: ALL_CARS,
        payload: data.data,
      });
    } catch (error) {
      HandlError(error);
    }
  };
};

export const carById = (id) => async (dispatch) => {
  try {
    const data = await axios(`/car/${id}`,setAuthHeader());
    return dispatch({
      type: CAR_BY_ID,
      payload: data.data,
    });
  } catch (error) {
    HandlError(error);
  }
};

export const carByPat = (patent) => async (dispatch) => {
  try {
    const data = await axios(`/car?patent=${patent}`, setAuthHeader());
    return dispatch({
      type: CAR_PAT,
      payload: data.data,
    });
  } catch (error) {
    HandlError(error);
  }
};

//*>>>>>>>>>> Filtros por dni y patente <<<<<<<<<<<<<<<<<<<<<<<<


