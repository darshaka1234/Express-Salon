import { Box, styled, Typography } from "@mui/material";
import React from "react";
import NavBar from "../components/navbar/NavBar";
import { textData } from "../data/rowData";
import SectionDivider, { Title } from "../components/SectionDivider";
import Footer from "../components/footer/Footer";
import { Paragraph } from "./HomePage";
import CustomeButton from "../components/CustomButton";
import { useNavigate } from "react-router-dom";

export const ServiceDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  margin: "0 2rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const ServiceImage = styled("img")(({ theme }) => ({
  width: "95%",
  height: "auto",
  objectFit: "cover",
  maxHeight: "70vh",
  margin: "2rem",
  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
}));

const ServicePage = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <NavBar />
      <ServiceImage src="./assets/1.jpg" alt="service_image" />
      <SectionDivider title={"Woman Hair cut"} />
      <Paragraph m={"0 2rem"}>{textData}</Paragraph>
      <ServiceDiv>
        <Typography variant="h6">
          Opening Hours - Every Day 8.00 AM - 6.00 PM
        </Typography>
        <Title sx={{ m: 0 }}>$ 220</Title>
      </ServiceDiv>
      <div style={{ textAlign: "right", margin: "2rem" }}>
        <CustomeButton
          text={"Book now"}
          variant={"outlined"}
          handleClick={() => navigate("/bookings")}
        />
      </div>

      <Footer />
    </Box>
  );
};

export default ServicePage;
