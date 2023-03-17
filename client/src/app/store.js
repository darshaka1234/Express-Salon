import { configureStore } from "@reduxjs/toolkit";
import allUsersSlice from "../features/allUsersSlice";
import mobileReducer from "../features/mobileSlice";
import userSlice from "../features/userSlice";
import selectReducer from "../features/selectSlice";
import serviceReducer from "../features/serviceSlice";
import currentAppointmentReducer from "../features/currentAppointmentSlice";

export const store = configureStore({
  reducer: {
    mobile: mobileReducer,
    allUsers: allUsersSlice,
    user: userSlice,
    select: selectReducer,
    allServices: serviceReducer,
    currentAppointment: currentAppointmentReducer,
  },
});
