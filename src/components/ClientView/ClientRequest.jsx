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
    const [user, setUser] = useState(null);

    const [curtains, setCurtains] = useState([]);
    const [curtain, setCurtain] = useState({
        curtainID: "",
        curtainType: "",
    });

    const [communes, setCommunes] = useState([]);
    const [coverage, setCoverage] = useState({
        coverageID: "",
        commune: "",
    });

    useEffect(() => {
        fetch("http://localhost:8080/curtains")
        .then((responseCurtain) => responseCurtain.json())
        .then((dataCurtain) => {
            console.log(dataCurtain);
            setCurtains(dataCurtain);
        })
        .catch((error) => {
            console.error("Error fetching curtains: ", error);
        });
    }, []);

    useEffect(() => {
        fetch("http://localhost:8080/coverages")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCommunes(data);
            })
            .catch((error) => {
                console.error("Error fetching communes: ", error);
            });
    }, []);

    useEffect(() => {
        setUser(JSON.parse(sessionStorage.getItem("user")));
    }, []);

    const handleCurtainChange = (eventCurtain) => {
        const curtainType = eventCurtain.target.value;
        const selectedCurtain = curtains.find(
            (a) => a.curtainType === curtainType
        );
        setCurtain(selectedCurtain);
    };

    const handleCommuneChange = (event) => {
        const commune = event.target.value;
        const selectedCoverage = communes.find(
            (c) => c.commune === commune
        );
        setCoverage(selectedCoverage);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = {
            description: description,
            deadline: deadline,
            admissionDate: admissionDate,
            closingDate: null,
            reason: null,
            user: user,
            coverage: coverage,
            curtain: curtain,
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
                    value={curtain.curtainType}
                    onChange={handleCurtainChange}
                    required
                >
                    <option value="">Seleccione un tipo de cortina</option>
                    {curtains.map((a) => (
                        <option key={a.curtainID} value={a.curtainType}>
                            {a.curtainType}
                        </option>
                    ))}
                </Select>

                <Select
                    value={coverage.commune}
                    onChange={handleCommuneChange}
                    required
                >
                    <option value="">Seleccione una comuna</option>
                    {communes.map((c) => (
                        <option key={c.coverageID} value={c.commune}>
                            {c.commune}
                        </option>
                    ))}
                </Select>
                
                <Button type="submit">Enviar solicitud</Button>
            </form>
        </Container>
    );
};

export default ClientRequest;