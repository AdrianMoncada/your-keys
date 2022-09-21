import React, { useContext, useState } from "react";
import {
  DivForm,
  DivContainer,
  DivSelect,
  DivBooking,
  DivContainerBooking,
  FormCard,
  DivDisplay,
  DivDate,
  DivCheck,
  DivSize,
  DivContainerMain,
  DivPriceTotal,
  DivFormBox
} from "./formStyles";
import { Formik, Form } from "formik";
import * as yup from "yup";
import TextFields from "../textField/TextFields";
import Select from "react-select";
import hour from "../../assets/hour.json";
import Policies from "../policies/Policies";
import HeaderCategory from "../headerCategory/HeaderCategory";
import AppContext from "../../context/AppContext";
import axios from "axios";
import DatePicker from "react-datepicker";
import Moment from "moment";
import { DetailDiv } from "../../pages/vehiculo/vehiculoStyles";
import { Fragment } from "react";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { motion } from "framer-motion";
import Paypal from "../paypal/Paypal";
import PayPalButtons from "../paypal/PayPalButtons";
import Botoncito from "../Botoncito";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";

const FormBooking = () => {
  const isRequired = "Campo obligatorio";
  const validationSchema = yup.object().shape({
    name: yup.string().required(isRequired),
    lastname: yup.string().required(isRequired),
    email: yup.string().email().required(isRequired),
    city: yup.string().required(isRequired),
  });

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startDateFomat, setStartDateFomat] = useState(null);
  const [endDateFomat, setEndDateFomat] = useState(null);
  const [responseCar, setResponseCar] = useState(null);
  const [hourDate, setHourDate] = useState(null);
  const [datesBookings, setDatesBookings] = useState([]);
  const [priceVehi, setPriceVehi] = useState(null);

  const navigate = useNavigate();

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setStartDateFomat(Moment(start).format("YYYY-MM-DD"));
    setEndDateFomat(Moment(end).format("YYYY-MM-DD"));
  };
  let datesBooking = [];
  const { state } = useContext(AppContext);

  useEffect(() => {
    window.scrollTo(0, 0);

    axios({
      method: "get",
      url: `http://3.144.167.227:8080/vehicle/${state.carId}`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setResponseCar(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    const mapBooking = () => {
      state.bookingList?.map((booking) =>
        datesBooking.push({
          start: new Date(booking.initialdate),
          end: new Date(booking.finalDate),
        })
      );
      setDatesBookings(datesBooking);
    };

    mapBooking();
  }, [state]);

  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const handleSubmit = () => {
    const objBooking = {
      time: hourDate,
      initialdate: startDateFomat,
      finalDate: endDateFomat,
      vehicle: { idVehicle: state.carId },
      user: { idUser: parseInt(state.user.map((i) => i.idUser).toString()) },
    };
    const parseado = JSON.stringify(objBooking);

    /* if (startDateFomat === null && endDateFomat === null && hourDate === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Todos los campos deben estar llenos",
      });
    } else { */
    axios({
      method: "post",
      url: "http://3.144.167.227:8080/booking",
      headers: {
        "Content-Type": "application/json",
        Authorization: state.user.map((user) => user.token).toString(),
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
      data: parseado,
    })
      .then(() => {
        navigate("/");
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Reserva Exitosa",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "No se pudo hacer la reserva",
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

  const calculatePrice = (start, end) => {
    /* let rest = end?.slice(8, 10) - start?.slice(8, 10);
    let mul = rest * parseInt(responseCar?.price);
    setPriceVehi(mul); */

    var fechaInicio = new Date(start).getTime();
    var fechaFin = new Date(end).getTime();

    var diff = fechaFin - fechaInicio;

    var fecha1 = Moment(start);
    var fecha2 = Moment(end);
    let diferencia = fecha2.diff(fecha1);
    let mul =
      (diferencia / (1000 * 60 * 60 * 24)) * parseInt(responseCar?.price);
    setPriceVehi(mul);
  };

  const handleSelectChange = (event) => {
    setHourDate(event.value);
  };

  return (
    <React.StrictMode>
      <DetailDiv>
        <HeaderCategory url={`/vehiculo/${state.carId}`} />
      </DetailDiv>
      <DivContainerBooking>
        <DivForm>
          <Formik
            initialValues={{
              name: "",
              lastname: "",
              email: "",
              ciudad: "",
            }}
            validationSchema={validationSchema}
            onSubmit={(values) => handleSubmit(values)}
          >
            {(formik) => (
              <Form>
                <DivDisplay>
                  <div style={{ flexBasis: "70%" }}>
                    <FormCard style={{ paddingBottom: "20px" }}>
                      <h1 className="titleFill">Completa tus datos</h1>
                      <div
                        style={{
                          display: "inline-flex",
                          width: "100%",
                          flexDirection: "row",
                          flexWrap: "wrap",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <DivFormBox>
                          <Box
                            component="form"
                            sx={{
                              "& .MuiTextField-root": { m: 1, width: "30ch" },
                            }}
                            noValidate
                            autoComplete="off"
                          >
                            <TextField
                              fullWidth
                              label="Nombre"
                              type="text"
                              id="name"
                              name="name"
                              placeholder="Nombre"
                              defaultValue={state.user
                                .map((user) => user.name)
                                .toString()}
                            />
                            <TextField
                              /* sx={{ ml: 1 }} */
                              fullWidth
                              label="Email"
                              type="email"
                              id="email"
                              name="email"
                              placeholder="email@gmail.com"
                              defaultValue={state.user
                                .map((user) => user.email)
                                .toString()}
                            />
                          </Box>
                          <Box
                            component="form"
                            sx={{
                              "& .MuiTextField-root": { m: 1, width: "30ch" },
                            }}
                            noValidate
                            autoComplete="off"
                          >
                            <TextField
                              fullWidth
                              label="Apellido"
                              type="text"
                              id="lastname"
                              name="lastname"
                              placeholder="Apellido"
                              defaultValue={state.user
                                .map((user) => user.userLastName)
                                .toString()}
                            />
                            <TextFields
                              /* sx={{ ml: 1 }} */
                              fullWidth
                              label="Ciudad"
                              type="text"
                              id="city"
                              name="city"
                              placeholder="Ciudad"
                            />
                          </Box>
                        </DivFormBox>
                      </div>
                    </FormCard>
                    <div>
                      <h1 className="h1Spaces">
                        Seleccioná tu fecha de reserva
                      </h1>
                      <DivDate>
                        <DatePicker
                          selected={startDate}
                          onChange={onChange}
                          startDate={startDate}
                          endDate={endDate}
                          excludeDateIntervals={datesBookings}
                          monthsShown={2}
                          selectsRange
                          minDate={new Date()}
                          inline
                        />
                      </DivDate>
                    </div>
                    <FormCard>
                      <h1 className="h1Space">Tu horario de llegada</h1>
                      <p className="pIcon">
                        <AiOutlineCheckCircle className="IconCheck" />
                        Tu auto estará listo para la entrega entre las 10:00 AM
                        y las 11:00 PM
                      </p>
                      <DivSelect>
                        <p className="Phour">
                          Indicá tu hora estimada de llegada
                        </p>
                        <Select
                          className="SelectHour"
                          defaultValue={hour[0]}
                          options={hour}
                          onChange={handleSelectChange}
                        />
                      </DivSelect>
                    </FormCard>
                  </div>
                  <FormCard
                    style={{ flexBasis: "50%" }} /*style={{ width: "50%" }}*/
                  >
                    <DivSize>
                      <h1>Detalle de la reserva</h1>
                      <img
                        className="Img"
                        src={responseCar?.images[2].url}
                        alt={responseCar?.rangeName}
                      />
                      <DivContainerMain>
                        <div>
                          <p className="Pstyles categoryP">
                            {responseCar?.category.title}
                          </p>
                          <h1 className="NameP">{responseCar?.rangeName}</h1>
                        </div>
                        <p className="textPrice">
                          {formatter.format(responseCar?.price)}/día
                        </p>
                      </DivContainerMain>

                      <p className="Pstyles locationP">
                        {" "}
                        <MdLocationPin />
                        {responseCar?.city.cityName}
                      </p>
                      {/* <p className="pDes">{responseCar?.description}</p> */}
                      <hr />
                      <DivCheck>
                        <h5 className="check">Check in</h5>
                        <p className="dateCheck">
                          {startDateFomat === null
                            ? "YYYY-MM-DD"
                            : startDateFomat}
                        </p>
                      </DivCheck>
                      <hr />
                      <DivCheck>
                        <h5 className="check">Check out</h5>
                        <p className="dateCheck">
                          {endDateFomat === null ? "YYYY-MM-DD" : endDateFomat}
                        </p>
                      </DivCheck>
                      <hr />
                      <DivPriceTotal>
                        <p>{calculatePrice(startDateFomat, endDateFomat)}</p>
                        <p className="priceTotal">
                          Total:{" "}
                          <span className="price">
                            {Number.isNaN(priceVehi)
                              ? 0
                              : formatter.format(priceVehi)}
                          </span>
                        </p>
                      </DivPriceTotal>
                      {Number.isNaN(priceVehi) ? (
                        <p className="errorFields">
                          Debes completar todos los campos para realizar el pago
                        </p>
                      ) : (
                        <Paypal price={priceVehi} handleSubmit={handleSubmit} />
                      )}
                      {/* <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="Buttom"
                        type="submit"
                      >
                        Confirmar Reserva
                      </motion.button> */}
                    </DivSize>
                  </FormCard>
                </DivDisplay>
              </Form>
            )}
          </Formik>
        </DivForm>
      </DivContainerBooking>
      <Policies />
    </React.StrictMode>
  );
};

export default FormBooking;
