import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdClose, MdLocationOn } from "react-icons/md";
import { DivSearch } from "./SearchHorizontalStyles";
import {
  ButtonInfo,
  DivContainerInfo,
  InputInfo,
} from "../../pages/home/homeStyles";
import { SearchContainer } from "./SearchHorizontalStyles";
import DateCalendar from "../date/DateCalendar";
import Search from "../Search/Search";
import { DivDate, DivInput } from "../date/DateCalendarStyles";

function SearchBar({ placeholder, data }) {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);

    const newFilter = data.filter((element) => {
      return element.city.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <SearchContainer>
      <h2 className="titleInfo"> Recogida</h2>
      <DivInput>
        <MdLocationOn className="icon" />
        <Search />
      </DivInput>

      <DateCalendar position="inline-flex" />

      <ButtonInfo>Encontrar Vehículo</ButtonInfo>
    </SearchContainer>
  );
}

export default SearchBar;
