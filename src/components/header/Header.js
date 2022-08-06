import React, { useContext, useState } from "react";
import {  Buttons, DivImg, DivPrueba } from "./HeaderStyles";
import { useNavigate } from "react-router";
import Logo from "../logo/Logo";
import AppContext from "../../context/AppContext";

const Header = () => {
  const {state, setLoginFalse} = useContext(AppContext);
  const [navbar, setNavbar] = useState(false)
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/")
    setLoginFalse()
  }

  const changeBackground = () => {
    if(window.scrollY >= 80) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener('scroll', changeBackground)
  
  return (
    <DivPrueba>
      <div className={`containerHeader ${navbar ? 'active' : null}`} id="hola">
        <DivImg>
          <Logo />
          <h1>Your Keys!</h1>
        </DivImg>
        <div>
        {
          !state.isLogin && <Buttons onClick={() => navigate("/login")}>Iniciar Sesion</Buttons>
        }
        {
          !state.isLogin && <Buttons>Crear Cuenta</Buttons>
        }
        {
          state.isLogin && state.user.map(user => (
            <div>
              <h4>{user.name}</h4>
              <h4>{user.name.substr(0,2)}</h4>
            </div>
          ))
        }
        {
          state.isLogin && <button onClick={handleClick}>Cerrar sesion</button>
        }
        </div>
      </div>
    </DivPrueba>
  );
};

export default Header;
