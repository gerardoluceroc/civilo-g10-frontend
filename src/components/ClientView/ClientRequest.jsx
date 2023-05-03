import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;



const Select = styled.select`
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  background-color: #2196f3;
  color: #fff;
  border: none;
  cursor: pointer;
`;



const ClientRequest = () => {
    const [description, setDescription] = useState("");
    const [deadline, setDeadline] = useState("");
    const [admissionDate, setAdmissionDate] = useState("");
    const [coverageID, setCoverageID] = useState("");
    const [commune, setCommune] = useState("");
    const [communes, setCommunes] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8080/coverages")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCommunes(data.map((coverage) => coverage.commune));
            })
            .catch((error) => {
                console.error("Error fetching communes: ", error);
            });
    }, []);

    useEffect(() => {
        setUser(JSON.parse(sessionStorage.getItem("user")));
    }, []);


    const handleSubmit = async (event) => {
        event.preventDefault();
        const coverage = { coverageID: coverageID, commune: commune };

        console.log(communes);


        const data = {
            description: description,
            deadline: deadline,
            admissionDate: admissionDate,
            closingDate: null,
            reason: null,
            user: user,
            coverage: coverage,
            curtains: null,
            status: null,
        };
        try {
            const response = await fetch("http://localhost:8080/requests/clientRequest", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${sessionStorage.getItem('user')}`,
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                alert("Solicitud creada con éxito");
                setDescription("");
                setDeadline("");
                setAdmissionDate("");
                setCoverageID("");
                setCommune("");
            } else {
                alert("Ha ocurrido un error al crear la solicitud");
            }
        } catch (error) {
            console.error(error);
            alert("Ha ocurrido un error al crear la solicitud");
        }
    };

    return (
        <Container>
            <h2>Nueva solicitud</h2>
            <form onSubmit={handleSubmit}>
                <Input
                    type="text"
                    placeholder="Descripción"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                    required
                />
                <Input
                    type="date"
                    placeholder="Fecha límite"
                    value={deadline}
                    onChange={(event) => setDeadline(event.target.value)}
                    required
                />
                <Input
                    type="date"
                    placeholder="Fecha de admisión"
                    value={admissionDate}
                    onChange={(event) => setAdmissionDate(event.target.value)}
                    required
                />
                <Select
                    value={commune}
                    onChange={(event) => setCommune(event.target.value)}
                    required
                >
                    <option value="">Selecciona una commune</option>
                    {communes.map((commune) => (
                        <option key={commune} value={commune}>
                            {commune}
                        </option>
                    ))}
                </Select>
                <Button type="submit">Enviar solicitud</Button>
            </form>
        </Container>
    );
};

export default ClientRequest;