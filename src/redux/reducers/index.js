import { combineReducers } from "@reduxjs/toolkit";
import productReducer from "../slices/productSlice";
import cartReducer from '../slices/cartSlice';


export default combineReducers({
  product: productReducer,
  cart: cartReducer,

  // other reducers...
});
