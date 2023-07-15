import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllStatus } from '../api/civilo_roller_api';

// const options = [
//   'None',
//   'Atria',
//   'Callisto',
//   'Dione',
//   'Ganymede',
//   'Hangouts Call',
//   'Luna',
//   'Oberon',
//   'Phobos',
//   'Pyxis',
//   'Sedna',
//   'Titania',
//   'Triton',
//   'Umbriel',
// ];



const ITEM_HEIGHT = 48;

export default function MenuRequestStatus({estadoActual}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [estados, setEstados] = useState([]);

  useEffect(() => {
    getAllStatus()
    .then((status) => {
        //Se elimina la opcion de sin asignar ya que esto no lo puede hacer el vendedor
        //Tambien se elimina la opcion del estado actual ya que no tiene sentido cambiar el estado a uno el cual ya se encuentra
        let opcionesDisponibles = status.filter(statu => statu.statusName !== "Sin asignar");
        opcionesDisponibles = opcionesDisponibles.filter(statu => statu.statusID !== estadoActual.statusID);
        setEstados(opcionesDisponibles);

    })
    .catch((error) => console.log("Error al obtener los estados posibles de las solicitudes: ",error));
  }, [])
  



  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (opcionSeleccionada) => {
    setAnchorEl(null);
    console.log("Opción seleccionada:", opcionSeleccionada);

    //Se cambia el estado de la solicitud
    
    /* Insertar Funcion */
  };

  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {estados.map((opciones) => (
        //   <MenuItem key={option} selected={option === 'Pyxis'} onClick={handleClose}>
        //     {option}
        //   </MenuItem>
            <MenuItem key={opciones.statusID} onClick={() => handleClose(opciones)}>
                {opciones.statusName}
            </MenuItem>
        ))}
      </Menu>
    </div>
  );
}