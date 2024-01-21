import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import myService from '../../services/myService'; // service for API calls

export const fetchAsyncData = createAsyncThunk(
  'myAsync/fetchData',
  async (arg, { rejectWithValue }) => {
    try {
      const response = await myService.getData(arg);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const myAsyncSlice = createSlice({
  name: 'myAsync',
  initialState: { data: [], loading: false, error: null },
  extraReducers: {
    [fetchAsyncData.pending]: (state) => {
      state.loading = true;
    },
    [fetchAsyncData.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload;
    },
    [fetchAsyncData.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default myAsyncSlice.reducer;