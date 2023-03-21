import React from "react";
import { useNavigate } from "react-router-dom";
import { CardImage } from "../../styles/images";
import { CardDiv } from "../../styles/surfaces";
import { CardButton, CardDetails, CardTitle } from "../../styles/typos";

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
