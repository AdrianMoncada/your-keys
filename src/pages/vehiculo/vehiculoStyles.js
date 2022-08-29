import styled from "styled-components";

export const DetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 2rem;
  box-sizing: border-box;
  position: relative;
  top: 80px;
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
  /* padding: 0 0.5rem; */
`;

export const DivPolicies = styled.div`
  display: flex;
  color: black;
  justify-content: left;
  gap: 20px;
  margin: 0 30px 70px 30px;
`;
export const DivPoliciesContainer = styled.div`
  color: black;
  width: 400px;
  border-right: ${({ borderLine }) => (borderLine ? null : "1px solid black")};
`;

export const DivGoLocation = styled.div`
  margin: 0 25px !important;
  font-size: 25px;
  position: absolute;
`;
export const DivFeatures = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  /* background-color: #d9d9d9; */
  & > h1 {
    margin: 30px;
  }
`;
export const DivCalendar = styled.div`
  margin-bottom: 70px;
  justify-content: space-evenly;
  display: flex;
  align-items: center;
`;
export const DivTitlePolicies = styled.div`
  margin: 30px;
  h1 {
    text-align: center;
  }
`;
export const DivReserve = styled.div`
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
`;
export const H1Calendar = styled.h1`
  text-align: center;
`;

export const H1TitleOffer = styled.h1`
  text-align: center;
`;
