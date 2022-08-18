import React, {useState} from "react";
import {
  ContainerMain,
  DivContainerInfo,
  ButtonInfo,
  DivInput,
  DivDate,
  ContainerCategorias,
  DivContainerList,
  DivContainerHero,
  DivHero
} from "./homeStyles";
import { MdLocationOn } from "react-icons/md";
import ContainerCategory from "../../components/category/ContainerCategory";
import Search from "../../components/Search/Search";
import DateCalendar from "../../components/date/DateCalendar";
import ContainerCard from "../../components/cards/ContainerCard";
import Hero from "../../components/hero/Hero";
import slides from "../../assets/SliderData.json";
import {motion} from "framer-motion";


const Home = () => {
  const [classToggle, setClassToggle] = useState(false);

  const changeView = () => {
    if(window.scrollY >= 500) {
      setClassToggle(true)
    } else {
      setClassToggle(false);
    }
  }

  window.addEventListener("scroll", changeView)
  

  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
    <div>
        <Hero slides={slides}/>
      <ContainerMain>
        <DivContainerInfo>
          <motion.h2 animate={{y: 0}} className="titleInfo"> Retiro</motion.h2>
          <DivInput>
            <MdLocationOn className="icon" />
            <Search />
          </DivInput>
          <DivDate>
            <DateCalendar />
          </DivDate>
          <a className="buttonI" href="#list" ><ButtonInfo>Encontrar Vehículo </ButtonInfo></a>
        </DivContainerInfo>
        {/* <img
          src="https://img.freepik.com/fotos-premium/linternas-coche-moderno-rojo-sobre-fondo-negro_67340-169.jpg"
          alt="carro-rojo"
        /> */}
      </ContainerMain>
    </div>

      <ContainerCategorias>
        {/* <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className="shape-fill"
            fill="#000000"
            fillOpacity={1}
          />
        </svg> */}
        <h2 className="titleCategoras">Categorias</h2>
      <ContainerCategory />
      </ContainerCategorias>
      <div id="list">

      </div>
      <DivContainerList >
        <h2 className="titleRecommendation">Recomendaciones</h2>
        <ContainerCard />
      </DivContainerList>
    </div>
  );
};

export default Home;
