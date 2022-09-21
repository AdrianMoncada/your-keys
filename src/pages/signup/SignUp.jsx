import React, { useContext } from "react";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import { SignUp, DivSvg, DivFormik, ButtonFormik } from "./SignupStyles";
import TextFields from "../../components/textField/TextFields";
import * as Yup from "yup";
import SvgRegister from "../../assets/SvgRegister";
import { AccountCircle } from "@mui/icons-material";
import KeyIcon from "@mui/icons-material/Key";
import axios from "axios";
import AppContext from "../../context/AppContext";
import Swal from "sweetalert2";
import InputAdornment from "@mui/material/InputAdornment";

const Signup = () => {
  const { userLogin, setLoginTrue } = useContext(AppContext);
  const navigate = useNavigate();

  const validate = Yup.object({
    firstName: Yup.string().max(15).required("*Obligatorio*"),
    lastName: Yup.string().max(15).required("*Obligatorio*"),
    email: Yup.string().email("Email invalido").required("*Obligatorio*"),
    password: Yup.string()
      .min(6, "Contraseña debe ser de 6 o más caracteres")
      .required("*Obligatorio*"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Contraseñas no coinciden")
      .required("*Obligatorio*"),
  });

  const submitRegister = (values) => {
    const objUser = {
      name: values.firstName,
      userLastName: values.lastName,
      email: values.email,
      password: values.password,
      city: "Barranquilla",
      rol: {
        idRol: 2,
      },
    };
    axios({
      method: "post",
      url: "http://3.144.167.227:8080/auth",
      data: objUser,
    })
      .then((res) => {
        if (res.status === 201) {
          userLogin(res.data);
          setLoginTrue();
          navigate("/");
          const Toast = Swal.mixin({
            toast: true,
            position: "bottom-start",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Iniciando Sesión",
          });
        }
      })
      .catch((err) =>
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Lamentablemente no ha podido registrarse. Por favor intente más tarde",
        })
      );
  };

  return (
    <>
      <SignUp>
        <DivFormik>
          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validate}
            onSubmit={(values) => submitRegister(values)}
          >
            {(formik) => (
              <div>
                <h1 className="titleCreate">Crear Cuenta</h1>
                <Form>
                  <div style={{ display: "flex" }}>
                    <TextFields
                      sx={{ mr: 2 }}
                      label="First Name"
                      name="firstName"
                      variant="filled"
                      type="text"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                      fullWidth
                    />
                    <TextFields
                      sx={{ ml: 1 }}
                      label="Last Name"
                      name="lastName"
                      type="text"
                      variant="filled"
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                      fullWidth
                    />
                  </div>
                  <TextFields
                    label="Email Name"
                    name="email"
                    variant="filled"
                    type="email"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <AlternateEmailIcon />
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                  />
                  <TextFields
                    label="Password Name"
                    name="password"
                    variant="filled"
                    type="password"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <KeyIcon />
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                  />
                  <TextFields
                    label="Confirm Password"
                    name="confirmPassword"
                    variant="filled"
                    type="password"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <KeyIcon />
                        </InputAdornment>
                      ),
                    }}
                    fullWidth
                  />
                  <ButtonFormik
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="submit"
                  >
                    Crear Cuenta
                  </ButtonFormik>
                  <p className="textA">¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link> </p>
                </Form>
              </div>
            )}
          </Formik>
        </DivFormik>
        <hr className="hrFormik" />
        <DivSvg>
          <SvgRegister />
        </DivSvg>
      </SignUp>
    </>
  );
};
export default Signup;
