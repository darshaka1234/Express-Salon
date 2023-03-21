import { styled, Typography } from "@mui/material";

export const CardTitle = styled(Typography)({
  fontFamily: "Poppins",
  fontWeight: 600,
});

export const CardDetails = styled(Typography)({
  fontFamily: "Poppins",
  padding: "1rem",
  minHeight: "6rem",
});

export const CardButton = styled(Typography)({
  fontFamily: "Poppins",
  fontWeight: 400,
  color: "#b99a5f",
  cursor: "pointer",
});

export const CopyrightText = styled(Typography)(({ theme }) => ({
  color: "white",
  textAlign: "center",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.8rem",
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

export const NavLinkText = styled(Typography)(({ theme }) => ({
  fontFamily: "Poppins",
  fontWeight: 500,
  fontSize: "1rem",
  color: "black",
  textDecoration: "none",
  [theme.breakpoints.down("sm")]: {
    fontWeight: 500,
    fontSize: "0.8rem",
  },
}));

export const Title = styled(Typography)({
  fontFamily: "Poppins",
  textAlign: "left",
  fontSize: "1.8rem",
  fontWeight: 700,
});

export const Paragraph = styled(Typography)({
  fontFamily: "Poppins",
  marginBottom: "2rem",
});

export const SucessTitle = styled(Title)({
  textAlign: "center",
});
