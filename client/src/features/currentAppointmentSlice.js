import { createSlice } from "@reduxjs/toolkit";

export const currentAppointmentSlice = createSlice({
  name: "currentAppointment",
  initialState: {
    appointments: [],
  },
  reducers: {
    addAppointment: (state, { payload }) => {
      state.appointments.push(payload);
    },
    removeAppointment: (state, { payload }) => {
      state.appointments = state.appointments.filter(
        (item) => item.serviceType !== payload
      );
    },
    removeaAllAppointment: (state) => {
      state.appointments = [];
    },
  },
});

export const { addAppointment, removeAppointment, removeaAllAppointment } =
  currentAppointmentSlice.actions;

export default currentAppointmentSlice.reducer;
