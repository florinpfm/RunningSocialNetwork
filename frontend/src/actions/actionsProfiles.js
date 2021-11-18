import axios from 'axios';
import { setAlert } from './actionsAlert';
import { GET_PROFILE, GET_ALL_PROFILES, PROFILE_ERROR, CLEAR_PROFILE, ACCOUNT_DELETED } from './actionsConstants';

// for profile - get the current user profile
export const getCurrentUserProfile = () => async (dispatch) => {
  try {
    const response = await axios.get('/api/profile/me');  // here we make a GET to "profile/me from endpoint" 
    dispatch({
      type: GET_PROFILE,
      payload: response.data,   //".data" comes from axios, it is implemented to work like that
    });
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// for profile - get all profiles
export const getAllProfiles = () => async (dispatch) => {
  dispatch({
    type: CLEAR_PROFILE,
  });
  try {
    const response = await axios.get('/api/profile');
    dispatch({
      type: GET_ALL_PROFILES,
      payload: response.data,
    })
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// for profile - get each profile by profile id
export const getProfileById = (userId) => async (dispatch) => {
  try {
    const response = await axios.get('/api/profile/user' + userId);
    dispatch({
      type: GET_PROFILE,
      payload: response.data,
    })
  } catch (error) {
    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// for profile - create/update profile
export const createProfile = (formData, history, edit = false) => async (dispatch) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const response = await axios.post('./api/profile', formData, config);

    dispatch({
      type: GET_PROFILE,
      payload: response.data,
    });

    dispatch(
      setAlert(edit ? 'Profile Updated' : 'Profile Created')
    );

    if(!edit) {
      history.push('/account');
    }
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) => {
        dispatch(
          setAlert(error.msg, 'danger', 3000)
        );
      })
    }

    dispatch({
      type: PROFILE_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

// for delete account (delete user from database)
export const deleteAccount = () => async (dispatch) => {
  if(window.confirm('Do you want to delete your account?')) {
    try {
      await axios.delete('/api/profile');  // this will delete the "user" and his "profile" from database

      dispatch({
        type: CLEAR_PROFILE,  // why CLEAR_PROFILE is here .....................................................................TBMH = to be modified here
      });
      dispatch({
        type: ACCOUNT_DELETED,
      });

      dispatch(
        setAlert('Your account was deleted.', 'danger')
      );
    } catch (error) {
      
    }
  }
} 
