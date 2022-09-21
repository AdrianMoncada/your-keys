import React from "react";
import Card from "./Card";
import styled from "styled-components";
import NotFound from "../../assets/NotFound";

const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

const ContainerCardRequest = ({ car }) => {
  return (
    <DivContainer>
      {car?.length === 0 ? (
        <NotFound text="No se encontraron vehículos" />
      ) : (
        car?.map((car, index) => <Card car={car} key={index} />)
      )}
    </DivContainer>
  );
};

export default ContainerCardRequest;
