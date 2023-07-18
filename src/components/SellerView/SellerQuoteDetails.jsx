import { Container } from '@mui/material';
import React from 'react'
import styled from 'styled-components';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import BlindsClosedIcon from '@mui/icons-material/BlindsClosed';
import DescriptionIcon from '@mui/icons-material/Description';
import { CalendarMonth } from '@mui/icons-material';


const ContainerQuoteDetails = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    //align-items: center;
`;


const Titulo = styled.h1`
    font-size: x-large;
    margin: auto;
    color: #525151;
`;

const H2 = styled.h2`
    color: #525151;

`;

const Label = styled.label`
    font-weight: 700;
    margin-right: 0.5%;
`;

const InformacionUsuario = styled.div`
    background-color: transparent;
    display: flex;
    flex-direction: column;
`;

const InformacionCotización = styled.div`
    background-color: transparent;
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

const Item = styled.div`
    font-size: large;
    display: flex; /* Añade "display: flex" para alinear los elementos verticalmente */
    align-items: center; /* Añade "align-items: center" para centrar verticalmente los elementos */
    margin-top: 0; /* Ajusta el margen superior del texto para que esté alineado con el ícono */
    padding: 0.5%;

`;

const NoSellerAvailable = styled.h2`
    color: gray;
    margin-top: -2%;
    font-size: large;
`;

export const SellerQuoteDetails = ({quoteDetails}) => {

    const solicitudCotizacion = quoteDetails.requestEntity;
    console.log("solicitud:",solicitudCotizacion);

    console.log("estoy en sellerQuoteDetails, los detalles de la quote son:", quoteDetails);
  return (
    <ContainerQuoteDetails>
        <Titulo>Cotización #{quoteDetails.quoteID}</Titulo>
        <H2>Resumen de Solicitud</H2>
        <Item>
            <PersonIcon/>
            <Label>Nombre de Cliente:</Label>
            {`${solicitudCotizacion.user.name} ${solicitudCotizacion.user.surname}`}
        </Item>
        <Item>
            <EmailIcon />
            <Label>Correo Electrónico: </Label>
            {solicitudCotizacion.user.email}
        </Item>
        <Item>
            <CalendarMonth />
            <Label>Fecha de Realización: </Label>
            {solicitudCotizacion.admissionDate}
        </Item>

        <Item>
            <PlaceIcon />
            <Label>Comuna Solicitada: </Label>
            {solicitudCotizacion.coverage.commune}
        </Item>
        <Item>
            <BlindsClosedIcon />
            <Label>Tipo de Cortina: </Label>
            {solicitudCotizacion.curtain.curtainType}
        </Item>

        <Item>
            <DescriptionIcon />
            <Label>Descripción: </Label>
        </Item>

        <DescripcionCotización>
            {solicitudCotizacion.description}
        </DescripcionCotización>

        <Item>
            <PersonIcon />
            <Label>Vendedor Asignado: </Label>
            {solicitudCotizacion.status.statusName.toLowerCase() !== "sin asignar" 
                ? `${quoteDetails.seller.name} ${quoteDetails.seller.surname}`
                : <NoSellerAvailable>No existe un vendedor asignado en estos momentos</NoSellerAvailable>
            }
        </Item>

        <H2>Detalles de cotización</H2>
    </ContainerQuoteDetails>


  )
}
