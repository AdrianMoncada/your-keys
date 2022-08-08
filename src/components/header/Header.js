import React from 'react';
import {ContainerHeader, Buttons, DivImg} from './HeaderStyles';
import { useNavigate } from 'react-router';
import Logo from '../logo/Logo';

const Header = () => {
  const navigate = useNavigate();
  
  return (
    <ContainerHeader>
      <DivImg>
        <Logo />
        <h1>Your Keys!</h1>
      </DivImg>
        <div>
            <Buttons onClick={() => navigate("/login")} >Iniciar Sesion</Buttons>
            <Buttons onClick={() => navigate("/signup")} >Crear Cuenta</Buttons>
        </div>
    </ContainerHeader>
  )
}

export default Header