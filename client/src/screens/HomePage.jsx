import { Grid, styled, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "../components/carousel/Carousel";
import Footer from "../components/footer/Footer";
import NavBar, { CustomButton } from "../components/navbar/NavBar";
import SectionDivider, { Title } from "../components/SectionDivider";
import { textData, textData2 } from "../data/rowData";

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
  width: "100%",
  height: "auto",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const Paragraph = styled(Typography)({
  fontFamily: "Poppins",
  marginBottom: "2rem",
});

export const Round = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "10rem",
  height: "10rem",
  borderRadius: "100%",
  backgroundColor: "#B99A5F",
  justifyContent: "center",
  alignItems: "center",
});

const HomePage = () => {
  const navigate = useNavigate();
  const roundData = [
    { number: "25+", service: "Years" },
    { number: "1K+", service: "Users" },
    { number: "1M+", service: "Likes" },
    { number: "100+", service: "Styles" },
  ];
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
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et incididunt ut labore et
            </Paragraph>
            <CustomButton
              variant={"outlined"}
              onClick={() => navigate("/booking")}
            >
              Book now
            </CustomButton>
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
      <Grid item xs={12} md={6} sx={{ p: "0 2rem" }}>
        <WelcomeImage src="./assets/about.jpg" alt="welcome_image" />
      </Grid>
      <Grid item xs={12} md={6} sx={{ p: "0 2rem" }}>
        <Paragraph>{textData}</Paragraph>
        <Paragraph>{textData2}</Paragraph>
        <Typography variant="h6">
          Opening Hours - Every Day 8.00 AM - 6.00 PM
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Grid container align="center" m={"5rem 0"}>
          {roundData.map((round) => (
            <Grid item xs={12} sm={6} md={3} key={round.service}>
              <Round>
                <Title sx={{ fontSize: "3rem" }}>{round.number}</Title>
                <Title sx={{ margin: 0 }}>{round.service}</Title>
              </Round>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default HomePage;
