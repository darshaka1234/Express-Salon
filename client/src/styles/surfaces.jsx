import { Box, Stack, styled } from "@mui/material";

export const CardDiv = styled("div")({
  boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
  width: "18rem",
  textAlign: "center",
  fontFamily: "Poppins",
  cursor: "pointer",
  margin: "auto",
  height: "25rem",
  backgroundColor: "rgba(175, 175, 175, 0.25)",
});

export const StyledStack = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
  },
}));

export const NavDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.between("sm", "md")]: {
    flexDirection: "row",
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

export const BrandDetailsContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  color: "black",
});

export const BrandName = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const StyledAppBarBox = styled(Box)(({ theme }) => ({
  width: "50%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const SectionDiv = styled("div")({
  padding: "0 2rem",
});

export const WelcomeContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  marginLeft: "7rem",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
    marginLeft: "2rem",
  },
}));

export const WelcomeDiv = styled("div")(({ theme }) => ({
  width: "50%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const Round = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "10rem",
  height: "10rem",
  borderRadius: "100%",
  backgroundColor: "#B99A5F",
  justifyContent: "center",
  alignItems: "center",
});

export const ServiceDiv = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  margin: "0 2rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

export const SucessStack = styled(Stack)(({ theme }) => ({
  justifyContent: "center",
  margin: "3rem 0 ",
  alignItems: "center",
}));

export const SucessBox = styled(Box)({
  height: "64vh",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "5rem",
});
