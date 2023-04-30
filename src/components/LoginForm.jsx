import React, { useState } from "react";
import styled from "styled-components";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FormContainer = styled.div`
  width: 400px;
  padding: 30px;
  background-color: #f5f5f5;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  margin: 10px 0;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #ebebeb;
  font-size: 16px;
`;

const Button = styled.button`
  display: block;
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #2196f3;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 285px;
  height: 285px;
  margin-right: 30px;
`;

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = { email: email, password: password };
    fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Login successful");
        } else {
          console.log("Login failed");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <LoginContainer>
      <Column>
        <Image src="https://via.placeholder.com/200x200" />
      </Column>
      <Column>
        <FormContainer>
          <h2>Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <Button type="submit">Iniciar sesión</Button>
          </form>
        </FormContainer>
      </Column>
    </LoginContainer>
  );
};

export default LoginForm;
