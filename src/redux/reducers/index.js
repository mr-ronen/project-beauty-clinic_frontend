import { combineReducers } from "@reduxjs/toolkit";

import productReducer from "../slices/productSlice";

export default combineReducers({
  product: productReducer,
  // other reducers...
});
