import React from "react";
import { DivInputContainer } from "../../../styles/Input";
import { PlaceHolderError } from "../../../styles/Input";

const Input = ({ attribute, handleChange, param }) => {
  return (
    <DivInputContainer>
      <PlaceHolderError
        id={attribute.id}
        name={attribute.name}
        placeholder={attribute.placeholder}
        type={attribute.type}
        onChange={(e) => handleChange(e.target.name, e.target.value)}
        className={param && "inputerror"}
      />
    </DivInputContainer>
  );
};
export default Input;
