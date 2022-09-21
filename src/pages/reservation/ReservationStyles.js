import styled from "styled-components";

export const DivContainerAll = styled.div`
  margin: 0;
`;

export const TitleBoking = styled.h2`
  margin-top: 100px;
`;
export const DivContainerCards = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  @media screen and (min-width: 610px) and (max-width: 1095px) {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
  @media screen and (min-width: 1095px) {
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

export const DivCard = styled.div`
  
  display: inline-block;
  justify-content: center;
  align-items: center;
  gap: 30px;
  position: relative;

  @media screen and (min-width: 610px) and (max-width: 1095px) {
    display: inline-block;
    justify-content: center;
    align-items: center;
    gap: 30px;
    position: relative;
  }

  @media screen and (min-width: 1095px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    position: relative;
  }

  .titleFecha {
    position: absolute;
    top: 455px;
    right: 23.5%;
    font-size: 18px;
    @media screen and (min-width: 610px) and (max-width: 1095px) {
      position: absolute;
      top: 315px;
      right: 35%;
      font-size: 18px;
    }
    @media screen and (min-width: 1095px) {
      position: absolute;
      top: -40px;
      right: 15%;
      font-size: 18px;
    }
  }

  .responsive-card {
    margin-bottom: 25%;
    margin-left: 6%;

    @media screen and (min-width: 610px) and (max-width: 1095px) {
      margin-bottom: 0%;
      margin-left: 0%;
      margin-bottom: 18%;
    }
    @media screen and (min-width: 1095px) {
      margin-bottom: 0%;
      margin-left: 0%;
    }
  }
`;
