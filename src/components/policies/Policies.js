import React from "react";
import {
  DivPolicies,
  DivPoliciesContainer,
  DivTitlePolicies,
} from "./policiesStyles";

const Policies = () => {
  return (
    <div>
      <DivTitlePolicies>
        <h1>Qué tenés que saber</h1>
      </DivTitlePolicies>
      <DivPolicies>
        <DivPoliciesContainer>
          <h1>Normas del Vehiculo</h1>
          <p>Entrega del auto 10:00.</p>
          <p>No se permite fumar dentro del vehiculo.</p>
        </DivPoliciesContainer>
        <DivPoliciesContainer>
          <h1>Salud y seguridad</h1>
          <p>
            Se aplican las pautas de distanciamiento social y otras normas
            relacionadas con el coronavirus.
          </p>
          <p>GPS.</p>
          <p>Deposito de seguridad.</p>
        </DivPoliciesContainer>
        <DivPoliciesContainer >
          <h1>Política de cancelación</h1>
          <p>
            Agrega la fecha de tu viaje para obtener los detalles de la
            cancelación del servicio.
          </p>
        </DivPoliciesContainer>
      </DivPolicies>
    </div>
  );
};

export default Policies;
