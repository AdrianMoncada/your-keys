import React, { useContext, useState } from "react";
import SearchBar from "../SearchHorizontal/SearchHorizontal";
import {
  Buttons,
  DivImg,
  DivPrueba,
  ButtonLogOut,
  DivUser,
  DivUserText,
  MobileIcon,
} from "./HeaderStyles";
import { useNavigate, useLocation } from "react-router";
import Logo from "../logo/Logo";
import AppContext from "../../context/AppContext";
import Avatar from "@mui/material/Avatar";
import Swal from "sweetalert2";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const location = useLocation();
  const { state, setLoginFalse } = useContext(AppContext);
  const [navbar, setNavbar] = useState(false);
  const [searcher, setSearcher] = useState(false);
  const [showMobile, setShowMobile] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    setShowMobile(!showMobile);
    setLoginFalse();
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
      title: "Salir sesión",
    });
  };

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
    if (window.scrollY >= 400) {
      setSearcher(true);
    } else {
      setSearcher(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  const showLogin = () => {
    if (!state.isLogin) {
      return (
        <div open={showMobile}>
          {location.pathname === "/login" ? null : (
            <Buttons
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                navigate("/login");
                setShowMobile(!showMobile);
              }}
            >
              Iniciar Sesión
            </Buttons>
          )}

          {location.pathname === "/signup" ? null : (
            <Buttons
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                navigate("/signup");
                setShowMobile(!showMobile);
              }}
            >
              Crear Cuenta
            </Buttons>
          )}
        </div>
      );
    } else {
      return (
        <div open={showMobile}>
          {state.isLogin &&
            state.user.map((user) => (
              <DivUserText>
                <Avatar>
                  {user.name.substr(0, 1)}
                  {user.lastName.substr(0, 1)}
                </Avatar>
                <h4 className="userName">
                  {user.name} {user.lastName}
                </h4>
                <ButtonLogOut onClick={handleClick}>Cerrar sesion</ButtonLogOut>
              </DivUserText>
            ))}
        </div>
      );
    }
  };

  return (
    <DivPrueba initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className={`wrap-container search ${searcher ? "active" : null}`}>
        <div
          className={`containerHeader ${
            navbar || location.pathname !== "/" ? "active" : null
          }`}
          id="hola"
        >
          <DivImg
            onClick={() => {
              navigate("/");
              setShowMobile(!showMobile);
            }}
          >
            <Logo />
            <h1>Your Keys!</h1>
          </DivImg>
          <MobileIcon onClick={() => setShowMobile(!showMobile)}>
            {showMobile ? (
              <FaTimes className="iconMenu" />
            ) : (
              <FaBars className="iconMenu" />
            )}
          </MobileIcon>
          <DivUser open={showMobile}>{showLogin()}</DivUser>
        </div>
        {location.pathname === "/" ? searcher ? <SearchBar /> : null : null}
      </div>
    </DivPrueba>
  );
};

export default Header;
