import styled from "styled-components";

export const DivPolicies = styled.div`
  display: flex;
  color: black;
  justify-content: center;
  gap: 20px;
  margin: 0 30px 70px 30px;
`;

export const DivPoliciesContainer = styled.div`
  color: black;
  width: 400px;
  border-right: ${({ borderLine }) => (borderLine ? null : "1px solid black")};
`;
export const DivTitlePolicies = styled.div`
  margin: 30px;
  h1 {
    text-align: center;
  }
`;