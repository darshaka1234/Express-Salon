import { createSlice } from "@reduxjs/toolkit";

export const selectSlice = createSlice({
  name: "select",
  initialState: {
    value: true,
  },
  reducers: {
    makeOpen: (state) => {
      state.value = true;
    },
    makeClose: (state) => {
      state.value = false;
    },
  },
});

export const { makeOpen, makeClose } = selectSlice.actions;

export default selectSlice.reducer;
