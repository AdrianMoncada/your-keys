import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdClose, MdLocationOn } from "react-icons/md";
import { DivSearch } from "./SearchHorizontalStyles";
import {
  ButtonInfo,
  DivContainerInfo,
  InputInfo,
} from "../../pages/home/homeStyles";
import { SearchContainer, DivDates } from "./SearchHorizontalStyles";
import DateCalendar from "../date/DateCalendar";
import Search from "../Search/Search";
import { DivDate, DivInput } from "../date/DateCalendarStyles";

function SearchBar() {
  return (
    <SearchContainer>
      <h2 className="titleInfos"> Recogida</h2>
      <DivInput className="divcito">
        <MdLocationOn className="icon" />
        <Search />
      </DivInput>
      <DivDates>
        <DateCalendar className="dates" position="inline-flex" />
      </DivDates>

      <ButtonInfo>Encontrar Vehículo</ButtonInfo>
    </SearchContainer>
  );
}

export default SearchBar;
