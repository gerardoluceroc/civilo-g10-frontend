import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #1076d6;
  color: #fff;
`;

const Logo = styled.div`
  font-size: 2rem;
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

function NavigationBar() {
  return (
    <Navbar>
      <Logo>Inicio</Logo>
      <NavItems>
        <NavItem>
          <Link to={"/login"}>
            <button>Iniciar Sesión</button>
          </Link>
        </NavItem>
        <NavItem>
          <Link to={"/register"}>
            <button>Registrarse</button>
          </Link>
        </NavItem>
      </NavItems>
    </Navbar>
  );
}

export default NavigationBar;

