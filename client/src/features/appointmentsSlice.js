import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAppointments = createAsyncThunk(
  "appointments/fetchAppointments",
  async () => {
    const response = await axios.get("/api/appointments");
    return response.data;
  }
);

export const addNewAppointment = createAsyncThunk(
  "users/addNewappointment",
  async (appointment) => {
    const response = await axios.post("/api/appointments", appointment);
    return response.data;
  }
);

const appointmentsSlice = createSlice({
  name: "appointments",
  initialState: {
    appointments: [],
    status: "idle",
    error: null,
  },
  reducers: {
    addBooking: (state, action) => {
      state.appointments.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAppointments.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchAppointments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.appointments = action.payload;
      })
      .addCase(fetchAppointments.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewAppointment.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addNewAppointment.fulfilled, (state, action) => {
        state.status = "succeeded";
        appointmentsSlice.caseReducers.addBooking(state, action);
      })
      .addCase(addNewAppointment.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});
export const { addBooking } = appointmentsSlice.actions;

export default appointmentsSlice.reducer;
