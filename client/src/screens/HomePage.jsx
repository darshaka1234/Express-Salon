import { Grid, styled, Typography } from "@mui/material";
import React from "react";
import Carousel from "../components/carousel/Carousel";
import CustomeButton from "../components/CustomButton";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import SectionDivider, { Title } from "../components/SectionDivider";

export const WelcomeContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  marginLeft: "7rem",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
    marginLeft: "2rem",
  },
}));

export const WelcomeDiv = styled("div")(({ theme }) => ({
  width: "50%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const WelcomeImage = styled("img")(({ theme }) => ({
  width: "90%",
  height: "auto",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const HomePage = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <NavBar />
      </Grid>
      <Grid item xs={12}>
        <WelcomeContainer>
          <WelcomeDiv style={{ alignSelf: "center" }}>
            <Title sx={{ marginLeft: "0", marginBottom: "1rem" }}>
              Lorem ipsum is placeholder text commonly
            </Title>
            <Typography sx={{ marginBottom: "1rem" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et incididunt ut labore et
            </Typography>
            <CustomeButton variant={"outlined"} text={"Book now"} />
          </WelcomeDiv>
          <WelcomeDiv>
            <WelcomeImage src="./assets/welcome.jpg" alt="welcome_image" />
          </WelcomeDiv>
        </WelcomeContainer>
      </Grid>
      <Grid item xs={12}>
        <SectionDivider title={"Our Services"} />
      </Grid>
      <Grid item xs={12}>
        <Carousel style={{ backgroundColor: "blue" }} />
      </Grid>
      <Grid item xs={12}>
        <SectionDivider title={"About Us"} />
      </Grid>
      <Grid item xs={12} md={6} sx={{ p: "2rem" }}>
        <WelcomeImage src="./assets/about.jpg" alt="welcome_image" />
      </Grid>
      <Grid item xs={12} md={6}></Grid>
      <Grid item xs={12}></Grid>

      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default HomePage;
