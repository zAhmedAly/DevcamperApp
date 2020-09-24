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

    if (!err.response) {
      console.log('XXXXXXXXXXXXXXX loadUser ---> !err.response = ', err);

      dispatch(
        setAlert('Network Error not able to connect to backend', 'danger')
      );
    } else {
      // http status code
      const code = err.response.status;
      // response data
      const response = err.response.data;
    }
    // const errors = err.response.data.errors;

    // if (errors) {
    //   errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    // }

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
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
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
    console.log(err.response.data);
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

// Logout
export const logout = () => ({ type: LOGOUT });
