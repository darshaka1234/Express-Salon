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

const NewForm = () => {
  const allUsers = useSelector((state) => state.allUsers?.users);
  const services = useSelector((state) => state.allServices?.services);
  const open = useSelector((state) => state.select?.value);

  const bookedAppointments = Object.values(allUsers)
    .flatMap((user) => user.appointments)
    .flat();
  const bookedTimeSlots = bookedAppointments?.map(
    (item) => item.date + " " + item.time
  );
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    serviceType: "",
    date: "",
    time: "",
    price: 0,
  });

  const handleSelectChange = (event) => {
    const { name, value } = event.target;
    dispatch(makeClose());

    const selectedItem = services.find((item) => item.name === value);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: selectedItem.name,
      price: selectedItem.price,
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
    const selectedTimeSlot = formData.date + " " + formData.time;
    if (bookedTimeSlots.includes(selectedTimeSlot)) {
      alert("This time slot is already booked. Please select another one.");
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
