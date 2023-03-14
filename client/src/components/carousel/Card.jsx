import { styled, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export const CardImage = styled("img")({
  width: "100%",
  height: "auto",
  maxHeight: "12rem",
  objectFit: "cover",
});

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

const Card = ({ url, title, description, price }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/service", {
      state: { data: { url, title, description, price } },
    });
  };

  const handleReservationClick = (e) => {
    e.stopPropagation();
    navigate("/booking");
  };

  return (
    <CardDiv onClick={handleCardClick}>
      <CardImage src={url} alt="" />
      <CardTitle variant="h6">{title}</CardTitle>
      <CardDetails>{description}</CardDetails>
      <CardButton variant="button" onClick={handleReservationClick}>
        Make A Reservation
      </CardButton>
    </CardDiv>
  );
};

export default Card;
