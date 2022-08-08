import React, { useContext, useState } from "react";
import {
  Buttons,
  DivImg,
  DivPrueba,
  ButtonLogOut,
  DivUser,
  DivUserText,
} from "./HeaderStyles";
import { useNavigate } from "react-router";
import Logo from "../logo/Logo";
import AppContext from "../../context/AppContext";
import Avatar from "@mui/material/Avatar";
import Swal from 'sweetalert2';

const Header = () => {
  const { state, setLoginFalse } = useContext(AppContext);
  const [navbar, setNavbar] = useState(false);
  const navigate = useNavigate();


  const handleClick = () => {
    navigate("/");
    setLoginFalse();
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-start',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Salir sesión'
    })
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);
  console.log(state);

  const showLogin = () => {
    if (!state.isLogin) {
      return (
        <div>
          <Buttons onClick={() => navigate("/login")}>Iniciar Sesion</Buttons>
          <Buttons onClick={() => navigate("/signup")}>Crear Cuenta</Buttons>
        </div>
      );
    } else {
      return (
        <DivUser>
          {state.isLogin &&
            state.user.map((user) => (
              <DivUserText>
                <Avatar>{user.name.substr(0, 1)}{user.lastName.substr(0,1)}</Avatar>
                <h4 className="userName">{user.name} {user.lastName}</h4>
              </DivUserText>
            ))}
          <ButtonLogOut onClick={handleClick}>Cerrar sesion</ButtonLogOut>
        </DivUser>
      );
    }
  };

  return (
    <DivPrueba>
      <div className={`containerHeader ${navbar ? "active" : null}`} id="hola">
        <DivImg>
          <Logo />
          <h1>Your Keys!</h1>
        </DivImg>
        <div>{showLogin()}</div>
      </div>
    </DivPrueba>
  );
};

export default Header;
