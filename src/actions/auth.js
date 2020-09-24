import api from '../utils/api';
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './types';

// Load User
export const loadUser = () => async (dispatch) => {
  console.log('loadUser ---> INSIDE');

  try {
    const res = await api.get('/auth');
    console.log('loadUser ---> res = ', res);

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.log('XXXXXXXXXXXXXXX loadUser ---> err = ', err);
    console.log('XXXXXXXXXXXXXXX loadUser ---> err.response = ', err.response);

    // http status code
    const code = err.response.status;
    console.log('XXXXXXXXXXXXXXX loadUser ---> err.response.status = ', code);

    // response data
    const response = err.response.data;
    console.log('XXXXXXXXXXXXXXX loadUser ---> err.response.data = ', response);
    const statusText = err.response.statusText;
    console.log(
      'XXXXXXXXXXXXXXX loadUser ---> err.response.statusText = ',
      statusText
    );

    console.log(err.response.data);
    const errors = err.response.data.errors;

    console.log(
      'XXXXXXXXXXXXXXX loadUser ---> err.response.data.errors = ',
      errors
    );

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    } else {
      if (code === 500) {
        dispatch(setAlert(`${statusText} - Please try later`, 'danger'));
      }
    }

    dispatch({
      type: AUTH_ERROR,
    });
  }
};

// Register User
export const register = (formData) => async (dispatch) => {
  try {
    const res = await api.post('/users', formData);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    // const errors = err.response.data.errors;

    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    // }

    console.log('XXXXXXXXXXXXXXX register ---> err = ', err);
    console.log('XXXXXXXXXXXXXXX register ---> err.response = ', err.response);

    // http status code
    const code = err.response.status;
    console.log('XXXXXXXXXXXXXXX register ---> err.response.status = ', code);

    // response data
    const response = err.response.data;
    console.log('XXXXXXXXXXXXXXX register ---> err.response.data = ', response);
    const statusText = err.response.statusText;
    console.log(
      'XXXXXXXXXXXXXXX register ---> err.response.statusText = ',
      statusText
    );

    console.log(err.response.data);
    const errors = err.response.data.errors;

    console.log(
      'XXXXXXXXXXXXXXX register ---> err.response.data.errors = ',
      errors
    );

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    } else {
      if (code === 500) {
        dispatch(setAlert(`${statusText} - Please try later`, 'danger'));
      }
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

// Login User
export const login = (email, password) => async (dispatch) => {
  const body = { email, password };

  try {
    const res = await api.post('/auth', body);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (err) {
    // ***************
    console.log('XXXXXXXXXXXXXXX login ---> err = ', err);
    console.log('XXXXXXXXXXXXXXX login ---> err.response = ', err.response);

    // http status code
    const code = err.response.status;
    console.log('XXXXXXXXXXXXXXX login ---> err.response.status = ', code);

    // response data
    const response = err.response.data;
    console.log('XXXXXXXXXXXXXXX login ---> err.response.data = ', response);
    const statusText = err.response.statusText;
    console.log(
      'XXXXXXXXXXXXXXX login ---> err.response.statusText = ',
      statusText
    );

    // ***************

    console.log(err.response.data);
    const errors = err.response.data.errors;

    console.log(
      'XXXXXXXXXXXXXXX login ---> err.response.data.errors = ',
      errors
    );

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    } else {
      if (code === 500) {
        dispatch(setAlert(`${statusText} - Please try later`, 'danger'));
      }
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout
export const logout = () => ({ type: LOGOUT });
