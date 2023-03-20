import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAppointment } from "../../features/currentAppointmentSlice";
import { makeClose, makeOpen } from "../../features/selectSlice";
import { CustomButton } from "../navbar/NavBar";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { StaticTimePicker } from "@mui/x-date-pickers";
const NewForm = () => {
  const allUsers = useSelector((state) => state.allUsers?.users);
  const services = useSelector((state) => state.allServices?.services);
  const open = useSelector((state) => state.select?.value);
  const dispatch = useDispatch();

  const [clockOpen, setClockOpen] = useState(false);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [formData, setFormData] = useState({
    serviceType: "",
    date: "",
    time: "",
    price: 0,
  });

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleClockChange = (event) => {
    const time = `${event.$H}:${event.$m}:00`;
    setFormData((prevFormData) => ({
      ...prevFormData,
      time: time,
    }));
  };

  const handleCalendarChange = (event) => {
    const date = `${event.$y}-${event.$M + 1}-${event.$D}`;
    setFormData((prevFormData) => ({
      ...prevFormData,
      date: date,
    }));
  };

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

  const bookedAppointments = Object.values(allUsers)
    .flatMap((user) => user.appointments)
    .flat();
  const bookedTimeSlots = bookedAppointments?.map(
    (item) => item.date + " " + item.time
  );

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
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              value={selectedDate}
              onViewChange={handleDateChange}
              name="date"
              onAccept={handleCalendarChange}
            />
          </LocalizationProvider>
          <Stack direction="column">
            <TextField
              name="time"
              value={formData.time}
              fullWidth
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setClockOpen(true)}>
                      <AccessTimeIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            {clockOpen && (
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticTimePicker
                  ampmInClock
                  label="Select Time"
                  value={selectedTime}
                  onChange={handleTimeChange}
                  inputFormat="hh:mm a"
                  onAccept={handleClockChange}
                />
              </LocalizationProvider>
            )}
          </Stack>
        </Stack>
        <CustomButton variant="outlined" onClick={handleSubmit}>
          Add service
        </CustomButton>
      </Stack>
    </form>
  );
};

export default NewForm;
