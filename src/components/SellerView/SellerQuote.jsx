import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { RUTA_CORTINAS, RUTA_GET_IVA, URL_CIVILO, RUTA_TUBOS, RUTA_COTIZACIONES, URL_HOME } from '../../api/civilo_roller_api';

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

const Button = styled.button`
    margin: 0 10px;
    padding: 10px 20px;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    border: none;
    `;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    `;

const RedButton = styled(Button)`
    background-color: #ff5a5f;
    `;

const GreenButton = styled(Button)`
    background-color: #5fa463;
    `;

const DescriptionInput = styled.textarea`
    width: 800px; /* Ajusta el ancho según tus necesidades */
    height: 400px; /* Ajusta el alto según tus necesidades */
    font-size: 18px; /* Ajusta el tamaño de la letra según tus necesidades */
`;





const SellerQuote = () => {
    const [iva, setIva] = useState(0);
    const [curtains, setCurtains] = useState([]);
    const [quoteData, setQuoteData] = useState([]);
    const [pipes, setPipes] = useState([]);
    const [description, setDescription] = useState('');
    const [discount, setDiscount] = useState(0); // Nuevo estado para el descuento

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
            initialData.push([null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
        }
        return initialData;
    };

    const handleDiscountChange = (e) => {
        const parsedValue = parseFloat(e.target.value);
        setDiscount(parsedValue >= 0 ? parsedValue : 0); // Actualizar el descuento
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
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
        updatedData[index][10] = value ? JSON.parse(value) : null;
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
                        //curtainType: curtains[i].curtainType,
                        amount: quoteData[i][1], // Cantidad
                        valueSquareMeters: quoteData[i][2], // Valor por cortina
                        width: quoteData[i][3], // Ancho
                        height: quoteData[i][4], // Alto
                        bracketValue: quoteData[i][5], // Valor por bracket
                        capValue: quoteData[i][6], // Valor por bracket
                        counterweightValue: quoteData[i][7], // Valor por contrapeso
                        bandValue: quoteData[i][8], // Valor por zuncho
                        chainValue: quoteData[i][9], // Valor por cadena
                        pipe: quoteData[i][10],
                        pipeValue: quoteData[i][11], // Valor por tubo
                        assemblyValue: quoteData[i][12], // Valor por armado
                        installationValue: quoteData[i][13], // Valor por instalación
                        description: description, // Descripción
                        totalSquareMeters: null, // Por calcular
                        totalFabrics: null, // Por calcular
                        totalMaterials: null, // Por calcular
                        totalLabor: null, // Por calcular
                        productionCost: null, // Por calcular
                        saleValue: null, // Por calcular
                        percentageDiscount: discount, // Por calcular
                        iva: iva, // Por asignar
                        total: null, // Por calcular
                        date: null, // Por asignar
                        seller: JSON.parse(sessionStorage.getItem('user')), // Por determinar
                        curtain: curtains[i], // Por determinar
                        currentIVA: null, // Por determinar
                    };
                    console.log(rowData.pipe)
                    data.push(rowData);
                }
                console.log(data);
            }
        };

        saveData();
    }, [quoteData, curtains, discount]);

    const handleQuote = async () => {
        try {
            for (let i = 0; i < quoteData.length; i++) {
                const data = quoteData[i];
                const curtain = curtains[i];
                const payload = {
                    // Propiedades necesarias del objeto
                    amount: data[1],
                    valueSquareMeters: data[2],
                    width: data[3],
                    height: data[4],
                    bracketValue: data[5],
                    capValue: data[6],
                    counterweightValue: data[7],
                    bandValue: data[8],
                    chainValue: data[9],
                    pipe: data[10],
                    pipeValue: data[11],
                    assemblyValue: data[12],
                    installationValue: data[13],
                    description: description,
                    totalSquareMeters: null,
                    totalFabrics: null,
                    totalMaterials: null,
                    totalLabor: null,
                    productionCost: null,
                    saleValue: null,
                    percentageDiscount: discount,
                    iva: iva,
                    total: null,
                    date: null,
                    seller: JSON.parse(sessionStorage.getItem('user')),
                    curtain: curtain,
                    currentIVA: null,
                };

                const response = await fetch(`${URL_CIVILO}${RUTA_COTIZACIONES}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload),
                });
                console.log(payload)

                if (response.ok) {
                    console.log('Cotización enviada');
                } else {
                    console.error('Error al enviar la cotización');
                }
            }
        } catch (error) {
            console.error('Error al enviar la cotización:', error);
        }
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
                        <TableCell>
                            <input
                                type="number"
                                step="0.1"
                                min="0"
                                value={discount} // Usar el estado del descuento
                                onChange={handleDiscountChange} // Manejar cambios en el descuento
                            />
                        </TableCell>
                        <TableCell>{iva}%</TableCell>
                        <TableCell>-</TableCell>
                    </TableRow>
                </tbody>
            </Table>
            <Subtitle>Descripción</Subtitle>
            <DescriptionInput
                type="text"
                value={description}
                onChange={handleDescriptionChange}
            />
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
                                    value={quoteData[index][10] ? JSON.stringify(quoteData[index][10]) : ""}
                                    onChange={(e) => handlePipeTypeChange(index, e.target.value)}
                                >
                                    <option value="">Seleccionar</option> {/* Opción por defecto */}
                                    {pipes.map((pipe) => (
                                        <option key={pipe.pipeID} value={JSON.stringify({ pipeID: pipe.pipeID, pipeName: pipe.pipeName })}>
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
            <ButtonContainer>
                <RedButton onClick={() => window.location.href = `${URL_HOME}`}>Regresa</RedButton>
                <GreenButton onClick={handleQuote}>Cotizar</GreenButton>
            </ButtonContainer>
        </Container>
    );
};

export default SellerQuote;