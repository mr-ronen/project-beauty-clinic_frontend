import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import productService from "../../services/productService";

// Define the initial state for the products slice
const initialState = {
  products: [],
  isLoading: false,
  error: null,
};

// Export the fetchProducts async thunk

// Create the async thunk for fetching products
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (_, { rejectWithValue }) => {
    try {
      const data = await productService.getProducts();
      return data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Create the slice
const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    // Reducers for other synchronous actions if necessary
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

// Export the reducer
export default productSlice.reducer;


