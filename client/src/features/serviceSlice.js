import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchServices = createAsyncThunk(
  "users/fetchServices",
  async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/services", {
        headers: {
          "Cache-Control": "no-cache",
        },
      });
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const serviceSlice = createSlice({
  name: "allServices",
  initialState: {
    services: [],
    loading: true,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchServices.pending]: (state) => {
      state.loading = true;
    },
    [fetchServices.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.services = payload;
    },
    [fetchServices.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export default serviceSlice.reducer;
