import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAppointment } from "../../features/currentAppointmentSlice";
import { makeClose, makeOpen } from "../../features/selectSlice";
import { CustomButton } from "../navbar/NavBar";
import moment from "moment";

const NewForm = () => {
  const allUsers = useSelector((state) => state.allUsers?.users);
  const services = useSelector((state) => state.allServices?.services);
  const open = useSelector((state) => state.select?.value);

  const [formData, setFormData] = useState({
    serviceType: "",
    date: "",
    time: "",
    price: 0,
    duration: 0,
  });

  const bookedAppointments = Object.values(allUsers)
    .flatMap((user) => user.appointments)
    .flat();

  const isTimeSlotBooked = () => {
    const start = new Date(`${formData.date}T${formData.time}:00`);
    const end = new Date(start.getTime() + formData.duration * 60 * 1000);

    if (bookedAppointments === undefined) return false;
    return bookedAppointments?.some((appointment) => {
      const appointmentStart = new Date(
        `${moment(appointment.date).utc().format("YYYY-MM-DD")}T${
          appointment.time
        }:00`
      );
      const appointmentEnd = new Date(
        appointmentStart.getTime() + appointment.duration * 60 * 1000
      );
      return (
        (start <= appointmentStart && end > appointmentStart) ||
        (start < appointmentEnd && end > appointmentEnd)
      );
    });
  };
  const dispatch = useDispatch();

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    dispatch(makeClose());

    const selectedItem = services.find((item) => item.name === value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: selectedItem.name,
      price: selectedItem.price,
      duration: selectedItem.duration,
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isTimeSlotBooked()) {
      alert("This time slot is already booked.");
      return;
    } else {
      dispatch(addAppointment(formData));
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "2rem" }}>
      <Stack spacing={3}>
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="service-type-label">Service Type</InputLabel>
          <Select
            labelId="service-type-label"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleSelectChange}
            onClose={() => dispatch(makeClose())}
            onOpen={() => dispatch(makeOpen())}
            open={open}
          >
            {services?.map((item) => (
              <MenuItem key={item._id} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <TextField
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            type="time"
            name="time"
            value={formData.time}
            onChange={handleInputChange}
            fullWidth
          />
        </Stack>
        <CustomButton variant="outlined" onClick={handleSubmit}>
          Add service
        </CustomButton>
      </Stack>
    </form>
  );
};

export default NewForm;
