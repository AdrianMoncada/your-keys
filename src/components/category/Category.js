import React, { useState, useContext } from "react";
import { Img, Div, DivContainers, DivText } from "./CategoryStyles";
import axios from "../../apis/axiosRequest";
import useRequest from "../../hooks/useRequest"
import AppContext from '../../context/AppContext'

const Category = ({car}) => {
  const id = car.id_category;
  const {setCategoryList} = useContext(AppContext)
  const [response] = useRequest({
    axiosInstance: axios,
    method: "GET",
    url: `/vehicle/category/${id}`
  })

  

  /* const [compactos] = useRequest({
    axiosInstance: axios,
    method: "GET",
    url: `/vehicle/category/1`
  }) */

  
  const handleId = () => {
    setCategoryList(response)
  }

  return (
    <DivContainers
      initial={{ x: `${id % 2 ? 100 : -100}%`, opacity: 0, transition: "2s" }}
      whileInView={{ x: 0, opacity: 1, delay: 0.1 * id, transition: "2s" }}
      viewport={{once: true, offset: "50%"}}
      onClick={() => handleId()}
      whileHover={{ scale: 1.1, position: "relative", zIndex: 10}}
      whileTap={{ scale: 0.9 }}
    >
      <Div
        
      >
        <DivText>
          <h2 className="titleCar">{car.title}</h2>
          <p className="pCar">{response.length} autos</p>
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
