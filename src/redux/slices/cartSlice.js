import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async thunk for fetching cart items
export const fetchCartItems = createAsyncThunk('cart/fetchCartItems', async (userId, { rejectWithValue }) => {
  try {
    const response = await axios.get(`/api/cart/${userId}`);
    return response.data;
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

// Async thunk for adding an item to the cart
export const addItemToCart = createAsyncThunk('cart/addItemToCart', async ({ userId, productId, quantity }, { rejectWithValue }) => {
  try {
    const response = await axios.post(`/api/cart/add`, { userId, productId, quantity });
    return response.data; // Assuming the backend returns the updated cart items
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

// Async thunk for removing an item from the cart
export const removeItemFromCart = createAsyncThunk('cart/removeItemFromCart', async (cartItemId, { rejectWithValue }) => {
  try {
    const response = await axios.delete(`/api/cart/remove/${cartItemId}`);
    return response.data; // Assuming the backend returns the updated cart items
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

// Async thunk for updating the quantity of a cart item
export const updateCartItemQuantity = createAsyncThunk('cart/updateCartItemQuantity', async ({ cartItemId, quantity }, { rejectWithValue }) => {
  try {
    const response = await axios.put(`/api/cart/update/${cartItemId}`, { quantity });
    return response.data; // Assuming the backend returns the updated cart items
  } catch (err) {
    return rejectWithValue(err.response.data);
  }
});

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    // Add synchronous reducers here if needed
  },
  extraReducers(builder) {
    builder
      // Handle fetchCartItems
      .addCase(fetchCartItems.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      })
      // Handle addItemToCart
      .addCase(addItemToCart.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(addItemToCart.rejected, (state, action) => {
        state.error = action.payload;
      })
      // Handle removeItemFromCart
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(removeItemFromCart.rejected, (state, action) => {
        state.error = action.payload;
      })
      // Handle updateCartItemQuantity
      .addCase(updateCartItemQuantity.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(updateCartItemQuantity.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

export default cartSlice.reducer;