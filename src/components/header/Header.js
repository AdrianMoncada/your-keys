import React, { useContext, useState } from "react";
import SearchBar from "../SearchHorizontal/SearchHorizontal";
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
  const [searcher, setSearcher] = useState(false);
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
    if(window.scrollY >= 400) {
      setSearcher(true)
    } else {
      setSearcher(false)
    }
  };

  window.addEventListener("scroll", changeBackground);

  const showLogin = () => {
    if (!state.isLogin) {
      return (
        <div>
          <Buttons onClick={() => navigate("/login")}>Iniciar Sesión</Buttons>
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
                <h4 className="userName">Hola, {user.name} {user.lastName}</h4>
              </DivUserText>
            ))}
          <ButtonLogOut onClick={handleClick}>Cerrar sesión</ButtonLogOut>
        </DivUser>
      );
    }
  };

  return (
    <DivPrueba>
      <div className={`wrap-container search ${searcher ? "active" : null}`}>

        <div className={`containerHeader ${navbar ? "active" : null}`} id="hola">
            <DivImg onClick={()=> navigate("/")}>
              <Logo />
              <h1>Your Keys!</h1>
            </DivImg>
          <div>{showLogin()}</div>
        </div>
        {searcher ? <SearchBar/> : null}
      </div>
    </DivPrueba>
  );
};

export default Header;
