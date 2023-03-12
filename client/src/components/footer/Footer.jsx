import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { BrandDetailsContainer, BrandName } from "../navbar/BrandDeatils";
import { navItems, NavLinkText } from "../navbar/Drawer";
import {
  CopyrightText,
  FooterBrandSlogan,
  FooterBrandTitle,
  FooterIcon,
  FooterLogoImage,
  FooterStack,
  NavDiv,
  StyledStack,
} from "./footerItems";

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
    <Grid container sx={{ bgcolor: "black", padding: "0 1rem" }}>
      <Grid item xs={5}>
        <BrandDetailsContainer sx={{ color: "white" }}>
          <FooterLogoImage src="./assets/logowhite.png" alt="main logo" />
          <BrandName>
            <FooterBrandTitle>Express Hair Salon</FooterBrandTitle>
            <FooterBrandSlogan>
              712 N. Rush St. Chicago, IL 60611 (312) 751-1511
            </FooterBrandSlogan>
          </BrandName>
        </BrandDetailsContainer>
        <FooterStack direction={"row"} justifyContent={"left"}>
          {images.map((image) => (
            <FooterIcon src={image.src} alt={image.name} key={image.name} />
          ))}
        </FooterStack>
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
