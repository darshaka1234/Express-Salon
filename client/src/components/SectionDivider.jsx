import React from "react";
import { SectionLine } from "../styles/other";
import { SectionDiv } from "../styles/surfaces";
import { Title } from "../styles/typos";

const SectionDivider = ({ title }) => {
  return (
    <SectionDiv>
      <Title>{title}</Title>
      <SectionLine />
    </SectionDiv>
  );
};

export default SectionDivider;
