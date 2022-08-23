import React from "react";
import {
  ContainerMain,
  DivContainerInfo,
  ButtonInfo,
  DivInput,
  DivDate,
  ContainerCategorias,
  DivContainerList,
} from "./homeStyles";
import { MdLocationOn } from "react-icons/md";
import ContainerCategory from "../../components/category/ContainerCategory";
import Search from "../../components/Search/Search";
import DateCalendar from "../../components/date/DateCalendar";
import ContainerCard from "../../components/cards/ContainerCard";
import Hero from "../../components/hero/Hero";
import slides from "../../assets/SliderData.json";
import { motion } from "framer-motion";
import TestRequest from "../../components/testRequest/TestRequest";
import axios from "../../apis/axiosRequest";
import useRequest from "../../hooks/useRequest";

const Home = () => {
  const [response, error, loading] = useRequest({
    axiosInstance: axios,
    method: "GET",
    url: "/vehicle",
    requestConfig: {
      headers: {
        "Content-Language": "en-US",
      },
      data: {},
    },
  });

  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      <div>
        <Hero slides={slides} />
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
              <ButtonInfo whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                Encontrar Vehículo{" "}
              </ButtonInfo>
            </a>
          </DivContainerInfo>
        </ContainerMain>
      </div>
      {/* <TestRequest /> */}
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
        <ContainerCard />
      </DivContainerList>
    </div>
  );
};

export default Home;
