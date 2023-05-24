import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Table = styled.table`
  border-collapse: collapse;
  margin-top: 30px;
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
  margin-top: 20px;
  padding: 10px;
  width: 200px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const RUTA_PAGE_LOGIN = "/login";

const SellerInformation = () => {
    const [coverages, setCoverages] = useState([]);
    const [selectedCoverages, setSelectedCoverages] = useState([]);
    const [companyName, setCompanyName] = useState("");

    useEffect(() => {
        fetch("http://localhost:8080/coverages")
            .then((response) => response.json())
            .then((data) => {
                setCoverages(data);
            })
            .catch((error) => {
                console.error("Error:", error);
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
        console.log(data);

        fetch("http://localhost:8080/sellers/sellerInformation", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    alert("Información actualizada con exito");
                    window.location.replace(RUTA_PAGE_LOGIN);
                } else {
                    alert("Complete todos los campos");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    };

    return (
        <Container>
            <Input
                type="text"
                placeholder="Nombre empresa"
                value={companyName}
                onChange={handleCompanyNameChange}
            />
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
