import React from "react";
import {
  ContainerMain,
  DivContainerInfo,
  ButtonInfo,
  DivInput,
  DivDate,
  ContainerCategorias,
} from "../../styles/homeStyles/homeStyles";
import { MdLocationOn } from "react-icons/md";
import ContainerCategory from "../../components/category/ContainerCategory";
import Search from "../../components/Search/Search";
import DateCalendar from "../../components/date/DateCalendar";


const Home = () => {
  
  return (
    <div style={{ backgroundColor: "#E5E5E5" }}>
      <ContainerMain>
        <DivContainerInfo>
          <h2 className="titleInfo"> Recogida</h2>
          <DivInput>
              <MdLocationOn className="icon" />
            <Search />
          </DivInput>

          <DivDate>
            <DateCalendar />
          </DivDate>

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
