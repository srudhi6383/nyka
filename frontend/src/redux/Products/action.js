// productActions.js
import axios from 'axios';
import * as actionTypes from './actionType';

// const BASE_URL = 'https://srudhi-p-g-pw15-051.vercel.app/';
const BASE_URL = 'http://localhost:8000'



// Action Creators
export const fetchProductsSuccess = (products) => ({
  type: actionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: products,
});

export const fetchProductsFailure = (error) => ({
  type: actionTypes.FETCH_PRODUCTS_FAILURE,
  payload: error,
});

export const addProductSuccess = (product) => ({
  type: actionTypes.ADD_PRODUCT_SUCCESS,
  payload: product,
});

export const addProductFailure = (error) => ({
  type: actionTypes.ADD_PRODUCT_FAILURE,
  payload: error,
});

export const deleteProductSuccess = (productId) => ({
  type: actionTypes.DELETE_PRODUCT_SUCCESS,
  payload: productId,
});

export const deleteProductFailure = (error) => ({
  type: actionTypes.DELETE_PRODUCT_FAILURE,
  payload: error,
});

export const updateProductSuccess = (product) => ({
  type: actionTypes.UPDATE_PRODUCT_SUCCESS,
  payload: product,
});

export const updateProductFailure = (error) => ({
  type: actionTypes.UPDATE_PRODUCT_FAILURE,
  payload: error,
});

export const productLoading = () => ({
  type: actionTypes.PRODUCT_LOADING,
});

export const clearProductError = () => ({
  type: actionTypes.CLEAR_PRODUCT_ERROR,
});

// Thunk Actions
export const fetchProducts = (page) => async (dispatch) => {
  dispatch(productLoading());
  try {
    const response = await axios.get(`${BASE_URL}/products?page=${page}&limit=10`);
    dispatch(fetchProductsSuccess(response.data));
  } catch (error) {
    dispatch(fetchProductsFailure(error.message || 'Failed to fetch products.'));
  }
};
//
export const addProduct = (productData, token) => async (dispatch) => {
  dispatch(productLoading());
  try {
    console.log('Before Axios Request');
    console.log(productData);
    const res = await axios.post(`${BASE_URL}/products`, productData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log('After Axios Request');
    console.log(res);
    dispatch(addProductSuccess(res.data));
    dispatch(fetchProducts())
  }
  catch (error) {
    console.error('Error in addProduct:', error);
    dispatch(addProductFailure(error.message || 'Failed to add product.'));
  }
};


export const deleteProduct = (id, token) => async (dispatch) => {
  dispatch(productLoading());
  try {
    console.log(id)
    const res = await axios.delete(`${BASE_URL}/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(res);
    dispatch(deleteProductSuccess(id));
    dispatch(fetchProducts())
  } catch (error) {
    dispatch(deleteProductFailure(error.message || 'Failed to delete product.'));
  }
};


export const updateProduct = (id, updatedData, token) => async (dispatch) => {
  dispatch(productLoading());
  try {
    console.log(updatedData)
    const config = {
      headers: {
        "Authorization": `Bearer ${token}`,
      }
    }
    const response = await axios.put(`${BASE_URL}/products/${id}`, updatedData, config);
    console.log(response.data)
    dispatch(updateProductSuccess(response.data));
    dispatch(fetchProducts())
  } catch (error) {
    dispatch(updateProductFailure(error.message || 'Failed to update product.'));
  }
};
