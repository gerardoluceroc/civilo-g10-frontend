import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const Subtitle = styled.h2`
  font-size: 18px;
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

const SellerQuote = () => {
    const [iva, setIva] = useState(0);
    const [curtains, setCurtains] = useState([]);
    const [quoteData, setQuoteData] = useState([]);

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
                setQuoteData(createInitialQuoteData(data.length));
            } catch (error) {
                console.log(error);
            }
        };

        fetchIva();
        fetchCurtains();
    }, []);

    const createInitialQuoteData = (length) => {
        const initialData = [];
        for (let i = 0; i < length; i++) {
            initialData.push(['', 0, 0, 0, 0]);
        }
        return initialData;
    };

    const handleQuantityChange = (index, value) => {
        const parsedValue = parseInt(value);
        const updatedData = [...quoteData];
        updatedData[index][1] = parsedValue >= 0 ? parsedValue : 0;
        setQuoteData(updatedData);
    };

    const handleValueChange = (index, value) => {
        const parsedValue = parseInt(value);
        const updatedData = [...quoteData];
        updatedData[index][2] = parsedValue >= 0 ? parsedValue : 0;
        setQuoteData(updatedData);
    };

    const handleWidthChange = (index, value) => {
        const parsedValue = parseFloat(value);
        const updatedData = [...quoteData];
        updatedData[index][3] = parsedValue >= 0 ? parsedValue : 0;
        setQuoteData(updatedData);
    };

    const handleHeightChange = (index, value) => {
        const parsedValue = parseFloat(value);
        const updatedData = [...quoteData];
        updatedData[index][4] = parsedValue >= 1 ? parsedValue : 1;
        setQuoteData(updatedData);
    };

    useEffect(() => {
        // Guardar los datos por columna
        const saveData = () => {
            // Verificar si se han ingresado datos suficientes en todas las columnas
            if (quoteData.length === curtains.length) {
                const data = [];

                // Crear un objeto por cada columna y guardar los valores
                for (let i = 0; i < quoteData.length; i++) {
                    const rowData = {
                        curtainType: curtains[i].curtainType,
                        quantity: quoteData[i][1],
                        value: quoteData[i][2],
                        width: quoteData[i][3],
                        height: quoteData[i][4],
                    };
                    data.push(rowData);
                }

                // Aquí puedes enviar los datos a la API o realizar cualquier otra acción necesaria
                console.log(data);
            }
        };

        saveData();
    }, [quoteData, curtains]);

    return (
        <Container>
            <Title>Cotización</Title>
            <Subtitle>Vista Resumen</Subtitle>
            <Table>
                <tbody>
                    <TableRow>
                        <TableHeader>Costo</TableHeader>
                        <TableHeader>Valor venta</TableHeader>
                        <TableHeader>Descuento</TableHeader>
                        <TableHeader>IVA</TableHeader>
                        <TableHeader>Total</TableHeader>
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
                        <TableHeader rowSpan="3">Cortinas roller</TableHeader>
                        <TableHeader>Tipo de cortina</TableHeader>
                        {curtains.map((curtain) => (
                            <TableHeader key={curtain.curtainID}>{curtain.curtainType}</TableHeader>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableHeader>Cantidad por cortina</TableHeader>
                        {curtains.map((curtain, index) => (
                            <TableCell key={curtain.curtainID}>
                                <input
                                    type="number"
                                    value={quoteData[index][1]}
                                    onChange={(e) => handleQuantityChange(index, e.target.value)}
                                />
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableHeader>Valor por cortina (CLP)</TableHeader>
                        {curtains.map((curtain, index) => (
                            <TableCell key={curtain.curtainID}>
                                <input
                                    type="number"
                                    value={quoteData[index][2]}
                                    onChange={(e) => handleValueChange(index, e.target.value)}
                                />
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableHeader rowSpan="2">Telas</TableHeader>
                        <TableHeader>Ancho (metros)</TableHeader>
                        {curtains.map((curtain, index) => (
                            <TableCell key={curtain.curtainID}>
                                <input
                                    type="number"
                                    step="0.10"
                                    min="1"
                                    value={quoteData[index][3]}
                                    onChange={(e) => handleWidthChange(index, e.target.value)}
                                />
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableHeader>Alto (metros)</TableHeader>
                        {curtains.map((curtain, index) => (
                            <TableCell key={curtain.curtainID}>
                                <input
                                    type="number"
                                    step="0.10"
                                    min="1"
                                    value={quoteData[index][4]}
                                    onChange={(e) => handleHeightChange(index, e.target.value)}
                                />
                            </TableCell>
                        ))}
                    </TableRow>
                </tbody>
            </Table>
        </Container>
    );
};

export default SellerQuote;