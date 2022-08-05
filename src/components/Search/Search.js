import React, { useState } from "react";
import city from "../../assets/data.json";
import { styled } from '@mui/material/styles';
import { useAutocomplete } from '@mui/base/AutocompleteUnstyled';
import { autocompleteClasses } from '@mui/material/Autocomplete';
import  {InputInfo} from '../../styles/homeStyles/homeStyles';
import {DivSearch} from './SearchStyles';

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
  
  maxHeight: 200,
  border: '1px solid rgba(0,0,0,.25)',
  [`& li.${autocompleteClasses.focused}`]: {
    backgroundColor: '#4a8df6',
    color: 'white',
    cursor: 'pointer',
    
  },
  '& li:active': {
    backgroundColor: '#2977f5',
    color: 'white',
  },
}));

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  console.log("🚀 ~ file: Search.js ~ line 45 ~ Search ~ searchInput", searchInput)
  
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: 'use-autocomplete-demo',
    options: city.map((city) => city.city),
    getOptionLabel: (option) => option,
  });


  return (
    <DivSearch>
      <div {...getRootProps()}>
        <InputInfo placeholder="Buscar Oficina" {...getInputProps()} />
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {groupedOptions.map((option, index) => (
            <li className="li-Search" {...getOptionProps({ option, index })}>{option}</li>
          ))}
        </Listbox>
      ) : null}
    </DivSearch>
  );
};

export default Search;
