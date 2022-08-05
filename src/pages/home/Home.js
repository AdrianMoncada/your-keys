import React from "react";
import SearchSection from "../../components/SearchBar/SearchSection";
import {
  ContainerMain,
  DivContainerInfo,
  InputInfo,
  ButtonInfo,
  DivInput,
  SpanIcon,
  ContainerCategorias
} from "../../styles/homeStyles/homeStyles";
import { MdLocationOn } from "react-icons/md";
import { BsFillCalendarDateFill } from "react-icons/bs";
import Category from "../../components/category/Category";
import ContainerCategory from "../../components/category/ContainerCategory";
import Search from "../../components/Search/Search";

const Home = () => {
  return (
    <div style={{"backgroundColor": "#E5E5E5"}}>
      <ContainerMain>
        <DivContainerInfo>
          <h2>Recogida</h2>
          <Search />
          {/* <DivInput>
            <SpanIcon>
              <MdLocationOn />
            </SpanIcon>
            <SearchSection />
          </DivInput> */}

          <DivInput>
            <SpanIcon iconSize>
              <BsFillCalendarDateFill />
            </SpanIcon>
            <InputInfo placeholder="Fecha Recogida" />
          </DivInput>

          <h2>Entrega</h2>
          <DivInput>
            <SpanIcon iconSize>
              <BsFillCalendarDateFill />
            </SpanIcon>
            <InputInfo placeholder="Fecha Entrega" />
          </DivInput>

          <ButtonInfo>Encontrar Vehículo</ButtonInfo>
        </DivContainerInfo>
        <img
          src="https://img.freepik.com/fotos-premium/linternas-coche-moderno-rojo-sobre-fondo-negro_67340-169.jpg"
          alt="carro-rojo"
        />
      </ContainerMain>
      <ContainerCategorias>
        <svg
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
        </svg>
        <h2>Categorias</h2>
        <ContainerCategory />
      </ContainerCategorias>
    </div>
  );
};

export default Home;
