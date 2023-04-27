import { CalendarMonth, CalendarMonthOutlined, Info } from "@mui/icons-material";
import React from "react"
import styled from "styled-components";

const StyledDiv = styled.div`
    background-color:  #7fb3d5;
    border: solid;
    border-radius: 10px;
    display: flex;
    align-items: center;
    width: 350px;
    margin: 5px; //separador vertical entre este elementos y otros hermanos
    margin-left: 10px;//separador horizontal respecto al borde izquierdo
    padding: 7px;

`;

const Titulo = styled.h1`
    color: black;
    font-size: large;
`;

const Fecha = styled.h3`
  font-size: medium;
  display: flex; /* Añade "display: flex" para alinear los elementos verticalmente */
  align-items: center; /* Añade "align-items: center" para centrar verticalmente los elementos */
  margin-top: 0; /* Ajusta el margen superior del texto para que esté alineado con el ícono */
  padding: 0%;
`;

const VerDetalles = styled.button`
    background-color:#2ea3f0 ;
    border: solid;
    border-radius: 10px;
    border-color: #2ea3f0;
    font-size: medium;
    width: 120px;
    display: flex; /* Añade "display: flex" para alinear los elementos verticalmente */
    align-items: center; /* Añade "align-items: center" para centrar verticalmente los elementos */
    margin-top: 0; /* Ajusta el margen superior del texto para que esté alineado con el ícono */
    padding: 0%;
    //Animación para cuando el cursor pase por encima del botón.
    &:hover {
      box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.25); /* Agrega una sombra */
      transform: scale(0.95); /* Reduzca ligeramente el tamaño */
    }
`;

const InfoSolicitud = styled.div`

`;

const EstadoSolicitud = styled.div`
  margin-left: 20px; /* Margen a la izquierda de 5px */
  border-radius: 10px;
  background-color:     #53cfb6 ; /* Color de fondo */
  color:  #134c2b; /* Color del texto */
  font-size: 150%; /* Tamaño de fuente del texto */
  align-items: center; 
  height: 30px; /* Altura del contenedor */
  width: 100px; /* Ancho del contenedor */
  display: flex; /* Establece el contenedor como un elemento flex */
  justify-content: center; /* Centra horizontalmente los elementos */
  padding: 0.5rem; /* Espacio interior alrededor del contenido */

  //color letra cancelado: #9e1919, color fondo: #f5b7b1;
  //color letra Enviada: white, color fondo: #1f618d;
  //color letra Finalizado: white, color fondo: #1f618d;
  //color letra Aceptada: #134c2b, color fondo:  #53cfb6, 

`;
const CalendarioIcono = styled(CalendarMonth)`

`;

export const RequestResume = () => {
  return (
    <StyledDiv>
        <InfoSolicitud>
            <Titulo>Solicitud Cortina Roller</Titulo>
            <Fecha>
                <CalendarioIcono/>
                26-04-2022
            </Fecha>
            <VerDetalles>
                <Info/>
                Ver Detalles
            </VerDetalles>        
        </InfoSolicitud>
        <EstadoSolicitud>Aceptada</EstadoSolicitud>


    </StyledDiv>
  )
}
