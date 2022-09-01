import React from "react";
import { DivForm, DivContainer, DivSelect } from "./formStyles";
import { Formik, Form } from "formik";
import * as yup from "yup";
import TextFields from "../textField/TextFields";
import DateBooking from "../dateBooking/DateBooking";
import  Select  from "react-select";
import hour from "../../assets/hour.json"
import Policies from "../policies/Policies";
import HeaderCategory from "../headerCategory/HeaderCategory";

const FormBooking = () => {
  const isRequired = "Campo obligatorio";
  const validationSchema = yup.object().shape({
    name: yup.string().required(isRequired),
    lastname: yup.string().required(isRequired),
    email: yup.string().email().required(isRequired),
    city: yup.string().required(isRequired),
  });

  const handleSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
  };

  const handleSelectChange = (event) => {
    console.log(event);
  }

  return (
    <div>
      <HeaderCategory/>
      <h1>Completa tus datos</h1>
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
            <div>
              <Form>
                <DivContainer>
                  <div>
                    <TextFields
                      variant="standard"
                      label="Nombre"
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Nombre"
                    />
                    <TextFields
                      sx={{ ml: 1 }}
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
                      variant="standard"
                      label="Apellido"
                      type="text"
                      id="lastname"
                      name="lastname"
                      placeholder="Apellido"
                    />
                    <TextFields
                      sx={{ ml: 1 }}
                      variant="standard"
                      label="Ciudad"
                      type="text"
                      id="city"
                      name="city"
                      placeholder="Cordoba"
                    />
                  </div>
                </DivContainer>
              </Form>
            </div>
          )}
        </Formik>
      </DivForm>
      <h1>Seleccioná tu fecha de reserva</h1>
      <div>
        <DateBooking />
      </div>
      <h1>Tu horario de llegada</h1>
      <DivForm>
            <p>Tu auto estará listo para la entrega entre las 10:00 AM y las 11:00 PM</p>
            <DivSelect>
              <p>Indicá tu hora estimada de llegada</p>
            <Select
            defaultValue = {hour[0]}
              options={hour}
              onChange= {handleSelectChange}
            />
            </DivSelect>
      </DivForm>
      <Policies/>
    </div>
  );
};

export default FormBooking;
