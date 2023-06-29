import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { URL_CIVILO, obtenerVendedor } from '../api/civilo_roller_api';
import { useEffect } from 'react';
import { useState } from 'react';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function SelectUI({ tipoSelect ,listado, IdSolicitud, solicitudes, vendedorAsignado: sellerID}) {
  const [vendedorSeleccionado, setVendedorSeleccionado] = useState('');
  const [requests, setRequests] = useState(solicitudes);
  const [open, setOpen] = useState(false);
  
  console.log("djsfkdshkj id: ",IdSolicitud);

  const handleSellerChange = async (requestID, sellerID) => {
    //Queda pediente esta parte, no pude lograr hacer la peticion correctamente
};

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  if(tipoSelect === "asignarVendedor"){
    return (
        <div>
          <FormControl sx={{ m: 1, minWidth: 120}}>
          <InputLabel id="demo-simple-select-label" sx={{ marginTop: '-5px' }}>Asignar</InputLabel>
            <Select
              labelId="demo-controlled-open-select-label"
              id="demo-controlled-open-select"
              open={open}
              onClose={handleClose}
              onOpen={handleOpen}
              value={vendedorSeleccionado}
              onChange={(e) => handleSellerChange(IdSolicitud, sellerID)}
            >
              {listado.map((item) => (
                <MenuItem key={item.userID} value={`${item.name} ${item.surname}`}>
                  {`${item.name} ${item.surname}`}
                  {item.userID === sellerID ? <CheckCircleIcon sx={{ marginLeft: '8px' }} /> : null}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      );
  }


}
