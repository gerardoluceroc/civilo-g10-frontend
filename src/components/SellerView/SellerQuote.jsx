import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RUTA_CORTINAS, RUTA_GET_IVA, URL_CIVILO, RUTA_TUBOS } from '../../api/civilo_roller_api';

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
    const [pipes, setPipes] = useState([]);

    useEffect(() => {
        const fetchIva = async () => {
            try {
                const response = await fetch(`${URL_CIVILO}${RUTA_GET_IVA}`);
                const data = await response.json();
                setIva(data);
            } catch (error) {
                console.log("Error al obtener IVA:", error);
            }
        };

        const fetchCurtains = async () => {
            try {
                const response = await fetch(`${URL_CIVILO}${RUTA_CORTINAS}`);
                const data = await response.json();
                setCurtains(data);
                setQuoteData(createInitialQuoteData(data.length));
            } catch (error) {
                console.log("Error al obtener las cortinas: ", error);
            }
        };

        const fetchPipes = async () => {
            try {
                const response = await fetch(`${URL_CIVILO}${RUTA_TUBOS}`);
                const data = await response.json();
                setPipes(data)
                console.log(pipes)
            } catch (error) {
                console.log("Error al obtener las tuberías:", error);
            }
        };


        fetchIva();
        fetchCurtains();
        fetchPipes();
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

    const handleBracketChange = (index, value) => {
        const parsedValue = parseFloat(value);
        const updatedData = [...quoteData];
        updatedData[index][5] = parsedValue >= 1 ? parsedValue : 1;
        setQuoteData(updatedData);
    };

    const handleCapChange = (index, value) => {
        const parsedValue = parseFloat(value);
        const updatedData = [...quoteData];
        updatedData[index][6] = parsedValue >= 1 ? parsedValue : 1;
        setQuoteData(updatedData);
    };

    const handleCounterWeightChange = (index, value) => {
        const parsedValue = parseFloat(value);
        const updatedData = [...quoteData];
        updatedData[index][7] = parsedValue >= 1 ? parsedValue : 1;
        setQuoteData(updatedData);
    };

    const handleBandChange = (index, value) => {
        const parsedValue = parseFloat(value);
        const updatedData = [...quoteData];
        updatedData[index][8] = parsedValue >= 1 ? parsedValue : 1;
        setQuoteData(updatedData);
    };

    const handleChainChange = (index, value) => {
        const parsedValue = parseFloat(value);
        const updatedData = [...quoteData];
        updatedData[index][9] = parsedValue >= 1 ? parsedValue : 1;
        setQuoteData(updatedData);
    };

    const handlePipeChange = (index, value) => {
        const parsedValue = parseFloat(value);
        const updatedData = [...quoteData];
        updatedData[index][11] = parsedValue >= 1 ? parsedValue : 1;
        setQuoteData(updatedData);
    };

    const handlePipeTypeChange = (index, value) => {
        const updatedData = [...quoteData];
        updatedData[index][10] = value;
        setQuoteData(updatedData);
    };

    const handleAssemblyChange = (index, value) => {
        const updatedData = [...quoteData];
        updatedData[index][12] = value;
        setQuoteData(updatedData);
    };

    const handleInstallationChange = (index, value) => {
        const updatedData = [...quoteData];
        updatedData[index][13] = value;
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
                        bracket: quoteData[i][5],
                        cap: quoteData[i][6],
                        counterWeight: quoteData[i][7],
                        band: quoteData[i][8],
                        chain: quoteData[i][9],
                        pipeType: quoteData[i][10],
                        pipe: quoteData[i][11],
                        assembly: quoteData[i][12],
                        installation: quoteData[i][13],
                    };
                    data.push(rowData);
                }
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
                    <TableRow>
                        <TableHeader rowSpan="7">Materiales</TableHeader>
                        <TableHeader>Valor por Bracket (CLP)</TableHeader>
                        {curtains.map((curtain, index) => (
                            <TableCell key={curtain.curtainID}>
                                <input
                                    type="number"
                                    value={quoteData[index][5]}
                                    onChange={(e) => handleBracketChange(index, e.target.value)}
                                />
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableHeader>Valor por Tapa (CLP)</TableHeader>
                        {curtains.map((curtain, index) => (
                            <TableCell key={curtain.curtainID}>
                                <input
                                    type="number"
                                    value={quoteData[index][6]}
                                    onChange={(e) => handleCapChange(index, e.target.value)}
                                />
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableHeader>Valor por Contrapeso (CLP)</TableHeader>
                        {curtains.map((curtain, index) => (
                            <TableCell key={curtain.curtainID}>
                                <input
                                    type="number"
                                    value={quoteData[index][7]}
                                    onChange={(e) => handleCounterWeightChange(index, e.target.value)}
                                />
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableHeader>Valor por Zuncho (CLP)</TableHeader>
                        {curtains.map((curtain, index) => (
                            <TableCell key={curtain.curtainID}>
                                <input
                                    type="number"
                                    value={quoteData[index][8]}
                                    onChange={(e) => handleBandChange(index, e.target.value)}
                                />
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableHeader>Valor por Cadena (CLP)</TableHeader>
                        {curtains.map((curtain, index) => (
                            <TableCell key={curtain.curtainID}>
                                <input
                                    type="number"
                                    value={quoteData[index][9]}
                                    onChange={(e) => handleChainChange(index, e.target.value)}
                                />
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableHeader>Tipo de Tubo</TableHeader>
                        {curtains.map((curtain, index) => (
                            <TableCell key={curtain.curtainID}>
                                <select
                                    value={quoteData[index][10]}
                                    onChange={(e) => handlePipeTypeChange(index, e.target.value)}
                                >
                                    <option value="">Seleccionar</option> {/* Opción por defecto */}
                                    {pipes.map((pipe) => (
                                        <option key={pipe.pipeID} value={pipe.pipeName}>
                                            {pipe.pipeName}
                                        </option>
                                    ))}
                                </select>
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableHeader>Valor por Tubo (CLP)</TableHeader>
                        {curtains.map((curtain, index) => (
                            <TableCell key={curtain.curtainID}>
                                <input
                                    type="number"
                                    value={quoteData[index][11]}
                                    onChange={(e) => handlePipeChange(index, e.target.value)}
                                />
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableHeader rowSpan="2">Mano de obra</TableHeader>
                        <TableHeader>Valor del armado (CLP)</TableHeader>
                        {curtains.map((curtain, index) => (
                            <TableCell key={curtain.curtainID}>
                                <input
                                    type="number"
                                    value={quoteData[index][12]}
                                    onChange={(e) => handleAssemblyChange(index, e.target.value)}
                                />
                            </TableCell>
                        ))}
                    </TableRow>
                    <TableRow>
                        <TableHeader>Valor de la instalación (CLP)</TableHeader>
                        {curtains.map((curtain, index) => (
                            <TableCell key={curtain.curtainID}>
                                <input
                                    type="number"
                                    value={quoteData[index][13]}
                                    onChange={(e) => handleInstallationChange(index, e.target.value)}
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