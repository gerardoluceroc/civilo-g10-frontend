import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState, useEffect } from 'react';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1076d6;
  color: #fff;

  button {
    background-color: inherit;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 1.3rem;
  }

  button:hover {
    background-color: #0062cc;
  }
`;

const NavItems = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
`;

const NavItem = styled.li`
  font-size: 1.3rem;

  button {
    background-color: inherit;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 1.3rem;
  }

  button:hover {
    background-color: #0062cc;
  }
`;

function NavigationBarLogged() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const encodedEmail = encodeURIComponent(localStorage.email);
    const encodedPassword = encodeURIComponent(localStorage.password)
    const url = `http://localhost:8080/users/currentSession?email=${encodedEmail}&password=${encodedPassword}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        sessionStorage.setItem("user", JSON.stringify(data));
        setUser(data);
        setIsLoading(false);
      })
      .catch((err) => console.error(err));
  }, []);

  const handleLogout = () => {
    sessionStorage.removeItem("user");
    fetch("http://localhost:8080/users/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    })
      .then((res) => {
        if (res.ok) {
          window.location.href = "/";
        } else {
          throw new Error("Error en la solicitud de logout");
        }
      })
      .catch((err) => console.error(err));
  };

  if (isLoading) {
    return null; // o puedes retornar algún indicador de carga
  }

  return (
    <Navbar>
      <Link to={"/"}>
        <button>Inicio</button>
      </Link>
      <Link to={"/client/request"}>
        <button>
          ver diseño pagina solicitudes (componente prueba, borrar dps)
        </button>
      </Link>
      {user && (
        <NavItems>
          <NavItem>
            <span>
              {user.name} {user.surname}
            </span>
          </NavItem>
          <NavItem>
            <button onClick={handleLogout}>Cerrar Sesión</button>
          </NavItem>
        </NavItems>
      )}
    </Navbar>
  );
}

export default NavigationBarLogged;