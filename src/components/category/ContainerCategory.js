import React from "react";
import cars from "../../assets/category.json";
import Category from "./Category";
import {DivContainer} from './ContainerStyles'

const ContainerCategory = () => {
  return (
    <DivContainer>
      {cars.map((car, index) => (
        <Category car={car} key={car.id_category} />
      ))}
    </DivContainer>
  );
};

export default ContainerCategory;
