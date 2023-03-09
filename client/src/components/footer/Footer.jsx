import { Grid, Stack, styled, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  BrandDetailsContainer,
  BrandName,
  BrandSlogan,
  BrandTitle,
  LogoImage,
} from "../navbar/BrandDeatils";
import { navItems, NavLinkText } from "../navbar/Drawer";

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

const images = [
  { name: "fb", src: "./assets/fb.png" },
  { name: "tw", src: "./assets/twitter.png" },
  { name: "in", src: "./assets/insta.png" },
];

const haircutData = [
  { id: 1, name: "Hair Cut", to: "/single-service" },
  { id: 2, name: "Hair Cut", to: "/single-service" },
  { id: 3, name: "Hair Cut", to: "/single-service" },
  { id: 4, name: "Hair Cut", to: "/single-service" },
];

const Footer = () => {
  return (
    <Grid container sx={{ bgcolor: "black" }}>
      <Grid item xs={5}>
        <BrandDetailsContainer sx={{ color: "white" }}>
          <LogoImage src="./assets/logowhite.png" alt="main logo" />
          <BrandName>
            <BrandTitle>Express Hair Salon</BrandTitle>
            <BrandSlogan>
              712 N. Rush St. Chicago, IL 60611 (312) 751-1511
            </BrandSlogan>
            <Stack direction={"row"} justifyContent={"left"}>
              {images.map((image) => (
                <img
                  src={image.src}
                  alt={image.name}
                  key={image.name}
                  style={{ width: "2rem", height: "2rem", marginRight: "2rem" }}
                />
              ))}
            </Stack>
          </BrandName>
        </BrandDetailsContainer>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={4}>
        <Typography variant="h6" sx={{ color: "white" }}>
          Quick Links
        </Typography>
        <NavDiv>
          <StyledStack>
            {navItems.map((item) => (
              <Link
                to={item.to}
                style={{ textDecoration: "none" }}
                key={item.name}
              >
                <NavLinkText sx={{ color: "white" }}>{item.name}</NavLinkText>
              </Link>
            ))}
          </StyledStack>
          <StyledStack justifyContent={"space-between"}>
            {haircutData.map((item) => (
              <Link
                to={item.to}
                style={{ textDecoration: "none" }}
                key={item.id}
              >
                <NavLinkText sx={{ color: "white" }}>{item.name}</NavLinkText>
              </Link>
            ))}
          </StyledStack>
        </NavDiv>
      </Grid>
      <Grid item xs={12}>
        <CopyrightText>© Copyright 2022-2023</CopyrightText>
      </Grid>
    </Grid>
  );
};

export default Footer;
