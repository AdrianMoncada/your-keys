import React from "react";
import { useField, ErrorMessage } from "formik";
import { Box, TextField } from "@mui/material";
import styled from "styled-components";

const DivTextField = styled.div`
  .error {
    position: absolute;
    color: red;
    font-size: 0.8rem;
    margin-top: -5px;
    margin-left: 10px;
  }
`;

const TextFields = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <DivTextField>
        <TextField
          margin="normal"
          autoComplete="off"
          {...field}
          {...props}
          label={label}
          error={meta.error && meta.touched ? true : false}
        />
      <ErrorMessage component="div" className="error" name={field.name} />
    </DivTextField>
  );
};

export default TextFields;
