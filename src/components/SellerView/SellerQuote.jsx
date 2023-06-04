import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* Modificado: Comenzar desde la parte superior */
  height: 100vh;
  overflow-y: scroll; /* Modificado: Agregado desplazamiento vertical */
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Subtitle = styled.h2`
  font-size: 18px;
  margin-top: 20px;
`;

const Table = styled.table`
  border-collapse: collapse;
  margin-top: 20px;
`;

const TableRow = styled.tr``;

const TableHeader = styled.th`
  padding: 8px;
  border: 1px solid black;
`;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid black;
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`
  margin-right: 10px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  color: white;
  cursor: pointer;
`;

const RedButton = styled(Button)`
  background-color: #ff7575;
`;

const GreenButton = styled(Button)`
  background-color: #75ff75;
`;

const SellerQuote = () => {
    const [iva, setIva] = useState(0);
    const [curtains, setCurtains] = useState([]);

    useEffect(() => {
        const fetchIva = async () => {
            try {
                const response = await fetch('http://localhost:8080/iva');
                const data = await response.json();
                setIva(data);
            } catch (error) {
                console.log(error);
            }
        };

        const fetchCurtains = async () => {
            try {
                const response = await fetch('http://localhost:8080/curtains');
                const data = await response.json();
                setCurtains(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchIva();
        fetchCurtains();
    }, []);

    const handleRegresarClick = () => {
        window.location.href = 'http://localhost:3000/';
    };

    return (
        <Container>
            <Title>Cotización</Title>
            <Subtitle>Vista Resumen</Subtitle>
            <Table>
                <tbody>
                    <TableRow>
                        <TableHeader>Costo (CLP)</TableHeader>
                        <TableHeader>Valor venta (CLP)</TableHeader>
                        <TableHeader>Descuento (CLP)</TableHeader>
                        <TableHeader>IVA (CLP)</TableHeader>
                        <TableHeader>Total (CLP)</TableHeader>
                    </TableRow>
                    <TableRow>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>-</TableCell>
                        <TableCell>{iva}%</TableCell>
                        <TableCell>-</TableCell>
                    </TableRow>
                </tbody>
            </Table>

            <Subtitle>Ingreso de costos y variables</Subtitle>
            <Table>
                <tbody>
                    <TableRow>
                        <TableHeader colSpan="2">Cortinas roller</TableHeader>
                    </TableRow>
                    <TableRow>
                        <TableCell>Tipo de cortina</TableCell>
                        <TableCell>
                            {curtains.map((curtain) => (
                                <span key={curtain.curtainID}>{curtain.curtainType}</span>
                            ))}
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Cantidad de cortinas</TableCell>
                        <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Valor por cortina</TableCell>
                        <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHeader colSpan="2">Telas</TableHeader>
                    </TableRow>
                    <TableRow>
                        <TableCell>Ancho (metros)</TableCell>
                        <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Alto (metros)</TableCell>
                        <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHeader colSpan="2">Materiales</TableHeader>
                    </TableRow>
                    <TableRow>
                        <TableCell>Valor por Bracket (CLP)</TableCell>
                        <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Valor por Tapa (CLP)</TableCell>
                        <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Valor por Contrapeso (CLP)</TableCell>
                        <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Valor por Zuncho (CLP)</TableCell>
                        <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Valor por Cadena (CLP)</TableCell>
                        <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Tipo de Tubo</TableCell>
                        <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Valor por Tubo (CLP)</TableCell>
                        <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableHeader colSpan="2">Mano de obra</TableHeader>
                    </TableRow>
                    <TableRow>
                        <TableCell>Armado (CLP)</TableCell>
                        <TableCell>-</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Instalación (CLP)</TableCell>
                        <TableCell>-</TableCell>
                    </TableRow>
                </tbody>
            </Table>

            <ButtonContainer>
                <RedButton onClick={handleRegresarClick}>Regresar</RedButton>
                <GreenButton>Cotizar</GreenButton>
            </ButtonContainer>
        </Container>
    );
};

export default SellerQuote;
