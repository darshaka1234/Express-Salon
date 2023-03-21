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

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { StaticTimePicker } from "@mui/x-date-pickers";
import moment from "moment";
import dayjs from "dayjs";
import { CustomButton } from "../../styles/buttons";

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
    duration: 0,
  });

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleClockChange = (event) => {
    const hour = event.$H < 10 ? `0${event.$H}` : event.$H;
    const minute = event.$m < 10 ? `0${event.$m}` : event.$m;
    const time = `${hour}:${minute}`;

    setFormData((prevFormData) => ({
      ...prevFormData,
      time: time,
    }));
    setClockOpen(false);
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
      duration: selectedItem.duration,
    }));
  };

  const bookedAppointments = Object.values(allUsers)
    .flatMap((user) => user.appointments)
    .flat();

  const isTimeSlotBooked = () => {
    const start = new Date(
      `${moment(formData.date).utc().format("YYYY-MM-DD")}T${formData.time}`
    );
    start.setDate(start.getDate() + 1);
    const end = new Date(start.getTime() + formData.duration * 60 * 1000);

    return bookedAppointments.some((appointment) => {
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
        (start < appointmentEnd && end > appointmentEnd) ||
        (start >= appointmentStart && end <= appointmentEnd)
      );
    });
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

  const minTime = dayjs().hour(8);
  const maxTime = dayjs().hour(18);

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
              onChange={handleDateChange}
              name="date"
              onAccept={handleCalendarChange}
            />
          </LocalizationProvider>
          <Stack direction="column">
            <TextField
              label="HH : MM"
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
                  minutesStep={5}
                  minTime={minTime}
                  maxTime={maxTime}
                  value={selectedTime}
                  onChange={handleTimeChange}
                  inputFormat="hh:mm a"
                  onAccept={handleClockChange}
                  displayStaticWrapperAs={"desktop"}
                  onClose={() => setClockOpen(false)}
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
