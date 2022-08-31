import React, { useState, useContext } from "react";
import city from "../../assets/data.json";
import { styled } from '@mui/material/styles';
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
import { autocompleteClasses } from '@mui/material/Autocomplete';
import  {InputInfo} from '../../pages/home/homeStyles';
import {DivSearch} from './SearchStyles';
import AppContext from "../../context/AppContext";
import useRequest from "../../hooks/useRequest"
import axios from "../../apis/axiosRequest";

const Listbox = styled('ul')(({ theme }) => ({
  width: 230,
  margin: 0,
  padding: 0,
  zIndex: 1,
  marginTop: -5,
  position: 'absolute',
  listStyle: 'none',
  backgroundColor: theme.palette.background.paper,
  overflow: 'auto',
  color: 'black',
  
  maxHeight: 200,
  border: '1px solid rgba(0,0,0,.25)',
  [`& li.${autocompleteClasses.focused}`]: {
    backgroundColor: '#4a8df6',
    color: 'black',
    cursor: 'pointer',
    
  },
  '& li:active': {
    backgroundColor: '#2977f5',
    color: 'black',
  },
}));

const Search = () => {
  const {state, setSearch} = useContext(AppContext);

  const [response, error, loading] = useRequest({
    axiosInstance: axios,
    method: "GET",
    url: `/city`
  })
  
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: response.find(city => city.cityName === state.search)?.id,
    options: response.map((city) => city.cityName),
    getOptionLabel: (option) => option,
    onChange: (e) => {
      setSearch(e.target.innerText)
    },
    value: state.search
  });

  return (
    <DivSearch  onKeyUp={(e) =>  setSearch(e.target.defaultValue)} >
      <div {...getRootProps()}>
        <InputInfo type="text"  placeholder="Buscar Oficina" {...getInputProps()} />
      </div>
      {groupedOptions.length > 0 ? (
        <div  >
          <Listbox {...getListboxProps()}>
            {groupedOptions.map((option, index) => (
              <li className="li-Search" {...getOptionProps({ option, index })}>{option}</li>
            ))}
          </Listbox>
        </div>
      ) : null}
    </DivSearch>
  );
};

export default Search;
