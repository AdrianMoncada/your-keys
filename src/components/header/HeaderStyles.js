import styled from "styled-components";

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme}) => theme.background};
    color: white;
    height: 80px;
    position: fixed;
    z-index: 2;
    width: 100%;
    margin-top: -80px;

    h1 {
        margin-left: 50px;
    }
`

export const Buttons = styled.button`
    padding: 15px 45px;
    margin: 0 30px;
    border: none;
    font-size: 18px;
    color: white;
    border-radius: 5px;
    background-image: linear-gradient(to right, ${({theme}) => theme.secondary} 50%, ${({theme}) => theme.third} 50%);
    background-size: 200%;
    background-repeat: no-repeat;
    background-position: left;
    transition: all .3s ease;

    &:hover {
        cursor: pointer;
        background-position: right;
        color: black;
    }
`

export const DivImg = styled.div`
    display: flex;
    align-items: center;
    justify-content: center; 
    margin-left: 5rem;
`