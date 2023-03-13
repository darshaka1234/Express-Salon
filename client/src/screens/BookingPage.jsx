import { Box, Grid } from "@mui/material";
import React from "react";
import BookingForm from "../components/form/BookingForm";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import { ServiceImage } from "./ServicePage";

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
        <Grid item xs={12} md={6} sx={{ pr: "2rem" }}>
          <ServiceImage src="./assets/fil.jpg" alt="fill_image" />
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
};

export default BookingPage;
