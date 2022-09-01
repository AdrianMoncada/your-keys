import React from "react";
import { DivForm, Label, Input } from "./formStyles";
import { useFormik } from "formik";
import * as yup from "yup";


 
const isRequired = "Campo obligatorio";

const validationSchema = yup.object().shape({
  name: yup.string().required(isRequired),
  lastname: yup.string().required(isRequired),
  email: yup.string().email().required(isRequired),
  city: yup.string().required(isRequired),
});

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  actions.resetForm();
};

const Form = () => {
  const { values, errors, handleBlur, touched, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        name: "",
        lastname: "",
        email: "",
        ciudad: "",
      },
      validationSchema: validationSchema,
      onSubmit,
    });

  return (
    <DivForm>
      <form onSubmit={handleSubmit} autoComplete="off">
        <Label htmlFor="name">Nombre</Label>
        <Input
          value={values.name}
          onChange={handleChange}
          type="text"
          id="name"
          name="name"
          placeholder="Juan"
          onBlur={handleBlur}
          className={errors.name && touched.name ? "input-error" : ""}
        />
        {errors.name && touched.name && <p className="error">{errors.name}</p>}

        <Label htmlFor="lastname">Apellido</Label>
        <Input
          value={values.lastname}
          onChange={handleChange}
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Torres"
          onBlur={handleBlur}
          className={errors.lastname && touched.lastname ? "input-error" : ""}
        />
        {errors.lastname && touched.lastname && (
          <p className="error">{errors.lastname}</p>
        )}

        <Label htmlFor="email">Correo Electronico</Label>
        <Input
          value={values.email}
          onChange={handleChange}
          type="email"
          id="email"
          name="email"
          placeholder="email@gmail.com"
          onBlur={handleBlur}
          className={errors.email && touched.email ? "input-error" : ""}
        />
        {errors.email && touched.email && <p className="error">{errors.email}</p>}

        <Label htmlFor="city">Ciudad</Label>
        <Input
          value={values.city}
          onChange={handleChange}
          type="text"
          id="city"
          name="city"
          placeholder="Cordoba"
          onBlur={handleBlur}
          className={errors.city && touched.city ? "input-error" : ""}
        />
        {errors.city && touched.city && <p className="error">{errors.city}</p>}
      </form>
    </DivForm>
  );
};

export default Form;
