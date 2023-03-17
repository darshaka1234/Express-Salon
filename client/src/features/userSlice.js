import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const baseUrl = "http://localhost:5000/api/users";

export const userLogin = createAsyncThunk("users/userLogin", async (user) => {
  try {
    const response = await axios.post(`${baseUrl}/login`, user);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const userRegister = createAsyncThunk(
  "users/userRegister",
  async (user) => {
    try {
      const response = await axios.post(`${baseUrl}/register`, user);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const userBooking = createAsyncThunk(
  "users/userBooking",
  async (userId, appointment) => {
    try {
      const response = await axios.put(`${baseUrl}/:${userId}`, appointment);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    status: true,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [userLogin.pending]: (state) => {
      state.status = "loading";
    },
    [userLogin.fulfilled]: (state, { payload }) => {
      state.status = false;
      state.user = payload;
    },
    [userRegister.rejected]: (state, { payload }) => {
      state.status = false;
      state.error = payload;
    },
    [userRegister.pending]: (state) => {
      state.status = "loading";
    },
    [userRegister.fulfilled]: (state, { payload }) => {
      state.status = false;
      state.user = payload;
    },
    [userRegister.rejected]: (state, { payload }) => {
      state.status = false;
      state.error = payload;
    },
    [userBooking.pending]: (state) => {
      state.status = "loading";
    },
    [userBooking.fulfilled]: (state, { payload }) => {
      state.status = false;
      state.user = payload;
    },
    [userBooking.rejected]: (state, { payload }) => {
      state.status = false;
      state.error = payload;
    },
  },
});

export default userSlice.reducer;
