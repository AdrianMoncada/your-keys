import styled from "styled-components";

export const DetailDiv = styled.div`
    display: block;
    flex-direction: column;
    width: 100%;
    padding-bottom: 2rem;
    box-sizing: border-box;
    position: relative;
    top: 60px;
  
  @media screen and (min-width: 320px) and (max-width: 940px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 2rem;
    box-sizing: border-box;
    position: relative;
    top: 80px;

  }
  @media screen and (min-width: 940px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-bottom: 2rem;
    box-sizing: border-box;
    position: relative;
    top: 80px;
  }
`;

export const DivSpanIcon = styled.div`
  text-align: center;
  justify-content: center;
  color: black;
  margin-right: 35px;
`;

export const DivIcons = styled.div`
  height: 100px;
  width: 150px;
  display: inline-block;
  /* border-right: ${({ borderLine }) =>
    borderLine ? null : "1px solid black"}; */
  text-align: center;
  background-color: ${({ number }) => (number % 2 ? "#d9d9d9" : null)};
  padding: 30px 0 0 0;
  .iconsStyles {
    width: 30px;
    height: 30px;
    text-align: center;
  }

  .nameIcons {
    display: flex;
    text-align: center;
    justify-content: center;
  }
`;

export const DetailContent = styled.div`
  margin: 70px 30px;
  text-align: justify;
  & > h1 {
    text-align: center;
  }
  & > p {
    line-height: 30px;
    font-size: 20px;
  }
`;
export const DivName = styled.div`
  padding: 0.7rem 0.5rem;
  & > h3 {
    margin: 0 25px !important;
    font-size: 20px;
  }
  & > h1 {
    margin: 0 25px !important;
    font-size: 25px;
  }
`;
export const DivLocation = styled.div`
  padding: 1.5rem 0.5rem;

  & > h3 {
    margin: 0 48px !important;
    font-size: 20px;
  }
  & > h1 {
    margin: 0 !important;
  }
`;

export const DivContainerCategory = styled.div`
  width: 100%;
  background-color: #fca311;
  /* padding: 0 0.5rem; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  & span {
    font-size: 45px;
  }
`;
export const DivContainerLocation = styled.div`
  width: 100%;
  background-color: #d9d9d9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 0 0.5rem; */
`;

export const DivGoLocation = styled.div`
  margin: 0 25px !important;
  font-size: 25px;
  position: absolute;
`;
export const DivFeatures = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  flex-wrap: wrap;
  /* background-color: #d9d9d9; */
  & > h1 {
    margin: 30px;
  }
  @media screen and (min-width: 940px) {
    width: 100%;
  }
`;
export const DivCalendar = styled.div`
  margin-bottom: 70px;
  justify-content: center;
  display: inline-flex;
  align-items: center;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 320px) and (max-width: 970px) {
    margin-bottom: 70px;
    /*margin-left: 25%;*/
    justify-content: center;
    display: inline-flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
  }

  @media screen and (min-width: 970px) {
    margin-bottom: 70px;
    justify-content: space-evenly;
    display: flex;
    align-items: center;
    flex-direction: row;
  }
`;

export const DivReserve = styled.div`
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.75);
  display: inline-flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  margin-top: 5%;

  .textBooking {
    font-size: 20px;
    font-weight: bolder;
    text-align: center;
  }

  .buttonBooking {
    padding: 15px 30px;
    font-size: 15px;
    font-weight: bold;
    background-color: ${({ theme }) => theme.darkBlue};
    border: none;
    border-radius: 10px;
    color: white;
    cursor: pointer;
    margin: 0 auto;
  }

  @media screen and (min-width: 320px) and (max-width: 970px) {
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    max-width: 100%;
    margin-top: 5%;

    .textBooking {
      font-size: 20px;
      font-weight: bolder;
      text-align: center;
    }

    .buttonBooking {
      padding: 15px 30px;
      font-size: 15px;
      font-weight: bold;
      background-color: ${({ theme }) => theme.darkBlue};
      border: none;
      border-radius: 10px;
      color: white;
      cursor: pointer;
      margin: 0 auto;
    }
  }

  @media screen and (min-width: 970px) {
    border-radius: 10px;
    -webkit-box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;

    .textBooking {
      font-size: 20px;
      font-weight: bolder;
      width: 500px;
      text-align: center;
    }

    .buttonBooking {
      padding: 15px 30px;
      font-size: 15px;
      font-weight: bold;
      background-color: ${({ theme }) => theme.darkBlue};
      border: none;
      border-radius: 10px;
      color: white;
      cursor: pointer;
      margin: 0 auto;
    }
  }
`;

export const H1Calendar = styled.h1`
  text-align: center;
`;

export const H1TitleOffer = styled.h1`
  text-align: center;
`;

export const DivCalification = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-right: 50px;

  .calificationNumber {
    font-size: 18px;
    font-weight: 800;
    background-color: black;
    color: white;
    padding: 8px 8px;
    border-radius: 50%;
    margin-right: 8px;
  }
`

export const DivPrice = styled.div`
  text-align: right;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.secondary};
`