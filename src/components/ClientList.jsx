import React from 'react'
import styled from 'styled-components'
import { UsersTable } from './UsersTable';







const Container = styled.div`


    background-color: red;


`;

export const ClienList = () => {
  return (
    <Container>
        <h1>Usuarios Registrados</h1>
        <UsersTable/>
    </Container>
  )
}
