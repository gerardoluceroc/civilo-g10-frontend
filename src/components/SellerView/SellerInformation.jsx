import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { RUTA_COBERTURAS, RUTA_UPDATE_COBERTURAS_VENDEDOR, URL_CIVILO, URL_HOME } from "../../api/civilo_roller_api";
import { showAlert } from "../../functions/funciones";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Table = styled.table`
  border-collapse: collapse;
  margin-top: 30px;
`;

const Title = styled.h1`
    font-size: x-large;
    margin-top: 3%;
`;

const TableHeader = styled.th`
  border: 1px solid black;
  padding: 10px;
  text-align: left;
`;

const TableRow = styled.tr`
  border: 1px solid black;
`;

const TableCell = styled.td`
  border: 1px solid black;
  padding: 10px;
`;

const Checkbox = styled.input`
  margin-right: 5px;
`;

const Input = styled.input`
  margin-top: 20px;
  padding: 10px;
  width: 200px;
`;

const Button = styled.button`
    background-color: #1010b3;
    border-radius: 5px;
    border-color: #1010b3;
    color: white;
    font-size: xx-large;
    margin-top: 1%;
    margin-bottom: 2%;
    width: 15%;
    height: 2.3rem;
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


    @media (max-width: 950px) {
        width: 30%;
        
    }

    @media (max-width: 540px) {
        width: 50%;

        
    }

    @media (max-width: 312px) {
        width: 80%;

        
    }
    `;

const RUTA_PAGE_LOGIN = "/login";

const SellerInformation = () => {
    const [coverages, setCoverages] = useState([]);
    const [selectedCoverages, setSelectedCoverages] = useState([]);
    const [companyName, setCompanyName] = useState("");

    useEffect(() => {
        fetch(`${URL_CIVILO}${RUTA_COBERTURAS}`)
            .then((response) => response.json())
            .then((data) => {
                setCoverages(data);
            })
            .catch((error) => {
                console.error("Error al obtener las coberturas:", error);
            });
    }, []);

    const handleCheckboxChange = (event) => {
        const coverageId = parseInt(event.target.value);
        if (event.target.checked) {
            setSelectedCoverages([...selectedCoverages, coverageId]);
        } else {
            setSelectedCoverages(selectedCoverages.filter((id) => id !== coverageId));
        }
    };

    const handleCompanyNameChange = (event) => {
        setCompanyName(event.target.value);
    };

    const handleSubmit = () => {
        const data = {
            email: localStorage.getItem('email'),
            coverageID: selectedCoverages,
            companyName: companyName,
        };
        console.log("PASO 1")
        try {
            console.log("PASO 1.1: ", JSON.parse(sessionStorage.getItem('user')).email != null);
            if (JSON.parse(sessionStorage.getItem('user')).email != null) {
                data.email = JSON.parse(sessionStorage.getItem('user')).email;
            }
        } catch (error) {
            console.log("ERROR: ", error);
        }
        console.log("PASO 2: ", data);
        fetch(`${URL_CIVILO}${RUTA_UPDATE_COBERTURAS_VENDEDOR}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    console.log("PASO 3: ")
                    try {
                        if (JSON.parse(sessionStorage.getItem('user')).email != null) {
                            console.log("TRY")
                            showAlert("Información actualizada con exito");
                            window.location.replace(URL_HOME);
                        }
                    } catch (error) {
                        console.log("ERROR: ", error);
                        console.log("NOP")
                        showAlert("Información actualizada con exito");
                        window.location.replace(RUTA_PAGE_LOGIN);
                    }
                } else {
                    showAlert("Complete todos los campos");
                }
            })
            .catch((error) => {
                console.error("Error al enviar la petición de actualización:", error);
            });
    };

    return (
        <Container>
            <Title>Indique el nombre de su empresa</Title>
            <Input
                type="text"
                placeholder="Nombre empresa"
                value={companyName}
                onChange={handleCompanyNameChange}
            />
            <Title>Indique las comunas a las cuales le realiza cobertura</Title>
            <Table>
                <thead>
                    <tr>
                        <TableHeader>Comunas</TableHeader>
                        <TableHeader>Cobertura</TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {coverages.map((coverage) => (
                        <TableRow key={coverage.coverageID}>
                            <TableCell>{coverage.commune}</TableCell>
                            <TableCell>
                                <Checkbox
                                    type="checkbox"
                                    value={coverage.coverageID}
                                    onChange={handleCheckboxChange}
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </tbody>
            </Table>
            <Button onClick={handleSubmit}>Confirmar</Button>
        </Container>
    )
}

export default SellerInformation;
