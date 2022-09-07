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

  const navigate = useNavigate()

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

  const handleSubmit = (values, actions) => {
    const objBooking = {
      time: hourDate,
      initialdate: startDateFomat,
      finalDate: endDateFomat,
      vehicle: { idVehicle: state.carId },
      user: { idUser: parseInt(state.user.map((i) => i.idUser).toString()) },
    };
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
        navigate("/")
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Reserva Exitosa',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'No se pudo hacer la reserva',
          showConfirmButton: false,
          timer: 1500
        })
      });
  };

  const handleSelectChange = (event) => {
    console.log(event);
    setHourDate(event.value);
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
                  <div style={{ flexBasis: "70%" }}>
                    <FormCard style={{ paddingBottom: "20px" }}>
                      <h1>Completa tus datos</h1>
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
                    <div>
                      <h1 className="h1Space">Seleccioná tu fecha de reserva</h1>
                      <div>
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
                      </div>
                      <h1 className="h1Space">Tu horario de llegada</h1>
                    </div>
                    <FormCard>
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
                  <FormCard style={{ width: "50%" }}>
                    <h1>Detalle de la reserva</h1>
                    <img
                      className="Img"
                      src={responseCar?.images[2].url}
                      alt={responseCar?.rangeName}
                    />
                    <p className="Pstyles">{responseCar?.category.title}</p>
                    <h1>{responseCar?.rangeName}</h1>

                    <p className="Pstyles"> 
                      {" "}
                      <MdLocationPin />
                      {responseCar?.city.cityName}
                    </p>
                    <p className="pDes">{responseCar?.description}</p>
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
                    <button className="Buttom" type="submit">
                      Confirmar Reserva
                    </button>
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
