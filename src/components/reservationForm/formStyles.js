import styled from "styled-components";

export const DivContainerBooking = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 3%;

  @media screen and (min-width: 320px) and (max-width: 970px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 3%;
  }
  @media screen and (min-width: 970px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 3%;
  }
`;

export const DivForm = styled.div`
  padding-bottom: 2rem;
  width: 100%;
  padding: 37.5px;
  font-size: 13px;

  .categoryP {
    margin-bottom: -18px;
    font-size: 18px !important;
  }

  .locationP {
    margin-bottom: -10px;
  }

  .h1Space {
    text-align: center;
  }

  .h1Spaces {
    margin-top: 25px;
    text-align: center;
  }
`;

export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DivSelect = styled.div`
  width:100%;

  @media screen and (min-width: 320px) and (max-width: 970px) {
    padding: 1rem;
    width: 45%;
    margin: 0 auto;
  }

  @media screen and (min-width: 970px) {
    padding: 1rem;
    width: 45%;
    margin: 0 auto;
  }
`;

export const DivBooking = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  border: 1px solid red;
`;

export const DivDate = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const FormCard = styled.div`
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2);
  padding: 16px 20px;
  margin-bottom: 5%;
 /* margin-top: 5%;*/

  .check {
  }

  .titleFill {
    text-align: center;
  }

  .Img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  .IconCheck {
    position: relative;
    top: 5px;
    font-size: 150%;
  }

  .Phour {
    font-weight: bold;
    width: 100%;
    display: flex;
  }
  .SelectHour {
    width: 100%;
  }
  .pIcon {
    font-weight: bold;
    font-size: 110%;
    text-align: center;
  }

  .Pstyles {
    font-size: 150%;
  }

  .pDes {
    text-align: justify;
  }

  h5 {
    font-size: 140%;
  }

  .Buttom {
    padding: 15px 20px;
    border: none;
    background-color: ${({ theme }) => theme.secondary};
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
    border-radius: 10px 10px 10px 10px;
    color: white;
    display: flex;
    justify-content: center;
    margin: 10px auto 0 auto;
  }

  @media screen and (min-width: 320px) and (max-width: 970px) {
    background-color: #f0f0f0;
    border-radius: 10px;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2);
    padding: 16px 20px;
    margin-bottom: 5%;

    .check {
    }

    .titleFill {
      text-align: center;
    }

    .Img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }

    .IconCheck {
      position: relative;
      top: 5px;
      font-size: 150%;
    }

    .Phour {
      font-weight: bold;
      margin-left: 10%;
    }
    .SelectHour {
      margin-left: 10%;
    }
    .pIcon {
      font-weight: bold;
      font-size: 110%;
      text-align: center;
    }

    .Pstyles {
      font-size: 150%;
    }

    .pDes {
      text-align: justify;
    }

    h5 {
      font-size: 140%;
    }

    .Buttom {
      padding: 15px 20px;
      border: none;
      background-color: ${({ theme }) => theme.secondary};
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
      border-radius: 10px 10px 10px 10px;
      color: white;
      display: flex;
      justify-content: center;
      margin: 10px auto 0 auto;
    }
  }
  @media screen and (min-width: 970px) {
    background-color: #f0f0f0;
    border-radius: 10px;
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2);
    padding: 16px 20px;
    margin-bottom: 5%;

    .check {
    }

    .titleFill {
      text-align: center;
    }

    .Img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }

    .IconCheck {
      position: relative;
      top: 5px;
      font-size: 150%;
    }

    .Phour {
      font-weight: bold;
      margin-left: 10%;
    }
    .SelectHour {
      margin-left: 10%;
    }
    .pIcon {
      font-weight: bold;
      font-size: 110%;
      text-align: center;
    }

    .Pstyles {
      font-size: 150%;
    }

    .pDes {
      text-align: justify;
    }

    h5 {
      font-size: 140%;
    }

    .Buttom {
      padding: 15px 20px;
      border: none;
      background-color: ${({ theme }) => theme.secondary};
      font-size: 18px;
      font-weight: 700;
      cursor: pointer;
      border-radius: 10px 10px 10px 10px;
      color: white;
      display: flex;
      justify-content: center;
      margin: 10px auto 0 auto;
    }
  }
`;

export const DivCheck = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .dateCheck {
    font-size: 15px;
  }
`;

export const DivDisplay = styled.div`
  display: inline-block;
  gap: 10%;
  @media screen and (min-width: 320px) and (max-width: 970px) {
    display: inline-block;
    gap: 10%;
  }
  @media screen and (min-width: 970px) {
    display: flex;
    gap: 10%;
  }
`;

export const DivSize = styled.div`
  width: 100%;

  .errorFields {
    text-align: center;
    font-size: 18px;
    color: red;
  }
`;

export const DivContainerMain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .textPrice {
    font-size: 15px;
    font-weight: bold;
    background-color: black;
    color: white;
    padding: 5px 5px;
  }
`

export const DivPriceTotal = styled.div`
  display: flex;
  justify-content: center;

  .priceTotal {
    font-size: 20px;
  }

  .price {
    font-weight: bold;
  }
`


export const DivFormBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`