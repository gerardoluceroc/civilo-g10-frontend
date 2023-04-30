
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

//Funcion para definir los estilos que tendrá el tag del resumen de la solicitud y otras propiedades del componente principal
const showRequestResume = (solicitudes) => {
  return solicitudes.map((solicitud) => {
    if (solicitud.status.toLowerCase() === "enviada") {
      return (
        <RequestResume
          key={solicitud.requestID}
          fecha={solicitud.admissionDate}
          estado={solicitud.status}
          colorLetraTag="white"
          colorFondoTag="#1f618d"
        />
      );
    } else if (solicitud.status.toLowerCase() === "aceptada") {
      return (
        <RequestResume
          key={solicitud.requestID}
          fecha={solicitud.admissionDate}
          estado={solicitud.status}
          colorLetraTag="#134c2b"
          colorFondoTag="#53cfb6"
        />
      );
    } else if (solicitud.status.toLowerCase() === "cancelada") {
      return (
        <RequestResume
          key={solicitud.requestID}
          fecha={solicitud.admissionDate}
          estado={solicitud.status}
          colorLetraTag="#9e1919"
          colorFondoTag="#f5b7b1"
        />
      );
    } else if (solicitud.status.toLowerCase() === "completada") {
      return (
        <RequestResume
          key={solicitud.requestID}
          fecha={solicitud.admissionDate}
          estado={solicitud.status}
          colorLetraTag="white"
          colorFondoTag=" #22653f "
        />
      );
    }
    return null; //devolver null si el status no coincide con ninguno de los casos anteriores
  });
};



export const ClientRequestList = () => {
  

  let solicitudes = [
    {
      requestID: 1,
      description: "necesito una cortina roller café",
      admissionDate: "27-04-2023",
      closingDate: "29-04-2023",
      commune: "Puente Alto",
      reason: "razon",
      status: "Aceptada"
    },
    {
      requestID: 2,
      description: "necesito una cortina dúo rojo",
      admissionDate: "21-01-2023",
      closingDate: "04-02-2023",
      commune: "Maipú",
      reason: "razon 2" ,
      status: "Enviada"
    },{
      requestID: 3,
      description: "necesito una cortina roller amarilla",
      admissionDate: "23-04-2023",
      closingDate: "27-04-2023",
      commune: "La Florida",
      reason: "razon 3",
      status: "Cancelada",
    }
    ,{
      requestID: 4,
      description: "necesito una cortina roller screen",
      admissionDate: "20-03-23",
      closingDate: "22-04-2023",
      commune: "Providencia",
      reason: "razon 4" ,
      status: "Completada",
    }
  ]


  return (

    <StyledDiv>
      <Titulo>Mis Solicitudes</Titulo>
      <ListaSolicitudes>
        {showRequestResume(solicitudes)}
        
      </ListaSolicitudes>
      



    </StyledDiv>
    
  )
}
