import styled from 'styled-components';

export const DivDate = styled.div`
    
    .titleInfos {
        font-size: 30px;
        font-weight: 500;
        display: flex;
        justify-content: center;
        align-items: center ;
        margin: 20px 0 10px 0;
    }

    .date {
        background-color: ${({theme}) => theme.third};
        border: none;
        padding: 10px 37px 10px 5px;
        margin: 5px 0;
        border-radius: 0px 10px 10px 0px;
        font-size: 15px;
        outline: none;
        /* display: flex;
        justify-content: center; */
    }
`

export const SpanIcon = styled.span`
    font-size: 22px;
    background-color: ${({theme}) => theme.third};
    padding: 0px 5px;
    margin: 0;
    
`

export const DivInput = styled.div`
    display: flex;

    .icon {
        font-size: 30px;
        margin-top: 5px;
        padding: 3px 5px 4px 5px;
        background-color: ${({theme}) => theme.third};
        border-radius: 10px 0px 0px 10px;
        color: black;
    }
`
