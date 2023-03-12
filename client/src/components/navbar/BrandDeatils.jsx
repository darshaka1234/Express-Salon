import { Box, Typography } from "@mui/material";
import React from "react";
import styled from "@mui/material/styles/styled";

export const BrandDetailsContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  color: "black",
});

export const LogoImage = styled("img")(({ theme }) => ({
  width: "4rem",
  height: "4rem",
  margin: ".5rem",
  [theme.breakpoints.down("sm")]: {
    width: "3rem",
    height: "3rem",
  },
}));

export const BrandName = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const BrandTitle = styled(Typography)({
  fontFamily: "Playfair Display",
  fontWeight: 800,
  fontSize: "2.2rem",
});

export const BrandSlogan = styled(Typography)({
  fontFamily: "Poppins",
  fontWeight: 500,
  fontSize: "1rem",
  fontStyle: "italic",
});

const BrandDetails = () => {
  return (
    <BrandDetailsContainer>
      <LogoImage src="./assets/logo.png" alt="main logo" />
      <BrandName>
        <BrandTitle>Express Hair Salon</BrandTitle>
        <BrandSlogan>Your Quality Is Our Duty</BrandSlogan>
      </BrandName>
    </BrandDetailsContainer>
  );
};

export default BrandDetails;
