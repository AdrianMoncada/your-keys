import React from "react";
import cars from "../../assets/category.json";
import Category from "./Category";
import {DivContainer} from './ContainerStyles'
import axios from "../../apis/axiosRequest";
import useRequest from "../../hooks/useRequest"
import SearchBar from "../SearchHorizontal/SearchHorizontal";
import styled from 'styled-components'
import useFetch from '../../hooks/useFetch';
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DivLupa = styled.div`
  position: sticky;
  top: 100px;
  z-index: 15;
  display: inline-block;
`

const ContainerCategory = () => {

  const [category, isLoading] = useFetch("http://3.144.167.227:8080/category")


  return (
    <DivContainer>
      {
        isLoading ? <SkeletonTheme baseColor="#FCA311" highlightColor="#444">
          <div>
            <Skeleton height={200} />
          </div>
        </SkeletonTheme> : (
        category.map((car, index) => (
          <Category car={car} key={car.id_category} />
        ))
      )
      }
      
    </DivContainer>
  );
};

export default ContainerCategory;
