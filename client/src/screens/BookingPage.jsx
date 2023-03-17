import { Box, Grid } from "@mui/material";
import React, { useEffect } from "react";
import BookingForm from "../components/form/BookingForm";
import NavBar from "../components/navbar/NavBar";
import Footer from "../components/footer/Footer";
import Cart from "../components/form/Cart";
import Carousel from "../components/carousel/Carousel";

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
          <Cart />
        </Grid>
      </Grid>
      <Carousel />
      <Footer />
    </Box>
  );
};

export default BookingPage;
