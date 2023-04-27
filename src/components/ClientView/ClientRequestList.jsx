
import styled from 'styled-components'
import { RequestResume } from './RequestResume';

const StyledDiv = styled.div`
    background-color: #d0d3d4;
    margin-top: -17px; //POR ALGUNA RAZON HAY UN ESPACIO vertical arriba ENTRE ESTE COMPONENTE Y SUS HERMANOS, ESTO LO SOLUCIONA.
    //max-width: 100%;
    //justify-content: space-between;

`;

const Titulo = styled.h1`
  color: black; // Establece el color del texto del título
  font-size: x-large; // Establece el tamaño de fuente del título
  margin-left: 80px; // Establece el margen izquierdo del título
  display: flex; // Establece el modo de visualización en "flex"
  align-items: center; // Establece el alineamiento vertical de los elementos en el centro
  &::after { // Agrega una pseudoclase "::after" al elemento principal "Titulo"
    content: ''; // Agrega un contenido vacío para la pseudoclase "::after"
    flex-grow: 1; // Hace que la línea horizontal se extienda para llenar todo el espacio disponible a la derecha del texto
    height: 2px; // Establece la altura de la línea horizontal en 2 píxeles
    background-color: gray; // Establece el color de fondo de la línea horizontal en gris
    margin-left: 10px;
  }
`;

const ListaSolicitudes = styled.div`
  display: flex;
  flex-wrap: wrap; /* Agrega "flex-wrap: wrap" para que los elementos hijos se distribuyan en varias filas en lugar de en una sola */
  gap: 10px;

`;



export const ClientRequestList = () => {
  return (

    <StyledDiv>
      <Titulo>Mis Solicitudes</Titulo>
      <ListaSolicitudes>
        <RequestResume/>
        <RequestResume/>
        <RequestResume/>
        <RequestResume/>
        <RequestResume/>
        <RequestResume/>
        <RequestResume/>
        <RequestResume/>
      </ListaSolicitudes>
      



    </StyledDiv>
    
  )
}
