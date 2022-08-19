import React from "react";
import { Img, Div, DivContainers, DivText } from "./CategoryStyles";

const Category = ({car}) => {
  const id = car.id_category;
  return (
    <DivContainers
      initial={{ x: `${id % 2 ? 100 : -100}%` }}
      whileInView={{ x: 0 }}
      transition={{ delay: 0.2 * id, duration: 0.3 }}
      viewport={{once: true, offset: "50%"}}
    >
      <Div
        whileHover={{ scale: 1.1, zIndex: 3 }}
        style={{ zIndex: 1 }}
      >
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
