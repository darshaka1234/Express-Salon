import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import BrandDeatils from "./BrandDeatils";
import MyDrawer, { navItems, NavLinkText } from "./Drawer";
import { useDispatch } from "react-redux";
import { toggle } from "../../features/mobileSlice";
import { Link } from "react-router-dom";
import { Button, styled } from "@mui/material";

export const StyledAppBar = styled(AppBar)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  backgroundColor: "white",
  boxShadow: "none",
  padding: "0  2rem",
});

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

const NavBar = (props) => {
  const disptch = useDispatch();
  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    disptch(toggle());
  };

  return (
    <div>
      <StyledAppBar position="sticky">
        <BrandDeatils />
        <StyledAppBarBox>
          {navItems.map((item) => (
            <Link
              to={item.to}
              style={{ textDecoration: "none" }}
              key={item.name}
            >
              <NavLinkText>{item.name}</NavLinkText>
            </Link>
          ))}
          <Link to={"/login"} style={{ textDecoration: "none" }}>
            <CustomButton variant={"contained"}>Book Now</CustomButton>
          </Link>
        </StyledAppBarBox>
        <IconButton
          color="black"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { md: "none" } }}
        >
          <MenuIcon />
        </IconButton>
      </StyledAppBar>
      <Box component="nav">
        <MyDrawer container={container} />
      </Box>
    </div>
  );
};

export default NavBar;
