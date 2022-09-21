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
  DivSvgExit,
  ButtonAdmin,
  ButtonReservas
} from "./HeaderStyles";
import { useNavigate, useLocation } from "react-router";
import Logo from "../logo/Logo";
import AppContext from "../../context/AppContext";
import Avatar from "@mui/material/Avatar";
import Swal from "sweetalert2";
import { FaBars, FaTimes } from "react-icons/fa";
import styled from "styled-components";
import { ImExit } from "react-icons/im";

export const DivLupa = styled.div`
  position: sticky;
  top: 200px;
  z-index: 11;
  display: inline-block;
`;

const Header = () => {
  const location = useLocation();
  const { state, setLoginFalse, setCategoryList, setUser } =
    useContext(AppContext);
  const [navbar, setNavbar] = useState(false);
  const [searcher, setSearcher] = useState(false);
  const [showMobile, setShowMobile] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
    setShowMobile(!showMobile);
    setLoginFalse();
    setUser();
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
      title: "Sesión finalizada",
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
                  {user.name.substr(0, 1).toUpperCase()}
                  {user.userLastName.substr(0, 1).toUpperCase()}
                </Avatar>
                <h4 className="userName">
                  Hola, {user.name} {user.userLastName}
                </h4>
                {user.rol.idRol === 1 ? (
                  <ButtonAdmin
                    onClick={() => {
                      setShowMobile(!showMobile);
                      navigate("administracion");
                    }}
                  >
                    Admin
                  </ButtonAdmin>
                ) : null}
                <ButtonReservas onClick={() => navigate("/reservas")}>Reservas</ButtonReservas>
                <DivSvgExit>
                  <ImExit onClick={handleClick} />
                </DivSvgExit>
                {/* <ButtonLogOut onClick={handleClick}>Cerrar sesión</ButtonLogOut> */}
              </DivUserText>
            ))}
        </div>
      );
    }
  };

  return (
    <DivPrueba initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div
        className={`${
          location.pathname !== "/login" ? "wrap-container" : "wrap-containers"
        } search ${searcher ? "active" : null}`}
      >
        <div
          className={`containerHeader ${
            navbar || location.pathname !== "/" ? "active" : null
          }`}
          id="hola"
        >
          <DivImg
            onClick={() => {
              navigate("/");
              setShowMobile(false);
              setCategoryList(null);
            }}
          >
            <Logo />
            <h1 className="titleHeader">Your Keys!</h1>
          </DivImg>
          <MobileIcon onClick={() => setShowMobile(!showMobile)}>
            {showMobile ? (
              <FaTimes className="iconMenu" />
            ) : (
              <FaBars className="iconMenu" />
            )}
          </MobileIcon>
          <div></div>
          <DivUser open={showMobile}>{showLogin()}</DivUser>
        </div>
      </div>
      {/* <DivLupa>
        <SearchBar />
      </DivLupa> */}
    </DivPrueba>
  );
};

export default Header;
