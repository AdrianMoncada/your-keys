
import styled from 'styled-components';

export const DetailDiv = styled.div`
    
    display:flex;
    flex-direction: column;
    width: 100%;
    padding: 2rem 0;
    box-sizing: border-box;
    position: relative;
    top: 80px;
`
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
background-color:#FCA311;
padding: 0 0.5rem;
display: flex;
justify-content: space-between;
align-items: center;
& span  {
    font-size: 45px; 
}

`
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
