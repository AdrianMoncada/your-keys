import React from "react";
import { useState } from "react";
import { GrMail, GrFormViewHide, GrFormView, GrUserAdd, GrKey } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { Formik, Form } from "formik";
import {
  SignUp,
  FormContainer,
  FormGroup,
  SubmitButtoncContainer,
  SubmitButton,
  LabelError,
  Login,
  ALogin,
  SpanIcon,
  SpanEye,
  PlaceHolderErrors
} from "./SignupStyles";
import TextFields from "../../components/textField/TextFields";
import * as Yup from 'yup'


const Signup = () => {
    const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordRegExp = /^.{6,30}$/;
    const nameRegExp = /^[a-zA-Zа-яА-ЯёЁ]{2,30}$/;
    const lastNameRegExp = /^[a-zA-Zа-яА-ЯёЁ]{1,30}$/;

    const validate = Yup.object({
      firstName: Yup.string()
      .max(15)
      .required('Required'),
      lastName: Yup.string()
      .max(15)
      .required('Required'),
      email: Yup.string()
      .email('Email is invalid')
      .required('Email is Required'),
      password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is Required'),
      confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Required'),
    })

    const navigate = useNavigate();
    const [email, setEmail] = React.useState({ campo: "", error: null, msgError: "Ingrese un email válido." });
    const [password, setPassword] = React.useState({ campo: "", error: null, msgError: "La contraseña debe tener más de 6 caracteres." });
    const [password2, setPassword2] = React.useState({ campo: "", error: null, msgError: "Las contraseñas deben coincidir." });
    const [name, setName] = React.useState({ campo: "", error: null, msgError: "Ingrese un nombre válido." });
    const [lastName, setLastName] = React.useState({ campo: "", error: null, msgError: "Ingrese un apellido válido." });
    const [viewPass, setViewPass] = useState(false);
    
    const onChangeEmail = (e) => { setEmail({ ...email, campo: e.target.value }) }
    const onChangePassword = (e) => { setPassword({ ...password, campo: e.target.value }) }
    const onChangePassword2 = (e) => { setPassword2({ ...password2, campo: e.target.value }) }
    const onChangeName = (e) => { setName({ ...name, campo: e.target.value }) }
    const onChangeLastName = (e) => { setLastName({ ...lastName, campo: e.target.value }) }

    const validationName = () => {
      if(!nameRegExp.test(name.campo)){
        setName({ ...name, error: true })
      }else{
        setName({ ...name, error: false })
      };
    }

    const validationLastName = () => {
      if(!lastNameRegExp.test(lastName.campo)){
        setLastName({ ...lastName, error: true })
      }else{
        setLastName({ ...lastName, error: false })
      }
    }
    const validationEmail = () => {
      return (emailRegExp.test(email.campo))
        ? setEmail({ ...email, error: false })
        : setEmail({ ...email, error: true })
    }
    
    const validationPass = () => {
      return (passwordRegExp.test(password.campo))
        ? setPassword({ ...password, error: false })
        : setPassword({ ...password, error: true })
    }
    
      const validationPass2 = () => {
        return (password.campo !== password2.campo || password2.campo === "" || password2.campo === null)
          ? setPassword2({ ...password2, error: true })
          : setPassword2({ ...password2, error: false })
      }

      

      const onSubmit = (e) => {
        e.preventDefault();

        validationEmail();
        validationPass();
        validationName();
        validationLastName();
        validationPass2();
    
        if (email.error === false &&
          password.error === false &&
          password2.error === false &&
          name.error === false &&
          lastName.error === false) {
        }else{

        }
      }
      function showPass() {
        let view = document.getElementById("password");
        let view2 = document.getElementById("confirmpassword");
        if (view.type === "password") {
          view.type = "text";
          view2.type = "text";
          setViewPass(true);
        } else {
          view.type = "password";
          view2.type = "password";
          setViewPass(false);
        }
      }
      
      return (
        <>
          <SignUp>
            <FormContainer>
              <form onSubmit={onSubmit}>
                <h1>Crear cuenta</h1>
                <FormGroup>
                  <SpanIcon>
                    <GrUserAdd/>
                  </SpanIcon>
                  <PlaceHolderErrors
                    attribute={{
                      id: "name",
                      type: "text",
                      name: "name",
                    }}
                    placeholder="Nombre"
                    value={name.campo}
                    onChange={onChangeName}
                    
                  />
                </FormGroup>
                <FormGroup>
                  <SpanIcon>
                    <GrUserAdd/>
                  </SpanIcon>
                  <PlaceHolderErrors
                    attribute={{
                      id: "lastname",
                      type: "text",
                      name: "lastname",
                    }}
                    placeholder="Apellido"
                    value={lastName.campo}
                    onChange={onChangeLastName}
                  />
                </FormGroup>
                <FormGroup>
                  <SpanIcon>
                    <GrMail />
                  </SpanIcon>
                  <PlaceHolderErrors
                    attribute={{
                      id: "email",
                      type: "email",
                      name: "email",
                    }}
                    placeholder="Correo electrónico"
                    value={email.campo}
                    onChange={onChangeEmail}
                    
                  />
                </FormGroup>
                <FormGroup>
                  <SpanIcon>
                    <GrKey/>
                  </SpanIcon>
                  <SpanEye onClick={showPass}>
                    {!viewPass && <GrFormViewHide />}
                    {viewPass && <GrFormView />}
                  </SpanEye>
                  <PlaceHolderErrors
                    attribute={{
                      name: "password",
                    }}
                    id="password"
                    placeholder="Contraseña"
                    type="password"
                    value={password.campo}
                    onChange={onChangePassword}
                    
                  />
                  <LabelError>
                  </LabelError>
                </FormGroup>
                <FormGroup>
                  <SpanIcon>
                    <GrKey/>
                  </SpanIcon>
                  <PlaceHolderErrors
                    attribute={{
                      name: "confirmPassword"
                    }}               
                    id="confirmpassword"     
                    type="password"
                    placeholder="Confirmar contraseña"
                    value={password2.campo}
                    onChange={onChangePassword2}
                  />
                </FormGroup>
                {name.error && (
                    <LabelError>{name.msgError}<br></br></LabelError>
                )}
                {lastName.error && (
                  <LabelError>{lastName.msgError}<br></br></LabelError>
                )}
                {email.error && (
                  <LabelError>{email.msgError}<br></br></LabelError>
                )}
                {password.error && (
                  <LabelError>{password.msgError}<br></br></LabelError>
                )}
                {password2.error && (
                  <LabelError>{password2.msgError}<br></br></LabelError>
                )}
                <SubmitButtoncContainer>
                  <SubmitButton onClick={onSubmit}>Crear Cuenta</SubmitButton>
                </SubmitButtoncContainer>
                <Login>
                  ¿Ya tienes una cuenta? <ALogin onClick={ () => navigate("/login")}> Iniciar Sesión </ALogin>
                </Login>
              </form>
            </FormContainer>
            <Formik
              initialValues={{
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                confirmPassword: ''
              }}
              validationSchema={validate}
              onSubmit={values => {
                console.log(values)
              }}
            >
              {
                formik => (
                  <div>
                    <h1>Crear Cuenta</h1>
                    {
                      console.log(formik.values)
                    }
                    <Form>
                      <TextFields label="First Name" name="firstName" type="text" />
                      <TextFields label="Last Name" name="lastName" type="text" />
                      <TextFields label="Email Name" name="email" type="email" />
                      <TextFields label="Password Name" name="password" type="password" />
                      <TextFields label="Confirm Password" name="confirmPassword" type="password" />
                      <button type="submit" >Crear Cuenta</button>
                    </Form>
                  </div>
                )
              }
            </Formik>
          </SignUp>
        </>
      )
}
export default Signup