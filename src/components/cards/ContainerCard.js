import React from 'react'
import Card from './Card'
import list from '../../assets/list.json';
import styled from 'styled-components';

const DivContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 20px;
`

const ContainerCard = () => {
  return (
    <DivContainer>
        {
            list.map((car, index) => <Card key={index} car={car} />)
        }
    </DivContainer>
  )
}

export default ContainerCard