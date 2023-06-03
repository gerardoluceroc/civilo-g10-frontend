import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PAGE_READ_USERS = "/admin/readUsers";

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Agrega un espacio entre las tarjetas */
  justify-content: center; /* Centra las tarjetas horizontalmente */
`;

const CardWrapper = styled.div`
  margin-bottom: 20px; /* Agrega un margen inferior a cada tarjeta */
  
`;

const Card = styled.div`
  width: 25%;
  padding: 10px;
  border: 1px solid black; /* Agrega un borde de 1px de grosor */
`;

const Title = styled.h2`
  font-size: 1.5rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const Button = styled.a`
  background-color: #0074D9;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #004a8e;
  }
`;

const CreateButton = styled.a`
  background-color: #8BC34A; /* Verde pastel */
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    background-color: #7CB342; /* Verde pastel oscuro */
  }
`;

const DeleteButton = styled(Button)`
  background-color: #FF8A80; /* Rojo pastel */
  &:hover {
    background-color: #FF5252; /* Rojo pastel oscuro */
  }
`;

const UpdateButton = styled(Button)`
  background-color: #BA68C8; /* Morado pastel */
  &:hover {
    background-color: #9C27B0; /* Morado pastel oscuro */
  }
`;

const ReadButton = styled(Button)`
  background-color: #80D8FF; /* Azul pastel */
  &:hover {
    background-color: #40C4FF; /* Azul pastel oscuro */
  }
`;


const InformationItem = styled.div`
  background-color: #1976d2;
  border-radius: 3%;
  border-color: red;
  width: 30%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  //align-items: center;

  @media (max-width: 920px){
    width: 50%;
  }

  @media (max-width: 582px){
    width: 70%;
  }
`;

const Titulo = styled.h2`
  font-size: 1.5rem;
  margin: auto;
  margin-top: 2%;
  color: ivory;

  @media (max-width: 370px){
    font-size: larger;
  }
`;

const Boton = styled.button` 
  background-color: ivory;
  margin: auto;
  margin-top: 5%;
  margin-bottom: 5%;
  border-radius: 5px;
  border-color: black;
  color: black;
  font-size: large;
  width: 60%;
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  //Animación para cuando el cursor pase por encima del botón.
  &:hover {
      box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.25); /* Agrega una sombra */
      transform: scale(0.95); /* Reduzca ligeramente el tamaño */
    }

  /* sombra del botón */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.3s ease-in-out;
  
  /* estilo cuando se presiona el botón */
  &:active {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.4);
  }
  
  & > * {
    margin-left: 4%;
  }

/* 
  @media (max-width: 540px) {
    width: 50%;
    margin: auto;
    
  } */

`;

const AdminHome = () => {
    return (
        <CardContainer>
            <Card>
                <Title>Administración de Coberturas</Title>
                <ButtonContainer>
                    <CreateButton href="http://localhost:3000/admin/create">Crear</CreateButton>
                    <ReadButton href="http://localhost:3000/admin/readCoverages">Leer</ReadButton>
                    <UpdateButton href="http://localhost:3000/admin/update">Actualizar</UpdateButton>
                    <DeleteButton href="http://localhost:3000/admin/delete">Borrar</DeleteButton>
                </ButtonContainer>
            </Card>
            <Card>
                <Title>Administración de Cortinas</Title>
                <ButtonContainer>
                    <CreateButton href="http://localhost:3000/admin/create">Crear</CreateButton>
                    <ReadButton href="http://localhost:3000/admin/readCurtains">Leer</ReadButton>
                    <UpdateButton href="http://localhost:3000/admin/update">Actualizar</UpdateButton>
                    <DeleteButton href="http://localhost:3000/admin/delete">Borrar</DeleteButton>
                </ButtonContainer>
            </Card>
            <Card>
                <Title>Administración de Permisos</Title>
                <ButtonContainer>
                    <CreateButton href="http://localhost:3000/admin/create">Crear</CreateButton>
                    <ReadButton href="http://localhost:3000/admin/readPermissions">Leer</ReadButton>
                    <UpdateButton href="http://localhost:3000/admin/update">Actualizar</UpdateButton>
                    <DeleteButton href="http://localhost:3000/admin/delete">Borrar</DeleteButton>
                </ButtonContainer>
            </Card>
            <Card>
                <Title>Administración de Cotizaciones (en desarrollo)</Title>
                <ButtonContainer>
                    <CreateButton href="http://localhost:3000/admin/create">Crear</CreateButton>
                    <ReadButton href="http://localhost:3000/admin/read">Leer</ReadButton>
                    <UpdateButton href="http://localhost:3000/admin/update">Actualizar</UpdateButton>
                    <DeleteButton href="http://localhost:3000/admin/delete">Borrar</DeleteButton>
                </ButtonContainer>
            </Card>
            <Card>
                <Title>Administración de Solicitudes</Title>
                <ButtonContainer>
                    <CreateButton href="http://localhost:3000/admin/create">Crear</CreateButton>
                    <ReadButton href="http://localhost:3000/admin/readRequests">Leer</ReadButton>
                    <UpdateButton href="http://localhost:3000/admin/update">Actualizar</UpdateButton>
                    <DeleteButton href="http://localhost:3000/admin/delete">Borrar</DeleteButton>
                </ButtonContainer>
            </Card>
            <Card>
                <Title>Administración de Roles</Title>
                <ButtonContainer>
                    <CreateButton href="http://localhost:3000/admin/create">Crear</CreateButton>
                    <ReadButton href="http://localhost:3000/admin/readRoles">Leer</ReadButton>
                    <UpdateButton href="http://localhost:3000/admin/update">Actualizar</UpdateButton>
                    <DeleteButton href="http://localhost:3000/admin/delete">Borrar</DeleteButton>
                </ButtonContainer>
            </Card>
            <Card>
                <Title>Administración de Status</Title>
                <ButtonContainer>
                    <CreateButton href="http://localhost:3000/admin/create">Crear</CreateButton>
                    <ReadButton href="http://localhost:3000/admin/readStatus">Leer</ReadButton>
                    <UpdateButton href="http://localhost:3000/admin/update">Actualizar</UpdateButton>
                    <DeleteButton href="http://localhost:3000/admin/delete">Borrar</DeleteButton>
                </ButtonContainer>
            </Card>
            <Card>
                <Title>Administración de Usuarios</Title>
                <ButtonContainer>
                    <CreateButton href="http://localhost:3000/admin/create">Crear</CreateButton>
                    <ReadButton href="http://localhost:3000/admin/readUsers">Leer</ReadButton>
                    <UpdateButton href="http://localhost:3000/admin/update">Actualizar</UpdateButton>
                    <DeleteButton href="http://localhost:3000/admin/delete">Borrar</DeleteButton>
                </ButtonContainer>
            </Card>

            
              <InformationItem>
                <Titulo>Usuarios Registrados</Titulo>
                <Link to={PAGE_READ_USERS} style={{ textDecoration: 'none' }}>
                  <Boton>Ver Detalles</Boton>
                </Link>
              </InformationItem>

              <InformationItem>
                <Titulo>Roles Disponibles</Titulo>
                <Link to={"/"} style={{ textDecoration: 'none' }}>
                  <Boton>Ver Detalles</Boton>
                </Link>
              </InformationItem>

              <InformationItem>
                <Titulo>Cortinas Registradas</Titulo>
                <Link to={"/"} style={{ textDecoration: 'none' }}>
                  <Boton>Ver Detalles</Boton>
                </Link>
              </InformationItem>

              <InformationItem>
                <Titulo>Comunas de Cobertura</Titulo>
                <Link to={"/"} style={{ textDecoration: 'none' }}>
                  <Boton>Ver Detalles</Boton>
                </Link>
              </InformationItem>

              <InformationItem>
                <Titulo>Solicitudes de Cotización</Titulo>
                <Link to={"/"} style={{ textDecoration: 'none' }}>
                  <Boton>Ver Detalles</Boton>
                </Link>
              </InformationItem>

              <InformationItem>
                <Titulo>Cotizaciones</Titulo>
                <Link to={"/"} style={{ textDecoration: 'none' }}>
                  <Boton>Ver Detalles</Boton>
                </Link>
              </InformationItem>
            
        </CardContainer>
    )};

export default AdminHome;