import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/users", {
      headers: {
        "Cache-Control": "no-cache",
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

const allUsersSlice = createSlice({
  name: "allUsers",
  initialState: {
    users: [],
    status: true,
    error: null,
  },
  reducers: {
    addUser: (state, { payload }) => {
      state.users.push(payload);
    },
  },
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.status = "loading";
    },
    [fetchUsers.fulfilled]: (state, { payload }) => {
      state.status = false;
      state.users = payload;
    },
    [fetchUsers.rejected]: (state, { payload }) => {
      state.status = false;
      state.error = payload;
    },
  },
});

export const { addUser } = allUsersSlice.actions;
export default allUsersSlice.reducer;
