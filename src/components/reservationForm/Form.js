import React, { useContext, useState } from "react";
import {
  DivForm,
  DivContainer,
  DivSelect,
  DivBooking,
  DivContainerBooking,
  FormCard,
  DivDisplay,
} from "./formStyles";
import { Formik, Form } from "formik";
import * as yup from "yup";
import TextFields from "../textField/TextFields";
import DateBooking from "../dateBooking/DateBooking";
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

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    setStartDateFomat(Moment(start).format("YYYY-MM-DD"));
    setEndDateFomat(Moment(end).format("YYYY-MM-DD"));
  };

  const { state } = useContext(AppContext);
  
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

  const handleSubmit = (values, actions) => {
    const objBooking = {
      time: "13:00:00",
      initialdate: startDateFomat,
      finalDate: endDateFomat,
      vehicle: { idVehicle: state.carId },
      user: { idUser: parseInt(state.user.map((i) => i.idUser).toString()) },
    };
    console.log(objBooking);
    const parseado = JSON.stringify(objBooking);
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
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSelectChange = (event) => {
    console.log(event);
  };

  return (
    <Fragment>
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
                  <div style={{ flexBasis: "55%" }}>
                    <h1>Completa tus datos</h1>
                    <FormCard style={{ paddingBottom: "20px" }}>
                      <div
                        style={{
                          display: "inline-flex",
                          width: "100%",
                          flexDirection: "row",
                          flexWrap: "wrap",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <div>
                          <TextFields
                            fullWidth
                            variant="standard"
                            label="Nombre"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Nombre"
                          />
                          <TextFields
                            sx={{ ml: 1 }}
                            fullWidth
                            variant="standard"
                            label="Email"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="email@gmail.com"
                          />
                        </div>
                        <div>
                          <TextFields
                            fullWidth
                            variant="standard"
                            label="Apellido"
                            type="text"
                            id="lastname"
                            name="lastname"
                            placeholder="Apellido"
                          />
                          <TextFields
                            sx={{ ml: 1 }}
                            fullWidth
                            variant="standard"
                            label="Ciudad"
                            type="text"
                            id="city"
                            name="city"
                            placeholder="Cordoba"
                          />
                        </div>
                      </div>
                    </FormCard>

<<<<<<< HEAD
                <div>
                  <h1>Seleccioná tu fecha de reserva</h1>
                  <div>
                    {/* <DateBooking /> */}
                    <DatePicker
                      selected={startDate}
                      onChange={onChange}
                      startDate={startDate}
                      endDate={endDate}
                      monthsShown={2}
                      /* excludeDateIntervals={[{start: subDays(new Date(), 5), end: addDays(new Date(), 5) }]} */
                      selectsRange
                      inline
=======
                    <div>
                      <h1>Seleccioná tu fecha de reserva</h1>
                      <div>
                        <DatePicker
                          selected={startDate}
                          onChange={onChange}
                          startDate={startDate}
                          endDate={endDate}
                          monthsShown={2}
                          selectsRange
                          inline
                        />
                      </div>
                      <h1>Tu horario de llegada</h1>
                    </div>
                    <FormCard>
                      <p>
                        Tu auto estará listo para la entrega entre las 10:00 AM
                        y las 11:00 PM
                      </p>
                      <DivSelect>
                        <p>Indicá tu hora estimada de llegada</p>
                        <Select
                          defaultValue={hour[0]}
                          options={hour}
                          onChange={handleSelectChange}
                        />
                      </DivSelect>
                    </FormCard>
                  </div>
                  <FormCard>
                    <h3>Detalle de la reserva</h3>
                    <img
                      src={responseCar?.images[2].url}
                      alt={responseCar?.rangeName}
>>>>>>> d4cd42a4ad71443c8c1a9416f27c028e339b61f4
                    />
                    <p>{responseCar?.category.title}</p>
                    <h4>{responseCar?.rangeName}</h4>
                    <p>{responseCar?.description}</p>
                    <div>
                      <h5>Check in</h5>
                      <p>
                        {startDateFomat === null
                          ? "YYYY-MM-DD"
                          : startDateFomat}
                      </p>
                    </div>
                    <div>
                      <h5>Check out</h5>
                      <p>
                        {endDateFomat === null ? "YYYY-MM-DD" : endDateFomat}
                      </p>
                    </div>
                    <button type="submit">Confirmar Reserva</button>
                  </FormCard>
                </DivDisplay>
              </Form>
            )}
          </Formik>
        </DivForm>
      </DivContainerBooking>
      <Policies />
    </Fragment>
  );
};

export default FormBooking;
