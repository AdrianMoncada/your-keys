import styled from "styled-components";

export const LoginContainer = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #000000;
`

export const LoginContent = styled.div `
    width: 686px;
    height: 636px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    position: absolute;
    background-color: #E5E5E5;
    border-radius: 30px;
`

export const SubmitButtoncContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

export const SubmitButton = styled.button `
    width: 30%;
    height: 40px;
    border: none;
    outline: none;
    background: #FCA311;
    color: white;
    font-size: 16px;
    font-weight: bold;

&:hover {
    opacity: 0.6;
}`

export const LabelError = styled.label `
    font-size: 12px;
    color: red;
    background: rgb(224, 204, 204);
    width: fit-content;
    height: fit-content;
    padding: 0 5px;
    box-sizing: border-box;
    border-radius: 5px;
`

export const LabelAlert = styled.label `
    font-size: 14px;
    color: red;
    background: rgb(224, 204, 204);
    width: fit-content;
    height: fit-content;
    padding: 5px;
    box-sizing: border-box;
    border-radius: 5px;
    margin-bottom: 10px;
`

export const DivRegistry = styled.div `
    margin-top: 10px;
`

export const ARegistry = styled.div `
    color: #FCA311;
    display: inline;
`
