import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  // other states like loading, error...
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    // other reducers...
  },
});

export const { setProducts } = productSlice.actions;
export default productSlice.reducer;