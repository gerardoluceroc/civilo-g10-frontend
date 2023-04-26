import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    background-color: #d0d3d4;
    border: solid;
    border-color:  #7b7d7d;
    display: flex; //Con display: flex y flex-direction: column, estableces que los elementos hijos de StyledDiv se ordenen en una sola columna
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 250px;

`;

const Titulo = styled.h1`
    color: black;
    font-size: large;
`;

const Imagen = styled.img`
    width: 180px; /* Reduce el tamaño de la imagen para que se ajuste dentro del espacio delimitado por el padding */
    height: 220px;
    object-fit: contain; /* Ajusta la imagen dentro de su contenedor */

`;

const Descripcion = styled.p`
    color: black;
    font-size: medium;
    max-width: 100%; /* Ajustamos el ancho máximo de la descripción al 100% */
    word-wrap: break-word; /* Permitimos que las palabras se dividan en varias líneas si exceden el ancho disponible */
`;

export const ProductItem = () => {
    

    const rollerBlackoutImage = "https://aridesign.cl/wp-content/uploads/2021/08/5Berlingris1_8c523c0e-d2ca-4804-82b5-9cc6ded083fa_1200x.jpg";
    

    return (
        <StyledDiv>
            <Titulo>Roller Blackout</Titulo>
            <Imagen src={rollerBlackoutImage}/>
            <Descripcion>
                Bloquea completamente la luz y protege tu privacidad con nuestras cortinas roller blackout de alta calidad. 
                Disponible en una variedad de tamaños y colores para adaptarse a tus necesidades
            </Descripcion>

        </StyledDiv>
    )
}
