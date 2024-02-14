import { legacy_createStore, applyMiddleware, combineReducers } from 'redux';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import authReducer from './Auth/authReducer'
import productReducer from './Products/productReducer'

const middleware = [thunk];

const rootReducer = combineReducers({ auth: authReducer, product: productReducer })

// Create the Redux store with middleware and DevTools extension
const store = legacy_createStore(
     rootReducer,
     composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
