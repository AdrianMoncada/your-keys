import React from "react";
import { useState } from "react";
import { LabelError, LabelAlert, LoginContainer, LoginContent, SubmitButton,SubmitButtoncContainer,DivRegistry,ARegistry} from "../styles/Login";
import Title from "../components/Login/Title/Title";
import Input from "../components/Login/Input/Input";
import {GrMail} from "react-icons/gr"

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [hasError, setHasError] = useState(false);

  function handleChange(name, value) {
    if (name === "user") {
      setUser(value);
      setHasError(false);
    } else {
      if (value.length < 6) {
        setPasswordError(true);
        setHasError(false);
      } else {
        setPasswordError(false);
        setPassword(value);
        setHasError(false);
      }
    }
  };

  function ifMatch(param) {
    if (param.user.length > 0 && param.password.length > 0) {
      if (param.user === "Eliana" && param.password === "123456") {
        const { user, password } = param;
        let ac = { user, password };
        let account = JSON.stringify(ac);
        localStorage.setItem("account", account);
        setIsLogin(true);
      } else {
        setIsLogin(false);
        setHasError(true);
      }
    } else {
      setIsLogin(false);
      setHasError(true);
    }
  };

  function handleSubmit() {
    let account = { user, password };
    if (account) {
      ifMatch(account);
    }
  };

  return (
    <LoginContainer>
      {!isLogin && (
        <LoginContent>
          <Title text="Iniciar Sesión" />
          {hasError && (
            <LabelAlert>
              Su contraseña o usuario son incorrectos, o no existen en nuestra
              plataforma.
            </LabelAlert>
          )}
          <GrMail/><Input 
            attribute={{
              id: "user",
              name: "user",
              type: "text",
              placeholder: "Correo Electrónico",
            }}
            handleChange={handleChange}
            param={passwordError}
          
          />
          <Input
            attribute={{
              id: "password",
              name: "password",
              type: "password",
              placeholder: "contraseña",
            }}
            handleChange={handleChange}
            param={passwordError}
          />
          {passwordError && (
            <LabelError>
              contraseña invalida o incompleta
            </LabelError>
          )}
          <SubmitButtoncContainer>
            <SubmitButton onClick={handleSubmit}>Ingresar</SubmitButton>
          </SubmitButtoncContainer>
          <DivRegistry>¿No tienes cuenta? <ARegistry href="#">Registrate</ARegistry></DivRegistry>
        </LoginContent>
      )}
    </LoginContainer>
  );
};

export default Login;
