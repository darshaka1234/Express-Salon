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
import { productData } from "../../data/rowData";
import { addNewAppointment } from "../../features/appointmentsSlice";
import CustomeButton from "../CustomButton";

const NewForm = () => {
  const bookedAppointments = useSelector(
    (state) => state.appointments?.appointments
  );

  const bookedTimeSlots = bookedAppointments?.map(
    (item) => item.date + " " + item.time
  );
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    serviceType: "",
    date: "",
    time: "",
  });

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
      dispatch(addNewAppointment(formData));
      // console.log(
      //   `Submitted data: ${formData.firstName}, ${formData.lastName}, ${formData.email},
      //  ${formData.serviceType}, ${formData.date}, ${formData.time}`
      // );
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ padding: "2rem" }}>
      <Stack spacing={3}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <TextField
            name="firstName"
            label="Frist Name"
            variant="outlined"
            value={formData.firstName}
            onChange={handleInputChange}
            fullWidth
          />
          <TextField
            name="lastName"
            label="Last Name"
            variant="outlined"
            value={formData.lastName}
            onChange={handleInputChange}
            fullWidth
          />
        </Stack>
        <TextField
          name="email"
          label="Email"
          variant="outlined"
          value={formData.email}
          onChange={handleInputChange}
        />
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="service-type-label">Service Type</InputLabel>
          <Select
            labelId="service-type-label"
            name="serviceType"
            value={formData.serviceType}
            onChange={handleInputChange}
          >
            {productData.map((item) => (
              <MenuItem key={item.id} value={item.name}>
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
        <CustomeButton
          text={"Proceed"}
          variant={"contained"}
          handleClick={handleSubmit}
        />
      </Stack>
    </form>
  );
};

export default NewForm;
