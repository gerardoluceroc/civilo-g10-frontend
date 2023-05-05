import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const TableContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
`;

const Table = styled.table`
  border-collapse: collapse;
  margin-top: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  background-color: ${({ backgroundColor }) => backgroundColor || "#4CAF50"};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-right: 10px; 
  margin-left: 10px; 
`;


const Th = styled.th`
  border: 1px solid black;
  padding: 10px;
  text-align: left;
`;

const Tr = styled.tr`
  border: 1px solid black;
`;

const Td = styled.td`
  border: 1px solid black;
  padding: 10px;
`;



const Status = styled.td`
  color: ${({ approved }) => (approved ? "green" : "red")};
`;

const ExecutiveAssignment = () => {

    const [requests, setRequests] = useState([]);
    const user = JSON.parse(sessionStorage.getItem("user"));
    const [sellers, setSellers] = useState([]);
    console.log(user.userID);

    const [selectedSeller, setSelectedSeller] = useState("");


    useEffect(() => {
        const fetchRequests = async () => {
            try {
                const response = await fetch(`http://localhost:8080/requests`);
                const data = await response.json();
                console.log(data);
                setRequests(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchRequests();

        const fetchSellers = async () => {
            try {
                const response = await fetch(`http://localhost:8080/sellers`);
                const data = await response.json();
                console.log(data);
                setSellers(data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchSellers();
    }, [user.userID]);



    return (
        <TableContainer>
            <Title>Solicitudes Asignadas</Title>
            <Table>
                <thead>
                    <Tr>
                        <Th>Identificador</Th>
                        <Th>Descripción</Th>
                        <Th>Fecha ingreso</Th>
                        <Th>Fecha limite</Th>
                        <Th>Cliente asociado</Th>
                        <Th>Estado de solicitud</Th>
                        <Th>Vendedor asociado</Th>
                    </Tr>
                </thead>
                <tbody>
                    {requests.map((request) => (
                        <Tr key={request.requestID}>
                            <Td>{request.requestID}</Td>
                            <Td>{request.description}</Td>
                            <Td>{request.admissionDate}</Td>
                            <Td>{request.deadline}</Td>
                            <Td>{`${request.user.name} ${request.user.surname}`}</Td>
                            <Status approved={request.status.statusName === "Completada"}>{request.status.statusName}</Status>
                            <Td>
                                <select value={selectedSeller} onChange={(e) => setSelectedSeller(e.target.value)}>
                                    <option value="">Seleccione un vendedor</option>
                                    {sellers.map((seller) => (
                                        <option key={seller.userID} value={seller.userID}>
                                            {`${seller.name} ${seller.surname}`}
                                        </option>
                                    ))}
                                </select>
                            </Td>

                        </Tr>
                    ))}
                </tbody>
            </Table>
            <ButtonContainer>
                <Button onClick={() => window.location.href = "/executive"}>Regresar</Button>
                <Button onClick={() => alert("Automáticamente asignado")}>Asignar Automáticamente</Button>
            </ButtonContainer>
        </TableContainer>
    );
};

export default ExecutiveAssignment;