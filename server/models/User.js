import mongoose, { model } from "mongoose";
const { Schema } = mongoose;
import Appointment from "./Appointment.js";

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    telephone: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    appointments: {
      type: [Appointment.schema],
    },
  },
  { timestamps: true }
);

export default model("User", userSchema);
