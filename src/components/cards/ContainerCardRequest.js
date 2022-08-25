import React from 'react'
import Card from './Card';
import styled from 'styled-components';

const DivContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
`

const ContainerCardRequest = ({car}) => {

  return (
    <DivContainer>
        {
            car?.map((car, index) => <Card car={car} key={index} />  )
        }
    </DivContainer>
  )
}

export default ContainerCardRequest