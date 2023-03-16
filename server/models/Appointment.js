import mongoose, { model } from "mongoose";
const { Schema } = mongoose;

const appointmentSchema = new Schema(
  {
    serviceType: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

export default model("Appointment", appointmentSchema);
