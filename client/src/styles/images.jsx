import { styled } from "@mui/material";

export const CardImage = styled("img")({
  width: "100%",
  height: "auto",
  maxHeight: "12rem",
  objectFit: "cover",
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

export const FooterLogoImage = styled(LogoImage)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    width: "3.5rem",
    height: "3.5rem",
  },
  [theme.breakpoints.down("lg")]: {
    width: "3rem",
    height: "3rem",
  },
  [theme.breakpoints.down("md")]: {
    width: "2.5rem",
    height: "2.5rem",
  },
  [theme.breakpoints.down("sm")]: {
    marginLeft: "5.5rem",
  },
}));

export const FooterIcon = styled("img")(({ theme }) => ({
  width: "1.7rem",
  height: "1.7rem",
  marginRight: "2.5rem",

  [theme.breakpoints.down("sm")]: {
    width: "1.5rem",
    height: "1.5rem",
    marginTop: "1rem",
    marginLeft: "5rem",
  },
}));

export const WelcomeImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "auto",
  [theme.breakpoints.down("md")]: {
    width: "100%",
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
