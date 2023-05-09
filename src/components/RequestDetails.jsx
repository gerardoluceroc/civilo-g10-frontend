import styled from "styled-components"
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import PlaceIcon from '@mui/icons-material/Place';
import { CalendarMonth } from "@mui/icons-material";
import EventBusyIcon from '@mui/icons-material/EventBusy';
import BlindsClosedIcon from '@mui/icons-material/BlindsClosed';
import DescriptionIcon from '@mui/icons-material/Description';
import PendingIcon from '@mui/icons-material/Pending';
import BusinessIcon from '@mui/icons-material/Business';

const ContainerRequestDetails = styled.div`
    background-color: red;
    display: flex;
    flex-direction: column;
`;


const Titulo = styled.h1`
    font-size: x-large;
    margin: auto;
`;

const H2 = styled.h2`

`;

const InformacionUsuario = styled.div`
    background-color: blue;
    display: flex;
    flex-direction: column;
`;

const InformacionCotización = styled.div`
    background-color: #08cc08;
    display: flex;
    flex-direction: column;

`;

const ItemInfoCotizacion = styled.div`
    font-size: large;
    display: flex; /* Añade "display: flex" para alinear los elementos verticalmente */
    align-items: center; /* Añade "align-items: center" para centrar verticalmente los elementos */
    margin-top: 0; /* Ajusta el margen superior del texto para que esté alineado con el ícono */
    padding: 0%;

`;

const DescripcionCotización = styled.div`
    display: flex;
    flex-direction: column;
    font-size: medium;
    margin-top: -15px;
    margin-left: 4%;
    width: 70%;
`;

const ItemInfoUsuario = styled.div`
    font-size: large;
    display: flex; /* Añade "display: flex" para alinear los elementos verticalmente */
    align-items: center; /* Añade "align-items: center" para centrar verticalmente los elementos */
    margin-top: 0; /* Ajusta el margen superior del texto para que esté alineado con el ícono */
    padding: 0%;

`;

export const RequestDetails = () => {
  return (
    <ContainerRequestDetails>
        <Titulo>Solicitud #nosecuanto</Titulo>
        <H2>Solicitud De Cotización de Cortina(s)</H2>
        <H2>Realizada Por: </H2>
        <InformacionUsuario>
            <ItemInfoUsuario>
                <PersonIcon/>
                Nombre: Gerardo Lucero
            </ItemInfoUsuario>
            <ItemInfoUsuario>
                <EmailIcon/>
                Correo Electrónico: Gerardo@gmail.es
            </ItemInfoUsuario>
            <ItemInfoUsuario>
                <LocalPhoneIcon/>
                Numero Telefónico: +569133
            </ItemInfoUsuario>
            <ItemInfoUsuario>
                <PlaceIcon/>
                Comuna: Puente Alto
            </ItemInfoUsuario>
        </InformacionUsuario>

        <H2>Detalles de Cotizacion Solicitada: </H2>
        <InformacionCotización>
            <ItemInfoCotizacion>
                <CalendarMonth/>
                Fecha de Realización: 01-10-2000
            </ItemInfoCotizacion>

            <ItemInfoCotizacion>
                <PlaceIcon/>
                Comuna Solicitada: La Florida
            </ItemInfoCotizacion>

            <ItemInfoCotizacion>
                <EventBusyIcon/>
                Fecha de Expiración: 01-11-2001
            </ItemInfoCotizacion>

            <ItemInfoCotizacion>
                <BlindsClosedIcon/>
                Tipo de Cortina: Roller Screen
            </ItemInfoCotizacion>

            <ItemInfoCotizacion>
                <DescriptionIcon/>
                <h3>Descripción:</h3> 
            </ItemInfoCotizacion>
            <DescripcionCotización>
                Hola buenas tardes necesito una cortina roller 7x8
            </DescripcionCotización>
            <ItemInfoCotizacion>
                <PendingIcon/>
                Estado de Solicitud: Enviada Sin Asignar
                
            </ItemInfoCotizacion>
        </InformacionCotización>

        <H2>Vendedor Asignado:</H2>
        <InformacionUsuario>
            <ItemInfoUsuario>
                <PersonIcon/>
                Nombre: Vendedor 1
            </ItemInfoUsuario>
            <ItemInfoUsuario>
                <BusinessIcon/>
                Nombre: Empresas Del Sur
            </ItemInfoUsuario>
            <ItemInfoUsuario>
                <EmailIcon/>
                Correo Electrónico: vendedor@gmail.es
            </ItemInfoUsuario>
            <ItemInfoUsuario>
                <LocalPhoneIcon/>
                Numero Telefónico: +569666
            </ItemInfoUsuario>
            <ItemInfoUsuario>
                <PlaceIcon/>
                Comuna: Pudahuel
            </ItemInfoUsuario>

        </InformacionUsuario>
    </ContainerRequestDetails>
  )
}
