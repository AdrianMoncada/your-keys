import styled from "styled-components";

export const DivContainerBooking = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 3%;
`;

export const DivForm = styled.div`
  padding-bottom: 2rem;
  width: 100%;
  padding: 37.5px;
  font-size: 13px;

  .h1Space {
  margin-top: 10%;
}
`;

export const DivContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DivSelect = styled.div`
  padding: 1rem;
  width: 45%;
`;

export const DivBooking = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
  border: 1px solid red;
`;

export const FormCard = styled.div`
  background-color: #f0f0f0;
  border-radius: 10px;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.2);
  padding: 16px 10px;

.Img {
  width: 100%;
  height:300px;
  object-fit: cover;
}

.IconCheck {
margin-right: 2%;
margin-left: 2%;
font-size: 150%; 
}

.Phour {
  font-weight: bold;
  margin-left: 10%
}
.SelectHour {
  margin-left: 10%
}
.pIcon {
  font-weight: bold;
  font-size: 110%;
}

.Pstyles{
  font-size: 150%;
}

.pDes{
  text-align: justify;
}

h5{
  font-size: 140%
}



.Buttom {
  padding: 10px 20px;
  border: none;
  background-color: ${({ theme }) => theme.secondary};
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 10px 10px 10px 10px;
  color: white;
  display: flex;
  justify-content: center;
  margin: 10% auto 0 auto;
}
`;
export const DivDisplay = styled.div`
 display: flex;
 gap: 10%;
`;




