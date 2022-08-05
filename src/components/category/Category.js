import React from "react";
import { Img, Div } from "./CategoryStyles";

const Category = ({car}) => {
  return (
    <Div>
      <Img
        src={car.url_image}
        alt={car.title}
      />
    </Div>
  );
};

export default Category;
