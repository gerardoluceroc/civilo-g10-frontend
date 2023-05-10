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
    //align-items: center;
`;


const Titulo = styled.h1`
    font-size: x-large;
    margin: auto;
`;

const H2 = styled.h2`

`;

const Label = styled.label`
    font-weight: 700;
    margin-right: 0.5%;
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
    padding: 0.5%;

`;

const DescripcionCotización = styled.div`
    display: flex;
    flex-direction: column;
    font-size: medium;
    margin-bottom: 3%;
    margin-top: 0.5%;
    margin-left: 4%;
    width: 70%;
`;

const ItemInfoUsuario = styled.div`
    font-size: large;
    display: flex; /* Añade "display: flex" para alinear los elementos verticalmente */
    align-items: center; /* Añade "align-items: center" para centrar verticalmente los elementos */
    margin-top: 0; /* Ajusta el margen superior del texto para que esté alineado con el ícono */
    padding: 0.5%;

`;

export const RequestDetails = ({requestDetails}) => {

    console.log("Estoy en request ditails dentro del modal, la solicitud es ",requestDetails);

    if(requestDetails === undefined){
        return <div>undefined</div>
    }

    else{ 
        const {requestID,
                description: descripcion,
                deadline: fechaVencimiento,
                admissionDate: fechaRealizacion,
                coverage: cobertura,
                curtain: cortina,
                status: estado,
                user: usuario
        } = requestDetails;


        return (
            <ContainerRequestDetails>
                <Titulo>Solicitud #{requestID}</Titulo>
                <H2>Solicitud De Cotización de Cortina(s)</H2>
                <H2>Realizada Por:</H2>
                <InformacionUsuario>
                    <ItemInfoUsuario>
                        <PersonIcon/>
                        <Label>Nombre:</Label>
                        {`${usuario.name} ${usuario.surname}`}
                    </ItemInfoUsuario>
                    <ItemInfoUsuario>
                        <EmailIcon/>
                        <Label>Correo Electrónico: </Label>
                        {usuario.email}
                    </ItemInfoUsuario>
                    <ItemInfoUsuario>
                        <LocalPhoneIcon/>
                        <Label>Número Telefónico: </Label>
                        {usuario.phoneNumber}
                    </ItemInfoUsuario>
                    <ItemInfoUsuario>
                        <PlaceIcon/>
                        <Label>Comuna: </Label>
                        {usuario.commune}
                    </ItemInfoUsuario>
                </InformacionUsuario>

                <H2>Detalles de Cotizacion Solicitada: </H2>
                <InformacionCotización>
                    <ItemInfoCotizacion>
                        <Label>ID de Solicitud: </Label>
                        {requestID}
                    </ItemInfoCotizacion>
                    <ItemInfoCotizacion>
                        <CalendarMonth/>
                        <Label>Fecha de Realización: </Label>
                        {fechaRealizacion}
                    </ItemInfoCotizacion>

                    <ItemInfoCotizacion>
                        <PlaceIcon/>
                        <Label>Comuna Solicitada: </Label>
                        {cobertura.commune}
                    </ItemInfoCotizacion>

                    <ItemInfoCotizacion>
                        <EventBusyIcon/>
                        <Label>Fecha de Expiración: </Label>
                        {fechaVencimiento}
                    </ItemInfoCotizacion>

                    <ItemInfoCotizacion>
                        <BlindsClosedIcon/>
                        <Label>Tipo de Cortina: </Label>
                        {cortina.curtainType}
                    </ItemInfoCotizacion>

                    <ItemInfoCotizacion>
                        <DescriptionIcon/>
                        <Label>Descripción: </Label> 
                    </ItemInfoCotizacion>

                    <DescripcionCotización>
                        {descripcion}
                    </DescripcionCotización>

                    <ItemInfoCotizacion>
                        <PendingIcon/>
                        <Label>Estado De Solicitud: </Label>
                        {estado.statusName}
                        
                    </ItemInfoCotizacion>
                </InformacionCotización>

                <H2>Vendedor Asignado:</H2>
                <InformacionUsuario>
                    <ItemInfoUsuario>
                        <PersonIcon/>
                        <Label>Nombre: </Label>
                        Vendedor 1
                    </ItemInfoUsuario>
                    <ItemInfoUsuario>
                        <BusinessIcon/>
                        <Label>Empresa: </Label>
                        Empresas Del Sur
                    </ItemInfoUsuario>
                    <ItemInfoUsuario>
                        <EmailIcon/>
                        <Label>Correo Electrónico: </Label>
                        vendedor@gmail.es
                    </ItemInfoUsuario>
                    <ItemInfoUsuario>
                        <LocalPhoneIcon/>
                        <Label>Número Telefónico: </Label>
                        +569666
                    </ItemInfoUsuario>
                    <ItemInfoUsuario>
                        <PlaceIcon/>
                        <Label>Comuna: </Label>
                        Pudahuel
                    </ItemInfoUsuario>

                </InformacionUsuario>
            </ContainerRequestDetails>
        )
  }
}
