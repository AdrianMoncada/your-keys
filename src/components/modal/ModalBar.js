import React from "react";
import {
    ContainerMain,
    DivContainerInfo,
    ButtonInfo,
    DivInput,
    DivDate,} from './ModalStyles'
import { MdLocationOn } from "react-icons/md";
import Search from "../Search/Search";
import DateCalendar from "../date/DateCalendar";

const ModalBar = () => {
  return (
    <div>
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
          <ButtonInfo>
            <a href="#list">Encontrar Vehículo</a>
          </ButtonInfo>
        </DivContainerInfo>
      </ContainerMain>
    </div>
  );
};

export default ModalBar;
