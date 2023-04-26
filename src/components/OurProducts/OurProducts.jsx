import React from 'react'
import { ProductItem } from './ProductItem'
import styled from 'styled-components'

const StyledDiv = styled.div`
  background-color:  #f0f3f4;
  padding: 10px;



`;

const Titulo = styled.h1`
  font-size: xx-large;
`;

export const OurProducts = () => {
  return (
    <>
    <div>Div ejemplo para contrastar con fondo blanco (borrar dps)</div>
    <StyledDiv>
      <Titulo>Nuestros Productos</Titulo>
      <ProductItem/>
    
    </StyledDiv>
    </>
  )
}
