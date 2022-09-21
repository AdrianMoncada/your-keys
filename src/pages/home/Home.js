import React, { useContext, useState, useEffect } from "react";
import {
  ContainerMain,
  DivContainerInfo,
  ButtonInfo,
  DivInput,
  DivDate,
  ContainerCategorias,
  DivContainerList,
  DivLupa,
} from "./homeStyles";
import { MdLocationOn } from "react-icons/md";
import ContainerCategory from "../../components/category/ContainerCategory";
import Search from "../../components/Search/Search";
import DateCalendar from "../../components/date/DateCalendar";
import ContainerCard from "../../components/cards/ContainerCard";
import Hero from "../../components/hero/Hero";
import { motion } from "framer-motion";
import AppContext from "../../context/AppContext";
import ContainerCardRequest from "../../components/cards/ContainerCardRequest";
import axios from "../../apis/axiosRequest";
import useRequest from "../../hooks/useRequest";
import SearchBar from "../../components/SearchHorizontal/SearchHorizontal";
import "react-loading-skeleton/dist/skeleton.css";
import Moment from "moment";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import useFetch from '../../hooks/useFetch';

const Home = () => {
  const { state, setCategoryList } = useContext(AppContext);

  const [vehiculos, isLoading] = useFetch("http://3.144.167.227:8080/vehicle")

  const [responses] = useRequest({
    axiosInstance: axios,
    method: "GET",
    url: `/city`,
  });

  let idCar;
  let responseDes = [];
  let slideDes = [];
  vehiculos?.map((i) => responseDes.push(i));
  responseDes = responseDes.sort(() => Math.random() - 0.5);
  responseDes.map((i) => (slideDes.length < 3 ? slideDes.push(i) : null));

  const handleClick = () => {
    idCar = responses.find((city) => city.cityName === state.search)?.idCity;

    const objFilter = {
      cityId: state.search === null ? null : idCar,
      finalDate:
        state.endDate === null
          ? null
          : Moment(state.endDate).format("YYYY-MM-DD"),
      initialDate:
        state.startDate === null
          ? null
          : Moment(state.startDate).format("YYYY-MM-DD"),
    };

    axios({
      method: "post",
      url: "http://3.144.167.227:8080/vehicle/booking",
      data: objFilter,
    })
      .then((res) => {
        setCategoryList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      <div>
        {isLoading ? (
          <SkeletonTheme baseColor="#202020" highlightColor="#444">
            <div>
              <Skeleton height="100vh"/>
            </div>
          </SkeletonTheme>
        ) : (
          <Hero slides={slideDes} />
        )}

        <ContainerMain
          initial={{ opacity: 0, y: "-100%" }}
          animate={{ opacity: 1, y: "0%" }}
        >
          <DivContainerInfo>
            <h2 animate={{ y: 0 }} className="titleInfo">
              {" "}
              Retiro
            </h2>
            <DivInput>
              <MdLocationOn className="icon" />
              <Search />
            </DivInput>
            <DivDate>
              <DateCalendar />
            </DivDate>
            <a className="buttonI" href="#list">
              <ButtonInfo
                onClick={handleClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Encontrar Vehículo{" "}
              </ButtonInfo>
            </a>
          </DivContainerInfo>
        </ContainerMain>
      </div>
      {/* <DivLupa>{searcher ? <SearchBar /> : null}</DivLupa> */}

      <ContainerCategorias>
        <motion.h2
          initial={{ opacity: 0, y: "-100%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.4 }}
          viewport={{ once: true, offset: "50%" }}
          className="titleCategoras"
        >
          Categorias
        </motion.h2>
        <ContainerCategory />
      </ContainerCategorias>
      <div id="list"></div>
      <DivContainerList>
        <h2 className="titleRecommendation">Recomendaciones</h2>
        {state.categoryList === null ? (
          <ContainerCard />
        ) : (
          <ContainerCardRequest car={state.categoryList} />
        )}
      </DivContainerList>
    </div>
  );
};

export default Home;
