// authActions.js
import * as actionTypes from './actionType';
import axios from 'axios';

// const BASE_URL = 'https://srudhi-p-g-pw15-051.vercel.app/'
const BASE_URL = 'http://localhost:8000'

export const loginSuccess = (token) => {
     return {
          type: actionTypes.LOGIN_SUCCESS,
          payload: token,
     };
};

export const loginFailure = () => {
     return {
          type: actionTypes.LOGIN_FAILURE,
     };
};

export const logout = () => {
     return {
          type: actionTypes.LOGOUT,
     };
};

export const registerSuccess = () => {
     return {
          type: actionTypes.REGISTER_SUCCESS,
     };
};

export const registerFailure = (error) => {
     return {
          type: actionTypes.REGISTER_FAILURE,
          payload: error,
     };
};
export const authLoading = () => {
     return {
          type: actionTypes.AUTH_LOADING
     };
};

export const registerUser = (name, email, password, avatar) => async (dispatch) => {

     try {
          // Assuming BASE_URL is defined somewhere in your constants 
          const response = await axios.post(`${BASE_URL}/register`, {
               name,
               email,
               password,
               avatar,
          });
          console.log(response)
          // Dispatch success action on successful registration
          dispatch(registerSuccess());
     } catch (error) {
          // Dispatch failure action on registration failure
          dispatch(registerFailure(error.response.data.message || 'Registration failed.'));
     }
};

export const loginUser = (email, password) => async (dispatch) => {

     try {
          dispatch(authLoading()); // Set loading to true
          // Assuming BASE_URL is defined somewhere in your constants
          const response = await axios.post(`${BASE_URL}/login`, {
               email,
               password,
          });

          // Assuming the server sends back a token on successful login
          const token = response.data.token;
          console.log(token)
          // Dispatch success action on successful login
          dispatch(loginSuccess(token));
     } catch (error) {
          // Dispatch failure action on login failure
          dispatch(loginFailure(error.response.data.message || 'Login failed.'));
     }
};
