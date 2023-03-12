import React, { useState } from "react";
import {
  Stack,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import {
  DatePicker,
  LocalizationProvider,
  StaticTimePicker,
  TimeClock,
  //   TimePicker,
} from "@mui/x-date-pickers";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const serviceOptions = [
  { value: "haircut", label: "Haircut" },
  { value: "coloring", label: "Coloring" },
  { value: "styling", label: "Styling" },
];

const BookingForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [serviceType, setServiceType] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Submitted data: ${firstName}, ${lastName}, ${email}, ${serviceType}, ${time}`
    );
  };
  const CustomLeftArrowIcon = () => <ArrowLeftIcon style={{ color: "red" }} />;
  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={3}>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <TextField
            label="First Name"
            variant="outlined"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
          />
          <TextField
            label="Last Name"
            variant="outlined"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            fullWidth
          />
        </Stack>
        <TextField
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
        />
        <FormControl variant="outlined" fullWidth>
          <InputLabel id="service-type-label">Service Type</InputLabel>
          <Select
            labelId="service-type-label"
            id="service-type-select"
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            label="Service Type"
          >
            {serviceOptions.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Date"
              value={date}
              onChange={(newValue) => setDate(newValue)}
            />
          </LocalizationProvider>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {/* <TimeClock
              label="Time"
              value={time}
              onChange={(newValue) => setTime(newValue)}
              views={["hours", "minutes"]}
              ampmInClock
              Slots={{ LeftArrowIcon: CustomLeftArrowIcon }}
            /> */}
            <StaticTimePicker
              defaultValue={dayjs("2022-04-17T15:30")}
              orientation="portrait"
              ampmInClock
            />
          </LocalizationProvider>
        </Stack>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default BookingForm;
