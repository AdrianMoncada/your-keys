import React from "react";
import {  MdLocationOn } from "react-icons/md";
import { SearchContainerHorizontal, DivDatesHorizontal, DivInputHorizontal, ButtonInfoHorizontal } from "./SearchHorizontalStyles";
import DateCalendar from "../date/DateCalendar";
import Search from "../Search/Search";

function SearchBar() {
  return (
    <SearchContainerHorizontal>
      <h2 className="titleInfos"> Recogida</h2>
      <DivInputHorizontal className="divcito">
        <MdLocationOn className="icon" />
        <Search />
      </DivInputHorizontal>
      <DivDatesHorizontal>
        <DateCalendar className="dates" position="inline-flex" />
      </DivDatesHorizontal>

      <ButtonInfoHorizontal>Encontrar Vehículo</ButtonInfoHorizontal>
    </SearchContainerHorizontal>
  );
}

export default SearchBar;
