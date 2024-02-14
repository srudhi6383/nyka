// authReducer.js
import * as actionTypes from './actionType';

const initialState = {
     token: null,
     isAuthenticated: false,
     loading: false, // To handle loading state during asynchronous operations
     error: null, // To store authentication error messages
     registrationSuccess: false,
};

const authReducer = (state = initialState, action) => {
     switch (action.type) {
          case actionTypes.LOGIN_SUCCESS:
               return {
                    ...state,
                    token: action.payload,
                    isAuthenticated: true,
                    loading: false,
                    error: null,
               };
          case actionTypes.LOGIN_FAILURE:
               return {
                    ...state,
                    token: null,
                    isAuthenticated: false,
                    loading: false,
                    error: action.payload,
               };
          case actionTypes.LOGOUT:
               return {
                    ...state,
                    token: null,
                    isAuthenticated: false,
                    loading: false,
                    error: null,
               };
          case actionTypes.REGISTER_SUCCESS:
               return {
                    ...state,
                    registrationSuccess: true,
                    loading: false,
                    error: null,
               };

          case actionTypes.REGISTER_FAILURE:
               return {
                    ...state,
                    registrationSuccess: false,
                    loading: false,
                    error: action.payload,
               };

          case actionTypes.AUTH_LOADING:
               return {
                    ...state,
                    loading: true,
                    error: null,
               };
          case actionTypes.CLEAR_AUTH_ERROR:
               return {
                    ...state,
                    error: null,
               };
          default:
               return state;
     }
};

export default authReducer;
