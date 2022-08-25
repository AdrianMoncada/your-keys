import React, { useState, useContext } from "react";
import { Img, Div, DivContainers, DivText } from "./CategoryStyles";
import axios from "../../apis/axiosRequest";
import useRequest from "../../hooks/useRequest"
import AppContext from '../../context/AppContext'

const Category = ({car}) => {
  const id = car.id_category;
  const {setCategoryList} = useContext(AppContext)
  const [response, error, loading] = useRequest({
    axiosInstance: axios,
    method: "GET",
    url: `/vehicle/category/${id}`
  })
  
  const handleId = () => {
    console.log("🚀 ~ file: Category.js ~ line 9 ~ Category ~ id", id)
    console.log("🚀 ~ file: Category.js ~ line 15 ~ Category ~ response", response)
    setCategoryList(response)
  }

  return (
    <DivContainers
      initial={{ x: `${id % 2 ? 100 : -100}%`, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.2 * id, duration: 0.3 }}
      viewport={{once: true, offset: "50%"}}
      onClick={() => handleId()}
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
          src={car.urlImage}
          alt={car.title}
        />
      </Div>
    </DivContainers>
  );
};

export default Category;
