import React from "react";
import { DivForm } from "./formStyles";
import { Formik } from "formik";

const Form = () => {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          lastname: "",
          email: "",
          ciudad: "",
        }}
        validate={(values) =>{
            let error = {};
            if (!values.name){
                error.name = 'Por favor ingresa un nombre'
            } else if (/^[a-zA-ZÀ-ÿ\s]{1,40}$/)
            return error;
        }}
        onSubmit={(values) => {
          console.log("Formulario Enviado");
        }}
      >
        {(values, errors, handleSubmit, handleChange, handleBlur) => (
          <form className="formulario" onSubmit={handleSubmit}>
            <DivForm>
              <div>
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Juan"
                  value={values?.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors?.name && <div className="error">{errors?.name}</div>}
              </div>
              <div>
                <label htmlFor="lastname">Apellido</label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Torres"
                  value={values.lastname}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <label htmlFor="email">Correo Electronico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="email@gmail.com"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              <div>
                <label htmlFor="city">Ciudad</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  placeholder="Cordoba"
                  value={values.city}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </DivForm>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Form;
