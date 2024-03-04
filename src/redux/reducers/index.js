import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "../slices/productSlice";
import cartReducer from '../slices/cartSlice';
import authReducer from '../slices/authSlice';

export default combineReducers({
  product: productReducer,
  cart: cartReducer,
  auth: authReducer,

  
});
