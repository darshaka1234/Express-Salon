import {
  Box,
  Stack,
  Table,
  TableCell,
  TableRow,
  Typography,
} from "@mui/material";
// import React, { useEffect, useState } from "react";
import NavBar from "../components/navbar/NavBar";
import SectionDivider from "../components/SectionDivider";
import { user } from "../data/rowData";

const AppointmentPage = ({ id }) => {
  //   const [user, setUser] = useState({});
  //   useEffect(async () => {
  //     const { data } = await axios.get(`http://localhost:5000/users/${id}`);
  //     setUser(data);
  //   }, []);
  const { fristName, lastName, email, telephone, appointments } = user;
  return (
    <Box>
      <NavBar />
      <SectionDivider title={"Personal Details"} />
      <Table sx={{ m: "0 2rem" }}>
        <TableRow>
          <TableCell>
            <Typography>Name</Typography>
          </TableCell>
          <TableCell>
            <Typography>{`: ${fristName} ${lastName}`}</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography>Email</Typography>
          </TableCell>
          <TableCell>
            <Typography>{`: ${email}`}</Typography>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell>
            <Typography>Tel. No.</Typography>
          </TableCell>
          <TableCell>
            <Typography>{`: ${telephone}`}</Typography>
          </TableCell>
        </TableRow>
      </Table>
      <SectionDivider title={"Appointments"} />
      <Stack
        sx={{ m: "0 2rem" }}
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
      >
        {appointments.map((item) => (
          <Box>
            <Typography variant="h6">{`Appointment ${item.appointmentId}`}</Typography>
            <Typography>{item.serviceType}</Typography>
            <Typography>{`${item.date} ${item.time}`}</Typography>
            <Typography>{item.price}</Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default AppointmentPage;
