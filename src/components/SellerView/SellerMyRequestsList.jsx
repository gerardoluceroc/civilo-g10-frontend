
import styled from 'styled-components'
import { RequestResume } from '../ClientView/RequestResume';
import { useState } from 'react';
import { useEffect } from 'react';
import { obtenerAsignacionesVendedor } from '../../api/civilo_roller_api';


const StyledDiv = styled.div`
    background-color: transparent;//#d0d3d4
    margin-top: -17px; //POR ALGUNA RAZON HAY UN ESPACIO vertical arriba ENTRE ESTE COMPONENTE Y SUS HERMANOS, ESTO LO SOLUCIONA.
    //max-width: 100%;
    //justify-content: space-between;

`;

const Titulo = styled.h1`
  color: black; // Establece el color del texto del título
  font-size: x-large; // Establece el tamaño de fuente del título
  margin-left: 1%; // Establece el margen izquierdo del título
  display: flex; // Establece el modo de visualización en "flex"
  align-items: center; // Establece el alineamiento vertical de los elementos en el centro
  &::after { // Agrega una pseudoclase "::after" al elemento principal "Titulo"
    content: ''; // Agrega un contenido vacío para la pseudoclase "::after"
    flex-grow: 1; // Hace que la línea horizontal se extienda para llenar todo el espacio disponible a la derecha del texto
    height: 2px; // Establece la altura de la línea horizontal en 2 píxeles
    background-color: gray; // Establece el color de fondo de la línea horizontal en gris
    margin-left: 10px;
  }

  @media (max-width: 890px) {
    margin-left: 5%;
    
  }
  @media (max-width: 540px) {
    margin-left: 10%;
    
  }
`;

const NoRequestsAvailable = styled.h1`
  color: gray;
  font-size: xx-large;
  margin-left: 3%;

`;

const ListaSolicitudes = styled.div`
  display: flex;
  flex-wrap: wrap; /* Agrega "flex-wrap: wrap" para que los elementos hijos se distribuyan en varias filas en lugar de en una sola */
  gap: 10px;

`;



//Funcion para definir los estilos que tendrá el tag del resumen de la solicitud y otras propiedades del componente principal
const showRequestResume = (solicitudes) => {
  return solicitudes.map((solicitud) => {
    if (solicitud.status.statusName.toLowerCase() === "sin asignar") {
      return (
        <RequestResume
          key={solicitud.requestID}
          fecha={solicitud.admissionDate}
          IdSolicitud={solicitud.requestID}
          estado={"Enviada"}
          colorLetraTag="white"
          colorFondoTag="#1f618d"
          requestDetails={solicitud}
        />
      );
    } else if (solicitud.status.statusName.toLowerCase() === "asignada") {
      return (
        <RequestResume
          key={solicitud.requestID}
          fecha={solicitud.admissionDate}
          IdSolicitud={solicitud.requestID}
          estado={solicitud.status.statusName}
          colorLetraTag="#134c2b"
          colorFondoTag="#53cfb6"
          requestDetails={solicitud}
        />
      );
    } else if (solicitud.status.statusName.toLowerCase() === "finalizada y fallida") {
      return (
        <RequestResume
          key={solicitud.requestID}
          fecha={solicitud.admissionDate}
          IdSolicitud={solicitud.requestID}
          estado={"Sin Éxito"}
          colorLetraTag="#9e1919"
          colorFondoTag="#f5b7b1"
        />
      );
    } else if (solicitud.status.statusName.toLowerCase() === "finalizada y exitosa") {
      return (
        <RequestResume
          key={solicitud.requestID}
          fecha={solicitud.admissionDate}
          IdSolicitud={solicitud.requestID}
          estado={"Completada"}
          colorLetraTag="white"
          colorFondoTag=" #22653f "
        />
      );
    }
    return null; //devolver null si el status no coincide con ninguno de los casos anteriores
  });
};



export const SellerMyRequestsList = () => {


const [requests, setRequests] = useState([]);
const user = JSON.parse(sessionStorage.getItem("user"));
const id_vendedor = user.userID;
console.log(user.userID);

useEffect(() => {
    obtenerAsignacionesVendedor(id_vendedor)
    .then((asignaciones) => setRequests(asignaciones))
    .catch((error) => console.log("Error al obtener las asignaciones: ",error));
},[id_vendedor])

  //Si no hay solicitudes
  if(requests.length === 0){
    return(

      <StyledDiv>
        <Titulo>Mis Asignaciones</Titulo>
        <NoRequestsAvailable>No Tienes Solicitudes Asignadas</NoRequestsAvailable>
      
      </StyledDiv>
    );
  }

  //Si hay solicitudes, se muestran
  else{
    return (

    <StyledDiv>
      <Titulo>Mis Asignaciones</Titulo>
      <ListaSolicitudes>
        {showRequestResume(requests)}
        
      </ListaSolicitudes>
    </StyledDiv>
    
  )}

}
