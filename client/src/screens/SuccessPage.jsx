import { Box } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import { logout } from "../features/userSlice";
import { CustomButton } from "../styles/buttons";
import { SucessBox, SucessStack } from "../styles/surfaces";
import { Paragraph, SucessTitle } from "../styles/typos";

const SuccessPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
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
          <CustomButton
            variant={"outlined"}
            onClick={() => navigate("/appointments")}
          >
            View appointents
          </CustomButton>
          <CustomButton variant={"contained"} onClick={handleLogout}>
            LogOut
          </CustomButton>
        </SucessStack>
      </SucessBox>
      <Footer />
    </Box>
  );
};

export default SuccessPage;
