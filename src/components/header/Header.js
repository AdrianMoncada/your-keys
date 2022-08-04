import React from 'react';
import {ContainerHeader, Buttons} from './HeaderStyles';
import { useNavigate } from 'react-router';

const Header = () => {
  const navigate = useNavigate();
  
  return (
    <ContainerHeader>
        <h1>Renta car</h1>
        <div>
            <Buttons onClick={() => navigate("/login")} >Iniciar Sesion</Buttons>
            <Buttons>Crear Cuenta</Buttons>
        </div>
    </ContainerHeader>
  )
}

export default Header