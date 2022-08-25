import React from "react";
import cars from "../../assets/category.json";
import Category from "./Category";
import {DivContainer} from './ContainerStyles'
import axios from "../../apis/axiosRequest";
import useRequest from "../../hooks/useRequest"

const ContainerCategory = () => {

  const [response, error, loading] = useRequest({
    axiosInstance: axios,
    method: "GET",
    url: "/category"
  })

  return (
    <DivContainer>
      {response?.map((car, index) => (
        <Category car={car} key={car.id_category} />
      ))}
    </DivContainer>
  );
};

export default ContainerCategory;
