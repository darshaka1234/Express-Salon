import { createSlice } from "@reduxjs/toolkit";

export const numberSlice = createSlice({
  name: "number",
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = numberSlice.actions;

export default numberSlice.reducer;
