// productReducer.js
import * as actionTypes from './actionType';

const initialState = {
     products: [],
     loading: false,
     error: null,
};

const productReducer = (state = initialState, action) => {
     switch (action.type) {
          case actionTypes.FETCH_PRODUCTS_SUCCESS:
               return {
                    ...state,
                    products: action.payload,
                    loading: false,
                    error: null,
               };
          case actionTypes.FETCH_PRODUCTS_FAILURE:
          case actionTypes.ADD_PRODUCT_FAILURE:
          case actionTypes.DELETE_PRODUCT_FAILURE:
          case actionTypes.UPDATE_PRODUCT_FAILURE:
               return {
                    ...state,
                    loading: false,
                    error: action.payload,
               };
          case actionTypes.ADD_PRODUCT_SUCCESS:
               return {
                    ...state,
                    products: [...state.products, action.payload],
                    loading: false,
                    error: null,
               };
          case actionTypes.DELETE_PRODUCT_SUCCESS:
               return {
                    ...state,
                    products: state.products.filter((product) => product.id !== action.payload),
                    loading: false,
                    error: null,
               };
          case actionTypes.UPDATE_PRODUCT_SUCCESS:
               return {
                    ...state,
                    products: state.products.map((product) =>
                         product.id === action.payload.id ? action.payload : product
                    ),
                    loading: false,
                    error: null,
               };
          case actionTypes.PRODUCT_LOADING:
               return {
                    ...state,
                    loading: true,
                    error: null,
               };
          case actionTypes.CLEAR_PRODUCT_ERROR:
               return {
                    ...state,
                    error: null,
               };
          default:
               return state;
     }
};

export default productReducer;
