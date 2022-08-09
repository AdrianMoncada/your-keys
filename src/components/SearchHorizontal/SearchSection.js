import React from 'react';
import SearchBar from './SearchBar/SearchBar';
import CitiesData from '../../assets/data.json';

function SearchSection() {
  return (
    <SearchBar placeholder='Nombre de la ciudad origen...' data={CitiesData} />
  );
}

export default SearchSection;
