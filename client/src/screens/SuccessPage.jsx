import { Box, Stack, styled } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar, { CustomButton } from "../components/navbar/NavBar";
import { Title } from "../components/SectionDivider";
import { Paragraph } from "./HomePage";

export const SucessStack = styled(Stack)(({ theme }) => ({
  justifyContent: "center",
  margin: "3rem 0 ",
  alignItems: "center",
}));

export const SucessTitle = styled(Title)({
  textAlign: "center",
});

export const SucessBox = styled(Box)({
  height: "64vh",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "5rem",
});

const SuccessPage = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <NavBar />
      <SucessBox>
        <SucessTitle>Appointment Successful</SucessTitle>
        <SucessTitle m="0 0 2rem 0">Thank you </SucessTitle>
        <Paragraph sx={{ maxWidth: "60%", m: "auto", textAlign: "center" }}>
          Lorem ipsum is placeholder text commonly used in the graphic, print,
          and publishing industries for previewing layouts and visual mockups.
        </Paragraph>
        <SucessStack direction={{ xs: "column", sm: "row" }} spacing={2}>
          <CustomButton variant={"contained"} handleClick={() => navigate("/")}>
            Home
          </CustomButton>
          <CustomButton
            variant={"outlined"}
            handleClick={() => navigate("/appointments")}
          >
            View appointents
          </CustomButton>
        </SucessStack>
      </SucessBox>
      <Footer />
    </Box>
  );
};

export default SuccessPage;
