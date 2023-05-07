import { Container } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";


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

const ReadCoverages = () => {
    const [coverages, setCoverages] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/coverages")
            .then((response) => response.json())
            .then((data) => setCoverages(data));
    }, []);

    return (
        <ListContainer>
            <Container>
                <Title>Todas las coberturas</Title>
            </Container>
            {coverages.map((coverage) => (
                <ListItem key={coverage.coverageID} color={`#${Math.floor(Math.random() * 16777215).toString(16)}`}>
                    <div>Identificador de cobertura: {coverage.coverageID}</div>
                    <div>Comuna: {coverage.commune}</div>
                </ListItem>
            ))}
        </ListContainer>
    );
};

export default ReadCoverages;