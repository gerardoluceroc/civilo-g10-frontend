import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from "@mui/material";


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


const ReadStatus = () => {
  const [status, setStatus] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/status")
      .then((response) => response.json())
      .then((data) => setStatus(data));
  }, []);

  return (
    <ListContainer>
      <Container>
        <Title>Todos los estados</Title>
      </Container>
      {status.map(state => (
        <ListItem key={state.statusID} color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}>
          <div>Identificador de estado: {state.statusID}</div>
          <div>Estado: {state.statusName}</div>
        </ListItem>
      ))}
    </ListContainer>
  );
}

export default ReadStatus;
