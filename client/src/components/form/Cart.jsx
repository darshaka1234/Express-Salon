import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PaymentModal from "../../screens/PaymentModal";
import SectionDivider from "../SectionDivider";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { removeAppointment } from "../../features/currentAppointmentSlice";
import { makeOpen } from "../../features/selectSlice";
import { Title } from "../../styles/typos";

const Cart = () => {
  const appointments = useSelector(
    (state) => state.currentAppointment.appointments
  );

  const dispatch = useDispatch();
  const amount = appointments?.reduce(
    (accumulator, appointment) => accumulator + appointment.price,
    0
  );

  const selectedService = (item) => (
    <Stack
      direction={"row"}
      sx={{
        m: "2rem 2rem -1rem 2rem",
        p: "0.5rem 0 0.5rem 1rem",
        backgroundColor: "white",
        borderRadius: "5px",
        justifyContent: "space-between",
        alignItems: "start",
      }}
      key={item.id}
    >
      <Box>
        <Typography variant="h6">{item.serviceType}</Typography>
        <Typography>{`${item.date} ${item.time}`}</Typography>
        <Typography>{item.price}</Typography>
      </Box>
      <IconButton onClick={() => dispatch(removeAppointment(item.serviceType))}>
        <CancelIcon sx={{ color: "black" }} />
      </IconButton>
    </Stack>
  );

  return (
    <Box
      sx={{
        backgroundColor: "#B99A5F",
        m: "2rem 0 2rem 2rem",
        borderRadius: "5px",
      }}
    >
      <SectionDivider title={"Selected Services"} />
      {appointments?.map((item) => selectedService(item))}
      <Box p="1rem 2rem">
        <Box
          sx={{
            display: "flex",
            justifyContent: "end",
            mb: "2rem",
          }}
        >
          <IconButton onClick={() => dispatch(makeOpen())}>
            <AddCircleIcon sx={{ color: "black" }} />
          </IconButton>
        </Box>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{ justifyContent: "space-between" }}
        >
          <Title>{`Total: $${amount}`}</Title>
          <PaymentModal amount={amount} />
        </Stack>
      </Box>
    </Box>
  );
};

export default Cart;
