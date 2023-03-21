import { Box, Typography } from "@mui/material";
import React from "react";
import NavBar from "../components/navbar/NavBar";
import SectionDivider from "../components/SectionDivider";
import Footer from "../components/footer/Footer";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { CustomButton } from "../styles/buttons";
import { Paragraph, Title } from "../styles/typos";
import { ServiceImage } from "../styles/images";
import { ServiceDiv } from "../styles/surfaces";

const ServicePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const user = useSelector((state) => state.user.user);
  const bookingPath = user.firstName === undefined ? "/login" : "/booking";
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
        <CustomButton
          variant={"outlined"}
          onClick={() => navigate(bookingPath)}
        >
          Book now
        </CustomButton>
      </div>

      <Footer />
    </Box>
  );
};

export default ServicePage;
