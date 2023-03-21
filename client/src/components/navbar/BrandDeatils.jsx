import React from "react";
import { LogoImage } from "../../styles/images";
import { BrandDetailsContainer, BrandName } from "../../styles/surfaces";
import { BrandSlogan, BrandTitle } from "../../styles/typos";

const BrandDetails = () => {
  return (
    <BrandDetailsContainer>
      <LogoImage src="./assets/logo.png" alt="main logo" />
      <BrandName>
        <BrandTitle>Express Hair Salon</BrandTitle>
        <BrandSlogan>Your Quality Is Our Duty</BrandSlogan>
      </BrandName>
    </BrandDetailsContainer>
  );
};

export default BrandDetails;
