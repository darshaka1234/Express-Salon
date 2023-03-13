import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { productData } from "../../data/rowData";
import Card from "./Card";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const product = productData.map((item) => (
  <Card
    name={item.name}
    url={item.imageurl}
    description={item.description}
    price={item.price}
    key={item.id}
  />
));

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
      }}
    />
  );
};

const Carousel = () => {
  return (
    <AliceCarousel
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
