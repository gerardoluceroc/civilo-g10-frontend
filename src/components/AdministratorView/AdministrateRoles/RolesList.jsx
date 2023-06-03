import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getAllRoles } from '../../../api/civilo_roller_api';
import { RolesTable } from './RolesTable';


const ListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 280px;
  height: 50px;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  background-color: ${props => props.color};
`;

const Title = styled.h1`
  font-size: 2rem;
  text-align: center;
  margin-top: 30px;
  margin-left: 0px;
`;












const Titulo = styled.h1`

  font-size: xx-large;
  display: flex;
  justify-content: center;

`;

const TipoUsuario = styled.h2`
  font-size: x-large;
  display: flex;
  margin-left: 3%;
  margin-top: 3%;
  width: 90%;
  margin: auto;
  padding: 1%;

`;



const Container = styled.div`


    background-color: transparent;
    min-height: 700px;

`;


const RolesList = () => {
  const [roles, setRoles] = useState([]);

  useEffect(() => {

    getAllRoles()
    .then((data) => {setRoles(data)})
    .catch((error) => {console.log("Error al obtener los roles", error)})


    // fetch("http://localhost:8080/roles")
    //   .then((response) => response.json())
    //   .then((data) => setRoles(data));
  }, []);

  return (
    <Container>
        <Titulo>Roles Disponibles</Titulo>
        <RolesTable/>
    </Container>
    























    // <ListContainer>
    //   <Container>
    //     <Title>Todos los roles</Title>
    //   </Container>
    //   {roles.map(role => (
    //     <ListItem key={role.roleID} color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}>
    //       <div>Identificador de rol: {role.roleID}</div>
    //       <div>Rol: {role.accountType}</div>
    //     </ListItem>
    //   ))}
    // </ListContainer>
  );
}

export default RolesList;
