import React, { useState } from "react";
import { Autocomplete, TextField, Box, Input } from "@mui/material";
import City from "../../assets/data.json";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {DivSearch} from './SearchStyles';

const Search = () => {
  const [searchInput, setSearchInput] = useState("");

  return (
    <div>
      <Autocomplete
        options={City.map((city) => city.city)}
        renderInput={(params) => (
          <DivSearch>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <LocationOnIcon className="icon" sx={{ color: "black" }} />
              <TextField
                className="textField"
                variant="filled"
                onChange={(e) => setSearchInput(e.target.value)}
                {...params}
                label="Buscar Oficina"
              />
            </Box>
          </DivSearch>
        )}
        onChange={(e) => setSearchInput(e.target.textContent)}
        freeSolo
      />
    </div>
  );
};

export default Search;
