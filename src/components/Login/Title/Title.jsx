import React from "react";
import { TitleContainer } from "../../../styles/Title";

const Title = ({ text }) => {
  return (
    <TitleContainer>
      <label className="title-label"> {text} </label>
    </TitleContainer>
  );
};

export default Title;
