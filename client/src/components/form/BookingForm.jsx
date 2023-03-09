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
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DateTimePicker from "@mui/lab/DateTimePicker";

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
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Submitted data: ${firstName}, ${lastName}, ${email}, ${serviceType}, ${selectedDate}`
    );
  };

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
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DateTimePicker
            label="Select Date and Time"
            inputFormat="MM/dd/yyyy hh:mm a"
            value={selectedDate}
            onChange={(newValue) => {
              setSelectedDate(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default BookingForm;
