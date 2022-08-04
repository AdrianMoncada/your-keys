import styled from "styled-components";

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    color: white;
`

export const Buttons = styled.button`
    padding: 15px 45px;
    margin: 0 30px;
    border: none;
    font-size: 18px;
    color: white;
    border-radius: 5px;
    background-image: linear-gradient(to right, #FCA311 50%, #E5E5E5 50%);
    background-size: 200%;
    background-repeat: no-repeat;
    background-position: left;
    transition: background-position .3s ease;

    &:hover {
        cursor: pointer;
        background-position: right;
        color: black;
    }
`