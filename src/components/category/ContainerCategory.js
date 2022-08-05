import React from "react";
import cars from "../../assets/category.json";
import Category from "./Category";
import {DivContainer} from './ContainerStyles'

const ContainerCategory = () => {
  return (
    <DivContainer>
      {cars.map((car) => (
        <Category car={car} />
      ))}
    </DivContainer>
  );
};

export default ContainerCategory;
