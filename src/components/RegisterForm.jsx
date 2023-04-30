import { Form } from 'react-router-dom'

import styled from 'styled-components'
import Select from '@mui/material/Select';


const Formulario = styled.form`
    background-color: #f8f8f8;
    border-radius: 3px;
    border: solid;
    border-color: gray;
    display: flex;
    flex-direction: column;
    margin: auto; //Se centra el formulario
    width: 43%;
    word-wrap: break-word; //Hace que el texto se ajuste de forma automática para evitar que se salga del botón.

    @media (max-width: 950px){
      width: 70%;
    }
    @media (max-width: 500px){
      width: 90%;
    }


`;

const EspacioVertical = styled.div`
  margin-bottom: 10px;
`;

const Titulo = styled.div`
  font-size: xx-large;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin-left: 10%;
`;

const Subtitulo = styled.p`
width: 90%;
color: #a09e9e;
font-size: medium;
border-bottom: 2px solid #a09e9e; /* Línea separadora */
`;

const Nombres = styled.input`
  background-color: #ccd0d5;
  border-radius: 6px;
  width: 50%;
  margin-right: 5px;
`;

const Apellidos = styled.input`
  background-color: #ccd0d5;
  width: 50%;
  border-radius: 6px;
`;

const NombreApellido = styled.div`
  background-color: transparent;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
  width: 80%;

  // Selecciona todos los elementos hijos directos de NombreApellido y les aplica un ancho inicial del 40% del ancho del contenedor padre
  & > * {
    flex-basis: 40%;
  }

  @media (max-width: 600px) {
    flex-direction: column; // Los elementos se comportan como columnas
    align-items: center; // Centra los elementos en el eje X
    & > * {
    width: 98%;
    margin: auto;
  }
  }
`;

//
const Input = styled.input`
  background-color: #ccd0d5;
  border-radius: 6px;
  display: flex;
  width: 80%;
  margin: auto;
`;

const NumeroTelefonico = styled.div`
display: flex;
  margin: auto;
  width: 80%;
`;

const CodigosInternacionales = styled.select`
  align-items: center;
  margin-right: 3px;
  width: 14%;

  @media (max-width: 900px){
    width: 30%;
    
  }
`;

const InputTelefono = styled.input`
background-color: #ccd0d5;
border-radius: 6px;
width: 90%;


`;

const CiudadComuna = styled.div`
  border-color: transparent;
  margin: auto;
  width: 80%;
  
  & > * {
    width: 49.4%;  
  }

  @media (max-width: 600px) {
    & > * {
      margin-left:0;
      width: 100%;
      }
    
  }

`;

const Birthday = styled.div`
  border-color: transparent;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 80%;
  label {
    margin-bottom: 6px;
  }
  ${EspacioVertical} {
    margin-bottom: 20px;
  }
`;

const SubmitButton = styled.button`
  background-color: #1f618d;
  border-radius: 10px;
  border-color: #1f618d;
  color: #eae1e1;
  height: 80%;
  font-size: x-large;
  margin: auto;
  margin-bottom: 3%;
  width: 40%;

  //Animación para cuando el cursor pase por encima del botón.
  &:hover {
      box-shadow: 0px 0px 5px 2px rgba(0,0,0,0.25); /* Agrega una sombra */
      transform: scale(0.95); /* Reduzca ligeramente el tamaño */
    }

  // Agrega una sombra cuando el botón es presionado
  &:active {
      box-shadow: 0px 0px 10px 2px rgba(0,0,0,0.25); /* Agrega una sombra más grande */
      transform: scale(0.9); /* Reduce el tamaño aún más */
  }

  @media (max-width: 590px){
    width: 70%;
    
  }

`;






export const RegisterForm = () => {

  const handleClick = (event) => {

    //Se llama al metodo para evitar que haga su comportamiento por defecto, en este caso enviar el formulario
    event.preventDefault();

    //alert("¡Hiciste clic en el botón!");
    console.log("Botón presionado");
  }
  return (
    
<Formulario>
    <EspacioVertical/>
    <Titulo>Regístrate
      <Subtitulo>Es rápido y facil</Subtitulo>
    </Titulo>
    
    <NombreApellido>
      <Nombres type="text" name="nombres" placeholder='Nombre(s)'/>
      <Apellidos type="text" name="nombres" placeholder='Apellido(s)'/>
    </NombreApellido>

    {/*Espacio creado para separar los elementos*/}
    <EspacioVertical />

    <Input type="email" name="email" placeholder='Correo Electrónico'/>
    <EspacioVertical />
    <Input type="password" name="password" placeholder='Contraseña Nueva'/>
    <EspacioVertical />
    <Input type="password" name="password" placeholder='Repita Su Contraseña'/>
    <EspacioVertical />

    <NumeroTelefonico>
      <CodigosInternacionales>
        <option>+56</option>
      </CodigosInternacionales>
      <InputTelefono type='tel' name='telefono' placeholder='Número Telefónico (ejemplo: 912345678)'></InputTelefono>
    </NumeroTelefonico>

    <EspacioVertical />

    <CiudadComuna>
      
      <select>
        <option selected>Seleccione Su Ciudad</option>
        <option >Santiago</option>
        <option>Valparaiso</option>
      </select>

      <select>
        <option selected>Seleccione Su Comuna</option>
        <option>La Florida</option>
        <option>Puente Alto</option>
      </select>      
    </CiudadComuna>

    <EspacioVertical />

    <Birthday>
      <label>Ingrese Su Fecha de Nacimiento</label>
      <input type="date"/>
    </Birthday>
    <EspacioVertical/>
    <SubmitButton onClick={handleClick}>Registrarse</SubmitButton>
    {/* lo ultimo que hice fue configurar que al presionar el boton no se haga nada, pq antes se hacia eso de enviar la info al swervidor
    pero ahora no hace nada, por lo que yo puedo configurar lo que se hace*/}
</Formulario>



  )
}


{/* <label>
    Nombre:
    <input type="text" name="firstName" placeholder='nombre'/>
  </label>

  <input type="text" name="firstName" placeholder='nombrdddde'/>
  <label>
    Apellido:
    <input type="text" name="lastName" />
  </label>

  <label>
    Email:
    <input type="email" name="email" />
  </label>

  <label>
    Contraseña:
    <input type="password" name="password" />
  </label>

  <label>
    Comuna:
    <select name="comuna">
      <option value="puente-alto">Puente Alto</option>
      <option value="la-florida">La Florida</option>
      
    </select>
  </label>

  <label>
    Teléfono:
    <input type="tel" name="phone" />
  </label>

  <label>
    Fecha de nacimiento:
    <input type="date" name="birthdate" />
  </label> */}