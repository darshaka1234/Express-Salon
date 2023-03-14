import { Box, styled, Typography } from "@mui/material";
import React from "react";
import NavBar from "../components/navbar/NavBar";
import SectionDivider, { Title } from "../components/SectionDivider";
import Footer from "../components/footer/Footer";
import { Paragraph } from "./HomePage";
import { CustomButton } from "../components/navbar/NavBar";
import { useNavigate, useLocation } from "react-router-dom";

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
  const location = useLocation();
  const { url, title, description, price } = location.state?.data;
  return (
    <Box>
      <NavBar />
      <ServiceImage src={url} alt="service_image" />
      <SectionDivider title={title} />
      <Paragraph m={"0 2rem"}>{description}</Paragraph>
      <ServiceDiv>
        <Typography variant="h6">
          Opening Hours - Every Day 8.00 AM - 6.00 PM
        </Typography>
        <Title sx={{ m: 0 }}>{`$ ${price}`}</Title>
      </ServiceDiv>
      <div style={{ textAlign: "right", margin: "2rem" }}>
        <CustomButton variant={"outlined"} onClick={() => navigate("/booking")}>
          Book now
        </CustomButton>
      </div>

      <Footer />
    </Box>
  );
};

export default ServicePage;
