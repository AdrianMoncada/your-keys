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
  color: gray;
  margin-right: 25px;
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

export const DetailContent = styled.div`
    margin-top: 70px;
`
export const DivName = styled.div`
padding: 1rem 0.5rem;
& > h3 {
    margin: 0 !important; 
}
& > h1 {
    margin: 0 !important; 
}
`
export const DivLocation = styled.div`
padding: 1rem 0.5rem;
& > h3 {
    margin: 0 !important; 
}
& > h1 {
    margin: 0 !important; 
}
`

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
`

export const New = styled.p`
padding: 1rem 2rem;
border-radius: 8px;
font-size: 2rem;
font-weight: 600;
color:white;
`
export const Size = styled.div`
padding: 1rem 2rem;
border-radius: 8px;
font-size: 2rem;
font-weight: 600;
color:white;
`
export const Desc = styled.div`
font-size: 3 rem;
    width: 100%;
    color: #08a05c;

`
export const Img = styled.img`
min-height: 300px;
object-fit: contain;
z-index: 1;
`
export const Description = styled.div`
font-size: 1.1rem;
max-width:1300px;
width:100%;
letter-spacing: 1px;
color: #5f5d5d;
margin: 0 auto;
font-weight:500;
`
export const Bdesc = styled.div`
font-size: 1.4rem;
color: #30333a;
`
export const InputDetail = styled.div`
max-width: 700px;
margin: 0 auto;
width: 100%;
margin-bottom: 2 rem;
`
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
        color: ${({theme}) => theme.secondary};
    }
`
export const DivPolicies = styled.div `
    display:flex;
    color: black;
    justify-content:center;
    gap: 20px;
    
`
export const DivPoliciesContainer = styled.div `
    color: black;
    width: 400px;
    border-right: ${({borderLine}) => borderLine ? null : "1px solid black"};
`


