import {
  Box,
  Drawer,
  List,
  ListItemButton,
  styled,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toggle } from "../../features/mobileSlice";
import { BrandTitle } from "./BrandDeatils";
import { CustomButton } from "./NavBar";

export const navItems = [
  { name: "Home", to: "/", dest: "" },
  { name: "Services", to: "/", dest: "" },
  { name: "My Appoitments", to: "/login", dest: "/appointments" },
  { name: "About Us", to: "/", dest: "" },
];

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

const MyDrawer = ({ container }) => {
  const mobileOpen = useSelector((state) => state.mobile.value);

  const disptch = useDispatch();
  const drawerWidth = 240;

  const user = useSelector((state) => state.user.user);
  const appointmentPath =
    user.firstName === undefined ? "/login" : "/appointments";
  const bookingPath = user.firstName === undefined ? "/login" : "/booking";
  const navItems = [
    { name: "Home", to: "/", dest: "" },
    { name: "Services", to: "/", dest: "" },
    { name: "My Appoitments", to: appointmentPath, dest: "/appointments" },
    { name: "About Us", to: bookingPath, dest: "" },
  ];

  return (
    <Drawer
      container={container}
      variant="temporary"
      anchor="right"
      open={mobileOpen}
      onClose={() => disptch(toggle())}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: "block", md: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: drawerWidth,
        },
      }}
    >
      <Box>
        <BrandTitle sx={{ fontSize: "1.5rem", marginLeft: "1rem" }}>
          Express Hair Salon
        </BrandTitle>
        <List>
          {navItems.map((item) => (
            <Link
              to={{
                pathname: item.to,
                search: `?data=${item.dest}`,
              }}
              style={{ textDecoration: "none" }}
              key={item.name}
            >
              <ListItemButton sx={{ textDecoration: "none" }}>
                <NavLinkText>{item.name}</NavLinkText>
              </ListItemButton>
            </Link>
          ))}
          <Link to={"/booking "} style={{ textDecoration: "none" }}>
            <ListItemButton>
              <CustomButton variant="contained">Book now</CustomButton>
            </ListItemButton>
          </Link>
        </List>
      </Box>
    </Drawer>
  );
};

export default MyDrawer;
