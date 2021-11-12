import { REGISTER_SUCCESS, REGISTER_FAIL, AUTH_ERROR, USER_LOADED } from "../actions/constant";

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: true,
  token: '',
};

export default function (state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case REGISTER_SUCCESS:
      // put the token in Local Storage + asta e un Remember ME de fapt
      localStorage.setItem('token', payload.token);
      return {...state, ...payload, isAuthenticated: true, loading: false};
    case REGISTER_FAIL:
    case AUTH_ERROR:
      // delete the token in Local Storage
      localStorage.removeItem('token');
      return {...state, token: null, isAuthenticated: false, loading: false};
    case USER_LOADED:
      return { ...state, user: payload, isAuthenticated: true, loading: false};
    default:
      return state;
  }
}