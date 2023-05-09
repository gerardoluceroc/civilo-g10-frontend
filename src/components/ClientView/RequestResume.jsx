import { CalendarMonth, CalendarMonthOutlined, Info } from "@mui/icons-material";
import React, { useState } from "react"
import styled from "styled-components";
import Modal from "../Modal";
import ModalSellerInformation from "../ModalRequestDetails";
import ModalRequestDetails from "../ModalRequestDetails";

const StyledDiv = styled.div`
    background-color:  #7fb3d5;
    border: solid;
    border-radius: 10px;
    display: flex;
    align-items: center;
    width: 300px;
    margin: 5px; //separador vertical entre este elementos y otros hermanos
    margin-left: 10px;//separador horizontal respecto al borde izquierdo
    padding: 7px;

    @media (max-width: 679px){
      margin: auto;
      width: 70%;
    }
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

  @media (max-width: 678px) {
    margin-left: 5%;
    
  }

`;

const EstadoSolicitud = styled.div`
  margin-left: 20px; /* Margen a la izquierda de 5px */
  border-radius: 10px;

  //Se define el estilo del fondo y la letra dependiendo del estado de la solicitud
  background-color: ${(props) => props.backgroundColor};
  color:  ${(props) => props.color}; 

  font-size: 150%; /* Tamaño de fuente del texto */
  align-items: center; 
  height: 30px; /* Altura del contenedor */
  width: 50%; /* Ancho del contenedor */
  display: flex; /* Establece el contenedor como un elemento flex */
  justify-content: center; /* Centra horizontalmente los elementos */
  padding: 0.35rem; /* Espacio interior alrededor del contenido */

  @media (max-width: 678px) {
    margin: auto;
    
  }

  @media (max-width: 400px) {
    width: 35%;
    font-size: 100%;
    
  }


  //color letra cancelado: #9e1919, color fondo: #f5b7b1;
  //color letra Enviada: white, color fondo: #1f618d;
  //color letra Finalizado: white, color fondo: #1f618d;
  //color letra Aceptada: #134c2b, color fondo:  #53cfb6, 

`;
const CalendarioIcono = styled(CalendarMonth)`

`;

export const RequestResume = ({fecha,estado, colorFondoTag, colorLetraTag, IdSolicitud}) => {

const nuevaFecha = new Date(fecha);
const fechaFormatoES = nuevaFecha.toLocaleDateString('es-ES').replace(/\//g, '-');

const [modalOpen, setModalOpen] = useState(false);

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <StyledDiv>
          <InfoSolicitud>
              <Titulo>{`Solicitud #${IdSolicitud}`}</Titulo>
              <Fecha>
                  <CalendarioIcono/>
                  {fechaFormatoES}
              </Fecha>
              <VerDetalles onClick={() => setModalOpen(true)}>
                  <Info/>
                  Ver Detalles
              </VerDetalles>  
              <ModalRequestDetails open={modalOpen} onClose={handleModalClose} />      
          </InfoSolicitud>
          <EstadoSolicitud backgroundColor={colorFondoTag} color={colorLetraTag}>{estado}</EstadoSolicitud>



    </StyledDiv>
  )
}
