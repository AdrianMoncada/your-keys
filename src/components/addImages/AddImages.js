import React, { useState, useEffect, useRef } from "react";
import TextFields from "../textField/TextFields";
import Button from "@mui/material/Button";
import styled from "styled-components";

const DivFormMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DivButton = styled.div`
  margin-left: 10px;
`;

const AddImages = (props) => {
  const [value, setValue] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef?.current?.focus();
  });

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      title: "Null",
      url: value,
    });

    setValue("");
  };

  return (
    <div>
      {!props.edit ? (
        <DivFormMain>
          <TextFields
            sx={{
              width: "70ch",
            }}
            label="Añade url de la imagen"
            name="maletas"
            variant="filled"
            type="text"
            value={value}
            onChange={handleChange}
            ref={inputRef}
          />
          <DivButton>
            <Button onClick={handleSubmit} variant="contained">
              Añadir
            </Button>
          </DivButton>
        </DivFormMain>
      ) : (
        <DivFormMain>
          <TextFields
            sx={{
              width: "70ch",
            }}
            label="Edita la url"
            name="editar"
            type="text"
            value={value}
            onChange={handleChange}
            ref={inputRef}
          />
          <DivButton>
            <Button onClick={handleSubmit} variant="contained">
              Editar
            </Button>
          </DivButton>
        </DivFormMain>
      )}
    </div>
  );
};

export default AddImages;
