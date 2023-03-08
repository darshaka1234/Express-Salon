import { configureStore } from "@reduxjs/toolkit";
import mobileReducer from "../features/mobileSlice";

export const store = configureStore({
  reducer: {
    mobile: mobileReducer,
  },
});
