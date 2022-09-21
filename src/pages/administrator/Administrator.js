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
import axioos from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const Administrator = () => {
  const { state } = useContext(AppContext);
  const navigate = useNavigate();
  const validates =
    yup.object(/* {
    name: yup.string().required("*Obligatorio*"),
    entrega: yup.string().required("*Obligatorio*"),
    latitud: yup.number("pon un numero válido").required("*Obligatorio*"),
    longitud: yup.number("pon un numero válido").required("*Obligatorio*"),
    descripcion: yup.string().required("*Obligatorio*"),
    puertas: yup.number("pon un numero válido").required("*Obligatorio*"),
    maletas: yup.number("pon un numero válido").required("*Obligatorio*"),
    imagenMain: yup.string().required("*Obligatorio*"),
  } */);

  const [ciudad, setCiudad] = useState(null);
  const [categoria, setcategoria] = useState(null);
  const [gaso, setGaso] = useState(null);
  const [transmicion, settransmicion] = useState(null);
  const [checked, setChecked] = React.useState(true);
  const [puertas, setPuertas] = useState(null);
  const [maletas, setMaletas] = useState(null);
  const [make, setMake] = useState(null);
  const [modele, setModele] = useState(null);
  const [urls, setUrls] = useState([]);
  const [latitud, setLatitud] = useState(null);
  const [rangeName, setRangeName] = useState(null);
  const [descripcion, setDescripcion] = useState(null);
  const [longitud, setLongitud] = useState(null);
  const [imageMain, setImageMain] = useState(null);
  const [images, setImages] = useState([]);
  const [aire, setAire] = useState(null);
  const [precio, setPrecio] = useState(null);

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

  const handleClick = () => {
    urls.map((imagen) =>
      images.push({
        title: rangeName,
        url: imagen.url,
      })
    );

    images.push({
      title: "Main",
      url: imageMain,
    });

    const objUser = {
      make: {
        idMake: make,
      },
      rangeName: rangeName,
      description: descripcion,
      price: precio,
      latitude: latitud,
      longitude: longitud,
      model: {
        idModel: modele,
      },
      city: {
        idCity: ciudad,
      },
      category: {
        id_category: categoria,
      },
      characteristics: [
        {
          idCharacteristic: gaso,
        },
        {
          idCharacteristic: transmicion,
        },
        {
          idCharacteristic: puertas,
        },
        {
          idCharacteristic: maletas,
        },
        {
          idCharacteristic: aire,
        },
      ],
      images: images,
    };
    if (
      ciudad === null ||
      categoria === null ||
      gaso === null ||
      transmicion === null ||
      puertas === null ||
      maletas === null ||
      make === null ||
      modele === null ||
      latitud === null ||
      rangeName === null ||
      descripcion === null ||
      longitud === null ||
      imageMain === null ||
      aire === null ||
      precio === null
    ) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Tienes que llenar todos los datos',
      })
    } else {
    axioos({
      method: "post",
      url: "http://3.144.167.227:8080/admin",
      headers: {
        "Content-Type": "application/json",
        Authorization: state.user.map((user) => user.token).toString(),
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
      data: objUser,
    })
      .then((res) => {
        if (res.status === 201) {
          navigate("/");
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Vehiculo creado',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
      .catch((err) => console.log(err));
    }
  };

  /* ---------------- Funciones para manejar los selectores ------------------------ */

  const handleChangeAire = (event) => {
    setAire(event.target.value);
  };

  const handleImageMain = (event) => {
    setImageMain(event.target.value);
  };

  const handleDescripcion = (event) => {
    setDescripcion(event.target.value);
  };

  const handleLongitud = (event) => {
    setLongitud(event.target.value);
  };

  const handleLatitud = (event) => {
    setLatitud(event.target.value);
  };

  const handleRangeName = (event) => {
    setRangeName(event.target.value);
  };

  const handleModele = (event) => {
    setModele(event.target.value);
  };

  const handleMake = (event) => {
    setMake(event.target.value);
  };

  const handleMaletas = (event) => {
    setMaletas(event.target.value);
  };

  const handlePuertas = (event) => {
    setPuertas(event.target.value);
  };

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
  };

  const handlePrecio = (event) => {
    setPrecio(event.target.value);
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
                    onChange={handleRangeName}
                    value={rangeName}
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
                    {category.map((option, index) => (
                      <MenuItem key={index} value={option.id_category}>
                        {option.title}
                      </MenuItem>
                    ))}
                  </TextField>
                </DivForm>

                <DivForm>
                  <TextFields
                    label="Precio"
                    name="precio"
                    variant="filled"
                    type="number"
                    onChange={handlePrecio}
                  />
                  <TextField
                    id="outlined-select-currency"
                    name="ciudad"
                    select
                    label="Ciudad"
                    onChange={handleChangeCiudad}
                    variant="filled"
                  >
                    {citys.map((option, index) => (
                      <MenuItem key={index} value={option.idCity}>
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
                    value={make}
                    name="marca"
                    onChange={handleMake}
                    variant="filled"
                  >
                    {makes.map((option, index) => (
                      <MenuItem key={index} value={option.idMake}>
                        {option.name}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Modelo"
                    name="modelo"
                    value={modele}
                    onChange={handleModele}
                    variant="filled"
                  >
                    {models.map((option, index) => (
                      <MenuItem key={index} value={option.idModel}>
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
                    onChange={handleLatitud}
                    value={latitud}
                  />
                  <TextFields
                    label="Longitud"
                    name="longitud"
                    variant="filled"
                    type="number"
                    value={longitud}
                    onChange={handleLongitud}
                  />
                </DivForm>
              </Box>
              <TextField
                label="Descripción"
                name="descripcion"
                variant="filled"
                type="text"
                multiline
                value={descripcion}
                rows={4}
                onChange={handleDescripcion}
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
                      .map((option, index) => (
                        <MenuItem key={index} value={option.idCharacteristic}>
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
                      .map((option, index) => (
                        <MenuItem key={index} value={option.idCharacteristic}>
                          {option.value}
                        </MenuItem>
                      ))}
                  </TextField>
                </DivForm>
                <DivForm>
                  <TextField
                    id="outlined-select-currency"
                    select
                    label="Combustible"
                    name="gasolina"
                    value={gaso}
                    onChange={handleChangeGaso}
                    variant="filled"
                  >
                    {characteristics
                      .filter((i) => i.nameCharacteristic === "combustible")
                      .map((option, index) => (
                        <MenuItem key={index} value={option.idCharacteristic}>
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
                      .map((option, index) => (
                        <MenuItem key={index} value={option.idCharacteristic}>
                          {option.value}
                        </MenuItem>
                      ))}
                  </TextField>
                </DivForm>
                <TextField
                  id="outlined-select-currency"
                  select
                  label="Ventilación"
                  value={aire}
                  name="aire"
                  onChange={handleChangeAire}
                  variant="filled"
                >
                  {characteristics
                    .filter((i) => i.nameCharacteristic === "aire")
                    .map((option, index) => (
                      <MenuItem key={index} value={option.idCharacteristic}>
                        {option.value}
                      </MenuItem>
                    ))}
                </TextField>
              </Box>

              <hr />

              <h4>Añade Imagenes</h4>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <TextFields
                  label="Añade imagen principal sin fondo"
                  name="imagenMain"
                  variant="filled"
                  type="text"
                  value={imageMain}
                  onChange={handleImageMain}
                  sx={{
                    width: "80ch",
                  }}
                />
              </div>
              <ListImages urls={urls} setUrls={setUrls} />

              <hr />
              <div style={{ display: "flex", justifyContent: "center" }}>
                <ButtonCreate onClick={handleClick} type="submit">
                  Crear Vehiculo
                </ButtonCreate>
              </div>
            </Form>
          </DivCardContainer>
        )}
      </Formik>
    </DivContainerAll>
  );
};

export default Administrator;
