import React from "react";
import { Img, Div, DivContainers, DivText } from "./CategoryStyles";

const Category = ({car}) => {
  return (
    <DivContainers>
      <Div>
        <DivText>
          <h2 className="titleCar">{car.title}</h2>
          <p className="pCar">50 autos</p>
        </DivText>
        <Img
          src={car.url_image}
          alt={car.title}
        />
      </Div>
    </DivContainers>
  );
};

export default Category;
