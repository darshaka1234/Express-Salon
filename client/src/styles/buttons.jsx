import { Button, styled } from "@mui/material";

export const CustomButton = styled(Button)(({ variant }) => ({
  fontFamily: "Poppins",
  fontSize: "1rem",
  height: "3rem",
  textTransform: "none",
  ...(variant === "contained" && {
    backgroundColor: "black",
  }),
  ...(variant === "outlined" && {
    color: "black",
    border: "1px black solid",
  }),
}));
