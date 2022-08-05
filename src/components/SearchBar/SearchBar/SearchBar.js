import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import { DivSearch } from "./SearchBarStyles";
import { InputInfo } from "../../../styles/homeStyles/homeStyles";

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
    <div className="search">
      <DivSearch className="searchInputs">
        <InputInfo
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <FaSearch />
          ) : (
            <MdClose id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </DivSearch>
      {filteredData.length !== 0 && (
        <div className='dataResult'>
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className='dataItem' href={value.city}>
                <p>{value.city} </p>
              </a>
            );
          })}
        </div>
      )}

    </div>
  );
}

export default SearchBar;
