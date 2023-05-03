import styled from "styled-components";

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Button = styled.button`
  width: 200px;
  height: 50px;
  margin: 0 10px;
  border: none;
  border-radius: 5px;
  background-color: #2196f3;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #1565c0;
  }
`;

const LeftButton = styled(Button)`
  background-color: #8bc34a;

  &:hover {
    background-color: #689f38;
  }
`;

const RightButton = styled(Button)`
  background-color: #ff9800;

  &:hover {
    background-color: #f57c00;
  }
`;

const ClientHome = () => {
  /*
  <console.log(localStorage.email);
  const encodedEmail = encodeURIComponent(localStorage.email);
  console.log(encodedEmail);
  const url = `http://localhost:8080/users/currentSession?email=${encodedEmail}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      sessionStorage.setItem("user", JSON.stringify(data)); console.log(data)
    })
    .catch((err) => console.error(err));>
  
    const userData = JSON.parse(sessionStorage.getItem("user"));
    console.log(userData.name); // muestra el nombre del usuario
  */

  return (
    <ButtonContainer>
      <LeftButton>Ingresar Solicitud</LeftButton>
      <RightButton>Mis Solicitudes</RightButton>
    </ButtonContainer>
  );
};

export default ClientHome;
