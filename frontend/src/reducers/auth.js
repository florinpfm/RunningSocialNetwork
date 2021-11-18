import { 
  REGISTER_SUCCESS, 
  REGISTER_FAIL, 
  USER_LOADED,
  AUTH_ERROR, 
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  ACCOUNT_DELETED,
} from "../actions/actionsConstants";

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: true,
  token: '',
};

console.log('reducer auth.js--> the initialState before logging in is: ');
console.log(initialState);

export default function auth(state = initialState, action) {
  const {type, payload} = action;

  switch (type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      // put the token in Local Storage + asta e un Remember ME de fapt
      console.log('reducer auth.js--> we have LOGIN_SUCCESS and the token is in LS, the token is: ');
      console.log(payload.token);
      localStorage.setItem('token', payload.token);
      return {
        ...state, 
        ...payload, 
        isAuthenticated: true, 
        loading: false
      };

    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
    case ACCOUNT_DELETED:
      // delete the token in Local Storage
      console.log('reducer auth.js--> we have  LOGIN_FAIL and the token is removed from LocalStorage ');
      localStorage.removeItem('token');
      return {
        ...state, 
        token: null, 
        isAuthenticated: false, 
        loading: false
      };

    case USER_LOADED:
      console.log('reducer auth.js--> we have USER_LOADED and in user: se pune ce era in payload (avatar, date, email, name, _id) ');
      return { 
        ...state, 
        user: payload, 
        isAuthenticated: true, 
        loading: false
      };
      
    default:
      console.log('reducer auth.js went through the default switch case, and state is: ');
      console.log(state);
      return state;
  }
}