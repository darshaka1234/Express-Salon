import { Stack, styled, Typography } from "@mui/material";
import { BrandSlogan, BrandTitle, LogoImage } from "../navbar/BrandDeatils";

export const StyledStack = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const CopyrightText = styled(Typography)(({ theme }) => ({
  color: "white",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
  },
}));

export const NavDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.between("sm", "md")]: {
    flexDirection: "row",
  },
}));

export const FooterBrandTitle = styled(BrandTitle)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    fontSize: "2rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "1.7rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "1.3rem",
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

export const FooterBrandSlogan = styled(BrandSlogan)(({ theme }) => ({
  [theme.breakpoints.up("lg")]: {
    fontSize: "1rem",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "0.9rem",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "0.8rem",
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
export const FooterStack = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  marginLeft: "1rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));
