import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Card from "./Card";
import { useSelector } from "react-redux";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const responsive = {
  0: {
    items: 1,
    itemsFit: "contain",
  },
  900: {
    items: 2,
    itemsFit: "contain",
  },
  1200: {
    items: 3,
    itemsFit: "contain",
  },
  2000: {
    items: 5,
    itemsFit: "contain",
  },
};

const renderNextButton = ({ isDisabled }) => {
  return (
    <ArrowForwardIosIcon
      style={{
        position: "absolute",
        right: "1rem",
        top: "50%",
        fontSize: "3rem",
        cursor: "pointer",
      }}
    />
  );
};

const renderPrevButton = ({ isDisabled }) => {
  return (
    <ArrowBackIosIcon
      style={{
        position: "absolute",
        left: "2rem",
        top: "50%",
        fontSize: "3rem",
        cursor: "pointer",
      }}
    />
  );
};

const Carousel = () => {
  const { status, services } = useSelector((state) => state.allServices);

  const product = services?.map((item) => (
    <Card
      title={item.name}
      url={item.imageUrl}
      description={item.description}
      price={item.price}
      key={item._id}
    />
  ));
  return status ? (
    <p>"loading"</p>
  ) : (
    <AliceCarousel
      autoPlay
      infinite
      animationDuration={2000}
      mouseTracking
      items={product}
      disableDotsControls
      responsive={responsive}
      renderPrevButton={renderPrevButton}
      renderNextButton={renderNextButton}
    />
  );
};

export default Carousel;
