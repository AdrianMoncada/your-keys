import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "../../apis/axiosRequest";
import useRequest from "../../hooks/useRequest";
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import {
  DivContainerCategory,
  DivName,
  DivSpanIcon,
} from "./headerCategoryStyles";

const HeaderCategory = ({url}) => {
  const { carId } = useParams();

  const [response, error, loading] = useRequest({
    axiosInstance: axios,
    method: "GET",
    url: `/vehicle/${carId}`,
  });
  return (
    <DivContainerCategory>
      <DivName>
        <h3>{response?.category?.title}</h3>
        <h1>{response?.rangeName}</h1>
      </DivName>
      <Link to={url}>
        <DivSpanIcon>
          <span>
            <IoIosArrowBack />{" "}
          </span>
        </DivSpanIcon>
      </Link>
    </DivContainerCategory>
  );
};

export default HeaderCategory;
