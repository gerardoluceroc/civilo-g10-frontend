import { CalendarMonth, CalendarMonthOutlined, Info } from "@mui/icons-material";
import React, { useEffect, useState } from "react"
import styled from "styled-components";
import Modal from "../Modal";
import ModalSellerInformation from "../ModalRequestDetails";
import ModalRequestDetails from "../ModalRequestDetails";
import PersonIcon from '@mui/icons-material/Person';
import DeleteIcon from '@mui/icons-material/Delete';


const StyledDiv = styled.div`
    background-color:  #7fb3d5;
    border: solid;
    border-radius: 10px;
    display: flex;
    //flex-direction: column;
    align-items: center;
    width: 16%;
    margin: 5px; //separador vertical entre este elementos y otros hermanos
    margin-left: 10px;//separador horizontal respecto al borde izquierdo
    padding: 7px;
    //padding-left: -5px;

    @media (max-width: 1572px){
      width: 18%;
    }

    @media (max-width: 1390px){
      width: 25%;
    }

    @media (max-width: 998px){
      width: 32%;
    }

    @media (max-width: 804px){
      width: 36%;
    }

    @media (max-width: 734px){
      width: 39%;
    }

    @media (max-width: 679px){
      margin: auto;
      width: 65%;
    }

    @media (max-width: 400px){
      margin: auto;
      width: 75%;
    }

    @media (max-width: 436px) {
    width: 85%;
    
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
  height: 40px; /* Altura del contenedor */
  width: 56%; /* Ancho del contenedor */
  display: flex; /* Establece el contenedor como un elemento flex */
  justify-content: center; /* Centra horizontalmente los elementos */
  padding: 0.35rem; /* Espacio interior alrededor del contenido */


  @media (max-width: 679px) {
    margin: auto;
    margin-left: 10%;
    
  }


  




  //color letra cancelado: #9e1919, color fondo: #f5b7b1;
  //color letra Enviada: white, color fondo: #1f618d;
  //color letra Finalizado: white, color fondo: #1f618d;
  //color letra Aceptada: #134c2b, color fondo:  #53cfb6, 

`;
const CalendarioIcono = styled(CalendarMonth)`

`;

export const RequestResume = ({fecha,estado, colorFondoTag, colorLetraTag, IdSolicitud, requestDetails}) => {

const nuevaFecha = new Date(fecha);
const fechaFormatoES = nuevaFecha.toLocaleDateString('es-ES').replace(/\//g, '-');
const nombreUsuario = requestDetails.user.name;
const apellidoUsuario = requestDetails.user.surname;
const [modalOpen, setModalOpen] = useState(false);
const [userInfo, setUserInfo] = useState(null);
//const [Acciones, setAcciones] = useState(null)
const [tipoUsuarioLogueado, setTipoUsuarioLogueado] = useState(JSON.parse(sessionStorage.getItem('user')).role.accountType);



//Si el tipo de usuario logueado cambia
useEffect(() => {
  let componenteUserInfo = null;
  //let componenteAcciones = null;
  let tipoUsuario = tipoUsuarioLogueado.toLowerCase();

  //si el tipo de usuario logueado no es cliente
  if(tipoUsuario !== "cliente"){
    //se muestra el nombre y apellido del cliente en el componente RequestResume
    componenteUserInfo = <Fecha>
                              <PersonIcon/>
                              {`${nombreUsuario} ${apellidoUsuario}`}
                          </Fecha>;
  }

  setUserInfo(componenteUserInfo);

}, [tipoUsuarioLogueado])


  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (

    <StyledDiv>

          <InfoSolicitud>
              <Titulo>{`Solicitud #${IdSolicitud}`}</Titulo>
              {userInfo}
              <Fecha>
                  <CalendarioIcono/>
                  {fechaFormatoES}
              </Fecha>

              <ModalRequestDetails open={modalOpen} onClose={handleModalClose} requestDetails={requestDetails} />    

              <VerDetalles onClick={() => setModalOpen(true)}>
                <Info/>
                Ver Detalles
              </VerDetalles>
          </InfoSolicitud>
          <EstadoSolicitud backgroundColor={colorFondoTag} color={colorLetraTag}>{estado}</EstadoSolicitud>

    </StyledDiv>
  )
}
