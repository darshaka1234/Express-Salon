import { styled, Typography } from "@mui/material";
import React from "react";

export const Title = styled(Typography)({
  fontFamily: "Poppins",
  textAlign: "left",
  fontSize: "1.8rem",
  fontWeight: 700,
});

export const SectionLine = styled("hr")({
  border: "1px solid black",
  padding: "auto",
  margin: "0 0 2rem 0",
});

export const SectionDiv = styled("div")({
  padding: "0 2rem",
});

const SectionDivider = ({ title }) => {
  return (
    <SectionDiv>
      <Title>{title}</Title>
      <SectionLine />
    </SectionDiv>
  );
};

export default SectionDivider;
