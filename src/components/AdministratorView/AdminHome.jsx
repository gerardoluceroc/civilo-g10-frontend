import React from 'react';
import styled from 'styled-components';

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
        </CardContainer>
    )};

export default AdminHome;