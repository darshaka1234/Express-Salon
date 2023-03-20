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
  },
});

export const { addAppointment, removeAppointment } =
  currentAppointmentSlice.actions;

export default currentAppointmentSlice.reducer;
