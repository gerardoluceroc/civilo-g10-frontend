import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ProfitMarginTable } from './ProfitMarginTable';

const Titulo = styled.h1`

  font-size: xx-large;
  display: flex;
  justify-content: center;

`;

const Container = styled.div`


    background-color: transparent;
    min-height: 700px;

`;

const ProfitMarginList = () => {

  return (
    <Container>
        <Titulo>Márgenes de Utilidad</Titulo>
        <ProfitMarginTable/>
    </Container>
    
  );
}

export default ProfitMarginList;