import styled from "styled-components";

export const DivPolicies = styled.div`
  display: inline-flex;
  color: black;
  gap: 5px;
  margin: 0 30px;
  /*font-size: 8px;*/
  max-width: 100%;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (min-width: 320px) and (max-width: 970px) {
    display: inline-flex;
    justify-content: flex-start;
    gap: 5px;
    margin: 5px 30px;
    flex-wrap: wrap;
    flex-direction: row;
  }
  @media screen and (min-width: 970px) {
    display: inline-flex;
    color: black;
    justify-content: center;
    gap: 20px;
    margin: 0 30px 70px 30px;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const DivPoliciesContainer = styled.div`
  color: black;
  width: 100%;
  /*border-right: ${({ borderLine }) =>
    borderLine ? null : "1px solid black"};*/

  @media screen and (min-width: 320px) and (max-width: 940px) {
    color: black;
    width: 100%;
    /*border-right: ${({ borderLine }) =>
      borderLine ? null : "1px solid black"};*/
  }

  @media screen and (min-width: 940px) {
    color: black;
    width: 400px;
    /*border-right: ${({ borderLine }) =>
      borderLine ? null : "1px solid black"};*/
    justify-content: space-evenly;
  }
`;
export const DivTitlePolicies = styled.div`
  margin: 30px;
  h1 {
    text-align: center;
  }
`;
