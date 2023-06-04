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
    const [quantities, setQuantities] = useState([]);
    const [values, setValues] = useState([]);
    const [widths, setWidths] = useState([]);
    const [heights, setHeights] = useState([]);

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

    const handleQuantityChange = (index, value) => {
        const parsedValue = parseInt(value);
        const updatedQuantities = [...quantities];
        updatedQuantities[index] = parsedValue >= 0 ? parsedValue : 0;
        setQuantities(updatedQuantities);
    };

    const handleValueChange = (index, value) => {
        const parsedValue = parseInt(value);
        const updatedValues = [...values];
        updatedValues[index] = parsedValue >= 0 ? parsedValue : 0;
        setValues(updatedValues);
    };

    const handleWidthChange = (index, value) => {
        const parsedValue = parseFloat(value);
        const updatedWidths = [...widths];
        updatedWidths[index] = parsedValue >= 0 ? parsedValue : 0;
        setWidths(updatedWidths);
    };

    const handleHeightChange = (index, value) => {
        const parsedValue = parseFloat(value);
        const updatedHeights = [...heights];
        updatedHeights[index] = parsedValue >= 1 ? parsedValue : 1;
        setHeights(updatedHeights);
    };

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
                                    value={quantities[index] || '0'}
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
                                    value={values[index] || '0'}
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
                                    value={widths[index] || '1.00'}
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
                                    value={heights[index] || '1.00'}
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
