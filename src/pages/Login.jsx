import React, { useContext } from "react";
import { useState } from "react";
import {
  LabelError,
  LoginContainer,
  LoginContent,
  SubmitButton,
  SubmitButtoncContainer,
  DivRegistry,
  ARegistry,
  DivIcon,
  DivIconPass,
  SpanIcon,
  SpanEye,
} from "../styles/Login";
import Title from "../components/Login/Title/Title";
import Input from "../components/Login/Input/Input";
import { GrMail, GrFormViewHide, GrFormView } from "react-icons/gr";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AppContext from "../context/AppContext";
import users from '../assets/users.json';

const Login = () => {
  const {setLoginTrue, userLogin} = useContext(AppContext);
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [emailPassError, setEmailPassError] = useState(false);
  const [viewPass, setViewPass] = useState(false);
  const [buttonPress, setButtonPress] = useState(false);
  const emailRegex =
    /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    /* if(isLogin) {
      navigate("/")

    } */

  function handleChange(name, value) {
    if (name === "user") {
      if (!emailRegex.test(value) && buttonPress) {
        setEmailError(true);
        setEmailPassError(false);
      } else {
        setUser(value);
        setEmailError(false);
      }
    } else {
      if (value.length < 6 && buttonPress) {
        setPasswordError(true);
        setEmailPassError(false);
      } else {
        setPasswordError(false);
        setPassword(value);
      }
    }
  }

  function isValidInputs(param) {
    let isValid = true;
    setEmailError(false);
    setPasswordError(false);
    if (!emailRegex.test(param.user)) {
      setEmailError(true);
      isValid = false;
    }
    if (param.password.length < 6) {
      setPasswordError(true);
      isValid = false;
    }
    return isValid;
  }

  function ifMatch(param) {
    if (users.some(user => user.email === param.user && user.password === param.password)) {
      navigate("/")
      setIsLogin();
      userLogin(users.find(user => user.email === param.user))
      setLoginTrue();
      const { user, password } = param;
      let ac = { user, password };
      let account = JSON.stringify(ac);
      localStorage.setItem("account", account);
    } else {
      setEmailPassError(true);
    }
  }

  function handleSubmit() {
    let account = { user, password };
    setButtonPress(true);
    if (isValidInputs(account)) {
      ifMatch(account);
    }
  }

  function showPass() {
    let view = document.getElementById("password");
    if (view.type === "password") {
      view.type = "text";
      setViewPass(true);
    } else {
      view.type = "password";
      setViewPass(false);
    }
  }
  return (
    <LoginContainer>
      {!isLogin && (
        <LoginContent>
          <Title text="Iniciar Sesión" />
          <DivIcon>
            <SpanIcon>
              <GrMail />
            </SpanIcon>
            <Input
              attribute={{
                id: "user",
                name: "user",
                type: "email",
                placeholder: "Correo Electrónico",
              }}
              handleChange={handleChange}
              param={emailError}
            />
          </DivIcon>
          <DivIconPass>
            <SpanIcon>
              <FaLock />
            </SpanIcon>
            <SpanEye onClick={showPass}>
              {!viewPass && <GrFormViewHide />}
              {viewPass && <GrFormView />}
            </SpanEye>
            <Input
              attribute={{
                id: "password",
                name: "password",
                type: "password",
                placeholder: "Contraseña",
              }}
              handleChange={handleChange}
              param={passwordError}
            />
          </DivIconPass>
          {/* {passwordError && (
            <LabelError>
              La contraseña debe tener al menos 6 caracteres
            </LabelError>
          )}
          {emailError && (
            <LabelError>El email ingresado no es válido</LabelError>
          )} */}
          {emailPassError && (
            <LabelError>El usuario o contraseña inválidos</LabelError>
          )}
          <SubmitButtoncContainer>
            <SubmitButton onClick={handleSubmit}>Ingresar</SubmitButton>
          </SubmitButtoncContainer>
          <DivRegistry>
            ¿No tienes cuenta? <ARegistry onClick={() => navigate("/signup")} >Registrate</ARegistry>
          </DivRegistry>
        </LoginContent>
      )}
    </LoginContainer>
  );
};

export default Login;
