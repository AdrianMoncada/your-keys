import React from "react";
import { useState } from "react";
import { GrMail, GrFormViewHide, GrFormView } from "react-icons/gr";
import { FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Title from "../components/Login/Title/Title";
import Input from "../components/Login/Input/Input";
import {
  SignUp,
  FormContainer,
  FormGroup,
  SubmitButtoncContainer,
  SubmitButton,
  LabelError,
  Login,
  ALogin
} from "../styles/Signup";
import { Div } from "../components/category/CategoryStyles";
import { Label } from "@mui/icons-material";


const Signup = () => {
    const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegExp = /^.{6,30}$/;
    const nameRegExp = /^[a-zA-Zа-яА-ЯёЁ]{2,30}$/;
    const lastNameRegExp = /^[a-zA-Zа-яА-ЯёЁ]{1,30}$/;

    const navigate = useNavigate();
    const [email, setEmail] = React.useState({ campo: "", error: null, mensajeError: "Ingrese un email válido." });
    const [password, setPassword] = React.useState({ campo: "", error: null, mensajeError: "La contraseña debe tener más de 6 caracteres." });
    const [password2, setPassword2] = React.useState({ campo: "", error: null, mensajeError: "Las contraseñas deben coincidir." });
    const [name, setName] = React.useState({ campo: "", error: null, mensajeError: "Ingrese un nombre válido." });
    const [lastName, setLastName] = React.useState({ campo: "", error: null, mensajeError: "Ingrese un apellido válido." });

    const onChangeEmail = (e) => { setEmail({ ...email, campo: e.target.value }) }
    const onChangePassword = (e) => { setPassword({ ...password, campo: e.target.value }) }
    const onChangePassword2 = (e) => { setPassword2({ ...password2, campo: e.target.value }) }
    const onChangeName = (e) => { setName({ ...name, campo: e.target.value }) }
    const onChangeLastName = (e) => { setLastName({ ...lastName, campo: e.target.value }) }

    
    
    const validacionName = () => {
      return (name.campo === "" || name.campo === null || !nameRegExp.test(name.campo))  
        ? setName({ ...name, error: true })
        : setName({ ...name, error: false })
    }
  
    const validacionLastName = () => {
      return (lastName.campo === "" || lastName.campo === null || !lastNameRegExp.test(lastName.campo)) 
        ? setLastName({ ...lastName, error: true })
        : setLastName({ ...lastName, error: false })
    }
    
      const validacionEmail = () => {
        return (emailRegExp.test(email.campo))
          ? setEmail({ ...email, error: false })
          : setEmail({ ...email, error: true })
      }
    
      const validacionPass = () => {
        return (passwordRegExp.test(password.campo))
          ? setPassword({ ...password, error: false })
          : setPassword({ ...password, error: true })
      }
    
      const validacionPass2 = () => {
        return (password.campo !== password2.campo || password2.campo === "" || password2.campo === null)
          ? setPassword2({ ...password2, error: true })
          : setPassword2({ ...password2, error: false })
      }
    
      // Envio de form si es válido y redireccion al login para obtención de token
      const onSubmit = (e) => {
        e.preventDefault();
    
        validacionEmail();
        validacionPass();
        validacionPass2();
        validacionName();
        validacionLastName();
    
        if (email.error === false &&
          password.error === false &&
          password2.error === false &&
          name.error === false &&
          lastName.error === false) {
        }
      }
      return (
        <>
          <SignUp>
            <FormContainer>
              <form onSubmit={onSubmit}>
                <h1>Crear cuenta</h1>
                <FormGroup>
                  <Input
                    attribute={{
                      id: "name",
                      type: "text",
                      name: "name",
                      placeholder: "Nombre",
                      autoComplete: "username",
                    }}
                    onChange = {onChangeName}
                    onBlur = {validacionName}
                  />
                  <LabelError>
                    {name.error && <div className='error'><small>{name.mensajeError}</small></div>}
                  </LabelError>
                </FormGroup>
                <FormGroup>
                  <Input
                    attribute={{
                      id: "lastname",
                      type: "text",
                      name: "lastname",
                      placeholder: "Last Name",
                      autoComplete: "lastname"
                    }}
                    value={lastName.campo}
                    onChange={onChangeLastName}
                    onBlur={validacionLastName}
                  />
                  <LabelError>
                    {lastName.error && <div className='error'><small>{lastName.mensajeError}</small></div>}
                  </LabelError>
                </FormGroup>
                <FormGroup>
                  <Input
                    attribute={{
                      id: "email",
                      type: "email",
                      name: "email",
                      placeholder: "Correo electrónico",
                      autoComplete: "email"
                    }}
                    value={email.campo}
                    onChange={onChangeEmail}
                    onBlur={validacionEmail}
                  />
                  <LabelError>
                    {email.error && <div className='error'><small>{email.mensajeError}</small></div>}
                  </LabelError>
                </FormGroup>
                <FormGroup>
                  <Input 
                    attribute={{
                      id: "password",
                      type: "password",
                      name: "password",
                      placeholder: "Contraseña",
                      autoComplete: "current-password"
                    }}
                    value={password.campo}
                    onChange={onChangePassword}
                    onBlur={validacionPass}
                  />
                  <LabelError>
                    {password.error && <div className='error'><small>{password.mensajeError}</small></div>}
                  </LabelError>
                </FormGroup>
                <FormGroup>
                  <Input 
                    attribute={{
                      id: "confirmpassword",
                      type: "password",
                      name: "confirmPassword",
                      placeholder: "Confirmar contraseña",
                      autoComplete: "current-password"
                    }}
                    value={password2.campo}
                    onChange={onChangePassword2}
                    onBlur={validacionPass2}
                  />
                  <LabelError>
                    {password2.error && <div className='error'><small>{password2.mensajeError}</small></div>}
                  </LabelError>
                </FormGroup>
                <SubmitButtoncContainer>
                  <SubmitButton onClick={onSubmit}>Crear Cuenta</SubmitButton>
                </SubmitButtoncContainer>
                <Login>
                  ¿Ya tienes una cuenta? <ALogin onClick={ () => navigate("/login")}> Iniciar Sesion </ALogin>
                </Login>
              </form>
            </FormContainer>
          </SignUp>
        </>
      )
}
export default Signup