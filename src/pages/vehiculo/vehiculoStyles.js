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
export const DetailContent = styled.div`
  margin: 70px 30px;
  text-align: justify;
`;
export const DivName = styled.div`
  padding: 0.4rem 0.5rem;
  & > h3 {
    margin: 0 !important;
    font-size: 25px;
  }
  & > h1 {
    margin: 0 !important;
    font-size: 30px;
  }
`;

export const DivSpanIcon = styled.div`
  text-align: center;
  justify-content: center;
  color: gray;
  margin-right: 25px;
`;

export const DivLocation = styled.div`
  padding: 1rem 0.5rem;
  & > h3 {
    margin: 0 !important;
    font-size: 25px;
  }
  & > h1 {
    margin: 0 !important;
  }
`;

export const DivContainerCategory = styled.div`
  width: 100%;
  background-color: #fca311;
  padding: 0 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & span {
    font-size: 45px;
  }
`;
export const DivContainerLocation = styled.div`
  width: 100%;
  background-color: gray;
  padding: 0 0.5rem;
  
`;
export const SpanLocation = styled.p`
  display: flex;
  margin-bottom: 0px;

  .textSpan {
    text-align: left;
    margin: 0;
  }

  .iconLocation {
    font-size: 20px;
    margin-right: 5px;
    color: ${({ theme }) => theme.secondary};
  }
`;
export const DivPolicies = styled.div`
  display: flex;
  color: black;
  justify-content: center;
  gap: 20px;
`;
export const DivPoliciesContainer = styled.div`
  color: black;
  width: 400px;
  border-right: ${({ borderLine }) => (borderLine ? null : "1px solid black")};
`;
export const DivIcons = styled.div`
  width: 250px;
  display: inline-block;
  border-right: ${({ borderLine }) => (borderLine ? null : "1px solid black")};
  text-align: center;

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
