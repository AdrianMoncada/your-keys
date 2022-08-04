import React from 'react';
import {ContainerHeader, Buttons} from './HeaderStyles';

const Header = () => {
  return (
    <ContainerHeader>
        <h1>Renta car</h1>
        <div>
            <Buttons>Iniciar Sesion</Buttons>
            <Buttons>Crear Cuenta</Buttons>
        </div>
    </ContainerHeader>
  )
}

export default Header