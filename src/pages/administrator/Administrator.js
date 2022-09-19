import React, { useState, useContext } from "react";
import { Formik, Form } from "formik";
import TextFields from "../../components/textField/TextFields";
import Select from "react-select";
import category from "../../assets/category.json";
import ciudades from "../../assets/data.json";
import gas from "../../assets/gas.json";
import transmition from "../../assets/transmition.json";
import {
  DivForm,
  DivContainerAll,
  ButtonCreate,
  DivCardContainer,
} from "./AdministratorStyles";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import * as yup from "yup";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import AddImages from "../../components/addImages/AddImages";
import ListImages from "../../components/addImages/ListImages";
import AppContext from "../../context/AppContext";
import axios from "../../apis/axiosRequest";
import useRequest from "../../hooks/useRequest";
import { useEffect } from "react";

const Administrator = () => {
  const { state } = useContext(AppContext);

  const validates = yup.object({
    name: yup.string().required("*Obligatorio*"),
    entrega: yup.string().required("*Obligatorio*"),
    latitud: yup.number("pon un numero válido").required("*Obligatorio*"),
    longitud: yup.number("pon un numero válido").required("*Obligatorio*"),
    descripcion: yup.string().required("*Obligatorio*"),
    puertas: yup.number("pon un numero válido").required("*Obligatorio*"),
    maletas: yup.number("pon un numero válido").required("*Obligatorio*"),
    imagenMain: yup.string().required("*Obligatorio*"),
  });

  const [ciudad, setCiudad] = useState("");
  const [categoria, setcategoria] = useState("");
  const [gaso, setGaso] = useState(null);
  const [transmicion, settransmicion] = useState("");
  const [checked, setChecked] = React.useState(false);
  const [puertas, setPuertas] = useState();
  const [maletas, setMaletas] = useState()

  const [citys] = useRequest({
    axiosInstance: axios,
    method: "GET",
    url: `/city`,
  });

  const [category] = useRequest({
    axiosInstance: axios,
    method: "GET",
    url: `/category`,
  });

  const [makes] = useRequest({
    axiosInstance: axios,
    method: "GET",
    url: `/vehicle/makes`,
  });

  const [models] = useRequest({
    axiosInstance: axios,
    method: "GET",
    url: `/vehicle/models`,
  });

  const [characteristics] = useRequest({
    axiosInstance: axios,
    method: "GET",
    url: `/vehicle/characteristics`,
  });

  useEffect(() => {}, []);

  const onSubmit = (values) => {
    console.log(values);
  };

  /* ---------------- Funciones para manejar los selectores ------------------------ */

  const handleMaletas = (event) => {
    setMaletas(event.target.value)
  }

  const handlePuertas = (event) => {
    setPuertas(event.target.value)
  }

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleChangeCiudad = (event) => {
    setCiudad(event.target.value);
  };

  const handleChangeTransmicion = (event) => {
    settransmicion(event.target.value);
  };

  const handleChangeCategoria = (event) => {
    setcategoria(event.target.value);
  };

  const handleChangeGaso = (event) => {
    setGaso(event.target.value);
    console.log(event.target.value);
  };

  /* ------------------------------------------------ */

  return (
    <DivContainerAll>
      <Formik
        initialValues={{
          name: "",
          entrega: "",
          latitud: 0,
          longitud: 0,
          descripcion: "",
          puertas: 0,
          maletas: 0,
          imagenMain: "",
        }}
        validationSchema={validates}
        onSubmit={(values) => onSubmit(values)}
      >
        {(formik) => (
          <DivCardContainer>
            <h1 className="title">Crear Vehiculo</h1>
            <Form>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "40ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <DivForm>
                  <TextFields
                    label="Nombre del Vehiculo"
                    name="name"
                    variant="filled"
                    type="text"
                  />
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Categoría"
                    name="categoria"
                    variant="filled"
                    value={categoria}
                    onChange={handleChangeCategoria}
                  >
                    {category.map((option) => (
                      <MenuItem
                        key={option.id_category}
                        value={option.id_category}
                      >
                        {option.title}
                      </MenuItem>
                    ))}
                  </TextField>
                </DivForm>

                <DivForm>
                  <TextFields
                    label="Punto de Entrega"
                    name="entrega"
                    variant="filled"
                    type="text"
                  />
                  <TextField
                    id="outlined-select-currency"
                    name="ciudad"
                    select
                    label="Ciudad"
                    onChange={handleChangeCiudad}
                    variant="filled"
                  >
                    {citys.map((option) => (
                      <MenuItem key={option.idCity} value={option.idCity}>
                        {option.cityName}
                      </MenuItem>
                    ))}
                  </TextField>
                </DivForm>

                <DivForm>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Marca"
                    value={ciudad}
                    name="marca"
                    onChange={handleChangeCiudad}
                    variant="filled"
                  >
                    {makes.map((option) => (
                      <MenuItem key={option.idMake} value={option.idMake}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Modelo"
                    name="modelo"
                    value={ciudad}
                    onChange={handleChangeCiudad}
                    variant="filled"
                  >
                    {models.map((option) => (
                      <MenuItem key={option.idModel} value={option.idModel}>
                        {option.year}
                      </MenuItem>
                    ))}
                  </TextField>
                </DivForm>
                <DivForm>
                  <TextFields
                    label="Latitud"
                    name="latitud"
                    variant="filled"
                    type="number"
                  />
                  <TextFields
                    label="Longitud"
                    name="longitud"
                    variant="filled"
                    type="number"
                  />
                </DivForm>
              </Box>
              <TextField
                label="Descripción"
                name="descripcion"
                variant="filled"
                type="text"
                multiline
                rows={4}
                sx={{
                  m: 1,
                  width: "81.5ch",
                }}
              />

              <hr />

              <h3>Caracteristicas</h3>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "40ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <DivForm>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Puertas"
                    value={puertas}
                    name="puertas"
                    onChange={handlePuertas}
                    variant="filled"
                  >
                    {characteristics
                      .filter((i) => i.nameCharacteristic === "puertas")
                      .map((option) => (
                        <MenuItem key={option.idCharacteristic} value={option.idCharacteristic}>
                          {option.value}
                        </MenuItem>
                      ))}
                  </TextField>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Maletas"
                    value={maletas}
                    name="maletas"
                    onChange={handleMaletas}
                    variant="filled"
                  >
                    {characteristics
                      .filter((i) => i.nameCharacteristic === "maletas")
                      .map((option) => (
                        <MenuItem key={option.idCharacteristic} value={option.idCharacteristic}>
                          {option.value}
                        </MenuItem>
                      ))}
                  </TextField>
                </DivForm>
                <DivForm>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Gasolina"
                    name="gasolina"
                    value={gaso}
                    onChange={handleChangeGaso}
                    variant="filled"
                  >
                    {characteristics
                      .filter((i) => i.nameCharacteristic === "combustible")
                      .map((option) => (
                        <MenuItem
                          key={option.idCharacteristic}
                          value={option.idCharacteristic}
                        >
                          {option.value}
                        </MenuItem>
                      ))}
                  </TextField>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Transmición"
                    value={transmicion}
                    name="transmicion"
                    onChange={handleChangeTransmicion}
                    variant="filled"
                  >
                    {characteristics
                      .filter((i) => i.nameCharacteristic === "transmición")
                      .map((option) => (
                        <MenuItem key={option.idCharacteristic} value={option.idCharacteristic}>
                          {option.value}
                        </MenuItem>
                      ))}
                  </TextField>
                </DivForm>
                <FormControlLabel
                  name="aireAcondicionado"
                  sx={{
                    ml: 0.1,
                  }}
                  control={
                    <Checkbox
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                    />
                  }
                  label="Aire Acondicionado"
                />
              </Box>

              <hr />

              <h4>Añade Imagenes</h4>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <TextFields
                  label="Añade imagen principal sin fondo"
                  name="imagenMain"
                  variant="filled"
                  type="text"
                  sx={{
                    width: "80ch",
                  }}
                />
              </div>
              <ListImages />

              <hr />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <ButtonCreate>Crear Vehiculo</ButtonCreate>
              </div>
            </Form>
          </DivCardContainer>
        )}
      </Formik>
    </DivContainerAll>
  );
};

export default Administrator;
