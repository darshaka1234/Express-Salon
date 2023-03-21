import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import BrandDeatils from "./BrandDeatils";
import MyDrawer from "./Drawer";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../../features/mobileSlice";
import { Link } from "react-router-dom";
import { increment } from "../../features/numberSlice";
import { NavLinkText } from "../../styles/typos";
import { StyledAppBar } from "../../styles/other";
import { CustomButton } from "../../styles/buttons";
import { StyledAppBarBox } from "../../styles/surfaces";

const NavBar = (props) => {
  const user = useSelector((state) => state.user.user);
  const appointmentPath =
    user.firstName === undefined ? "/login" : "/appointments";
  const bookingPath = user.firstName === undefined ? "/login" : "/booking";

  const navItems = [
    { name: "Home", to: "/", dest: "" },
    { name: "Services", to: "/", dest: "service" },
    { name: "My Appoitments", to: appointmentPath, dest: "/appointments" },
    { name: "About Us", to: "/", dest: "about" },
  ];

  const dispatch = useDispatch();
  const { window } = props;
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    dispatch(toggle());
  };

  return (
    <div>
      <StyledAppBar position="sticky">
        <BrandDeatils />
        <StyledAppBarBox>
          {navItems.map((item) => (
            <Link
              to={{
                pathname: item.to,
                search: `?data=${item.dest}`,
              }}
              style={{ textDecoration: "none" }}
              key={item.name}
            >
              <NavLinkText
                onClick={() =>
                  (item.dest === "service" || item.dest === "about") &&
                  dispatch(increment())
                }
              >
                {item.name}
              </NavLinkText>
            </Link>
          ))}
          <Link
            to={{ pathname: bookingPath, search: "?data=/booking" }}
            style={{ textDecoration: "none" }}
          >
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
