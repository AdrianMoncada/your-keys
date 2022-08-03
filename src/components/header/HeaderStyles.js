import styled from "styled-components";

export const ContainerHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black;
    color: white;
`

export const Buttons = styled.button`
    padding: 20px 25px;
    margin: 0 30px;
    border: none;
    background-color: #FCA311;
    font-size: 18px;
    color: white;
    border-radius: 5px;

    &:hover {
        cursor: pointer;
    }
`