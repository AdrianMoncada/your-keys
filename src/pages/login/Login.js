import React, { useContext } from "react";
import {
  DivLogin,
  DivFormikLogin,
  DivSvgLogin,
  ButtonLogin,
} from "./LoginStyles";
import { Formik, Form, validateYupSchema } from "formik";
import TextFields from "../../components/textField/TextFields";
import { InputAdornment } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import KeyIcon from "@mui/icons-material/Key";
import SvgLogin from "../../assets/SvgLogin";
import * as Yup from "yup";
import axios from "axios";
import AppContext from "../../context/AppContext";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {
  const { userLogin, setLoginTrue, setBooking } = useContext(AppContext);
  const navigate = useNavigate();

  const validate = Yup.object({
    email: Yup.string().email("Email invalido").required("*Obligatorio*"),
    password: Yup.string().required("*Obligatorio*"),
  });

  const submitLogin = (values) => {
    axios({
      method: "post",
      url: "http://3.144.167.227:8080/auth/login",
      data: values,
    })
      .then((res) => {
        if (res.status === 200) {
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
          text: "Lamentablemente no ha podido ingresar. Por favor intente más tarde",
        })
      );
  };
  return (
    <DivLogin className="hola">
      <DivFormikLogin>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={validate}
          onSubmit={(values) => submitLogin(values)}
          handleChange={(values) => setBooking(values)}
        >
          {(formik) => (
            <div>
              
              <h1>Iniciar Sesión</h1>
              <Form>
                <TextFields
                  fullWidth
                  label="Email"
                  name="email"
                  type="text"
          variant="filled"

                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextFields
                  fullWidth
                  label="Password"
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
                />
                <ButtonLogin
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  type="submit"
                >
                  Iniciar Sesión
                </ButtonLogin>
                <p className="textA">No tienes cuenta? <Link to="/signup">Regístrate</Link></p>
              </Form>
            </div>
          )}
        </Formik>
      </DivFormikLogin>
      <DivSvgLogin>
        <SvgLogin />
      </DivSvgLogin>
    </DivLogin>
  );
};

export default Login;
