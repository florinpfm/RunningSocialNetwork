import { setAlert } from './alert';
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, } from "./constant";
import axios from "axios";
import setTokenHeaderInfo from '../utils/setTokenHeaderInfo';

export const register = 
  ({name, email, password}) => async (dispatch) => {
    const config ={
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({name, email, password});

    try {
      const response = await axios.post('/api/users', body, config);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data,  //".data" asta vine de la axios
      })
    } catch (err) {
      const errors = err.response.data.errors;
      if(errors) {
        errors.forEach(error => {
          dispatch(setAlert(error.msg, 'danger', 300))
        })
      }
      dispatch({
        type: REGISTER_FAIL,
      })
    }
};

export const loadUser = () => async (dispatch) => {
  if(localStorage.token) {
    setTokenHeaderInfo(localStorage.token);
  }

  try {
    const response = await axios.get('/api/auth');
    dispatch({
      type: USER_LOADED,
      payload: response.data
    })
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    })
  }
};

export const login = ({ email, password }) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const response = await axios.post('/api/auth', body, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) => {
        dispatch(setAlert(error.msg, 'danger', 3000));
      });
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  })
};


