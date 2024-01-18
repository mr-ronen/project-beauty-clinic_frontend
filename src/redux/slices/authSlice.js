import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import apiClient from "../../services/apiClient";

const initialState = {
  user: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

export const register = createAsyncThunk(
  "auth/register",
  async (
    { username, email, password, fullName, profilePhoto },
    { rejectWithValue }
  ) => {
    try {
      const response = await apiClient.post("/api/Authentication/register", {
        username,
        email,
        password,
        fullName,
        role: "client", // Assuming 'role' is required and defaulting to 'client'
        profilePhoto: profilePhoto || null,
      });
      // Adjust this according to the actual response from your API
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await apiClient.post("/api/Authentication/login", {
        email,
        password,
      });
      // Adjust this according to the actual response from your API
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.isLoggedIn = false;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        localStorage.setItem("token", action.payload.token); // Assuming the token is part of the response
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to register.";
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.user = action.payload.user;
        localStorage.setItem("token", action.payload.token); // Assuming the token is part of the response
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || "Failed to login.";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
