import { combineReducers } from '@reduxjs/toolkit';
import cartReducer from '../slices/cartSlice';
// Import other slice reducers...

export default combineReducers({
  cart: cartReducer,
  // other reducers...
});