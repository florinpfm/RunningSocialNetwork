import { setAlert } from './actionsAlert';
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, CLEAR_PROFILE } from "./actionsConstants";
import axios from "axios";
import setTokenHeaderInfo from '../utils/setTokenHeaderInfo';

// for register new user (and if successful also for user loaded ...................................................................TBMH-to be modified here)
export const register = ({name, email, password}) => async (dispatch) => {
    const config ={
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({name, email, password});

    try {
      const response = await axios.post('/api/users', body, config); // here we make a POST to "users from endpoint" with name, email, password and header 'app/json'
      // console.log('001 POST registration response is: ');
      // console.log(response.data.data);
      dispatch({
        type: REGISTER_SUCCESS,
        payload: response.data,  //".data" comes from axios, it is implemented to work like that
      })
    } catch (error) {
      // console.log('001 POST registration failure');

      // const errors = error.response.data.errors;

      // if(errors) {
      //   errors.forEach(error => {
      //     dispatch(setAlert(error.msg, 'danger', 3000))
      //   })
      // }

      dispatch(setAlert(error.msg, 'danger', 3000));

      dispatch({
        type: REGISTER_FAIL,
      })
    }
};

// for user loaded
export const loadUser = () => async (dispatch) => {
  if(localStorage.token) {
    setTokenHeaderInfo(localStorage.token);
  }

  try {
    const response = await axios.get('/api/auth');   // here we make a GET to "auth from endpoint" with header 'token'
    console.log('actionsAuth.js@loadUser function--> response from db when loadUser @ actionsAuth is: USER_LOADED');
    console.log(response);
    dispatch({
      type: USER_LOADED,
      payload: response.data  //".data" has for the user: avatar, date, email, name, _id
    })
  } catch (error) {
    console.log('actionsAuth.js@login function--> is: error AUTH_ERROR');
    dispatch({
      type: AUTH_ERROR,
    })
  }
};

// for login an existing user
export const login = ({ email, password }) => async (dispatch) => {  
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const response = await axios.post('/api/auth', body, config);   // here we make a POST to "auth from endpoint" with email, password and header 'app/json'
    console.log('actionsAuth.js@login function--> response from db when login @ actionsAuth is: LOGIN_SUCCESS, and the token is: ');
    console.log(response.data);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: response.data,   //".data" has for auth: the token
    });
  } catch (error) {
    console.log('actionsAuth.js@login function--> response from db when login @ actionsAuth is: error LOGIN_FAIL');
    // const errors = error.response.data.errors;

    // if (errors) {
    //   errors.forEach((error) => {
    //     dispatch(setAlert(error.msg, 'danger', 3000));
    //   });
    // }

    dispatch(setAlert(error.msg, 'danger', 3000));

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// for logout of an existing and logged in user
export const logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  dispatch({
    type: CLEAR_PROFILE,
  })
};


