import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const mobileSlice = createSlice({
  name: "mobile",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toggle } = mobileSlice.actions;

export default mobileSlice.reducer;
