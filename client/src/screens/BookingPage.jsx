import { Box, Grid } from "@mui/material";
import React from "react";
import BookingForm from "../components/form/BookingForm";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";

const BookingPage = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <NavBar />
        </Grid>
        <Grid item xs={12} md={6}>
          <BookingForm />
        </Grid>
        <Grid item xs={12} md={6}>
          <img src="./assets/fil.jpg" alt="" />
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default BookingPage;
