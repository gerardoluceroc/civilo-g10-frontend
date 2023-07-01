import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { getAllRequests, getAllSellers } from '../api/civilo_roller_api';
import SelectSellerUI from './SelectSellerUI';


const Title = styled.h1`
  text-align: center;
  margin-bottom: 3%;
`;

const Div = styled.div`
    min-height: calc(100vh - 80px);
`;







// Define las cabeceras de las columnas y sus propiedades
const columns = [
  { id:'identificador', label: 'Identificador', minWidth: 170}, 
  { id:'curtainType', label: 'Tipo de Cortina', minWidth: 170}, 
  { id:'descripcion', label: 'Descripción', minWidth: 170}, 
  { id:'fechaIngreso', label: 'Fecha de Ingreso', minWidth: 170}, 
  { id:'fechaLimite', label: 'Fecha Límite', minWidth: 170}, 
  { id:'clienteAsociado', label: 'Cliente Asociado', minWidth: 170}, 
  { id:'estatusSolicitud', label: 'Estado de Solicitud', minWidth: 170}, 
  { id:'vendedorAsignado', label: 'Vendedor Asignado', minWidth: 170},  
  
//   { id: 'name', label: 'Name', minWidth: 170 },
//   { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
//   {
//     id: 'population',
//     label: 'Population',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toLocaleString('es-ES'),
//   },
//   {
//     id: 'size',
//     label: 'Size\u00a0(km\u00b2)',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toLocaleString('en-US'),
//   },
//   {
//     id: 'density',
//     label: 'Density',
//     minWidth: 170,
//     align: 'right',
//     format: (value) => value.toFixed(2),
//   },
];

// // Crea tus propios datos y reemplaza los datos de ejemplo
// function createData(name, code, population, size) {
//   const density = population / size;
//   return { name, code, population, size, density };
// }


// // Reemplaza los datos de ejemplo con tus propios datos
// const rows = [
//   createData('India', 'IN', 1324171354, 3287263),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('China', 'CN', 1403500365, 9596961),
//   createData('China', 'CN', 1403500365, 9596961),
//   // Agrega más filas según tus datos
// ];

const StyledTableCell = styled(TableCell)`
  min-width: ${({ minWidth }) => minWidth}px;
`;

const StyledTableContainer = styled(TableContainer)`
  max-height: 440px;
  max-height: 100vh; /* Establece un tamaño máximo para la tabla */
`;

export default function RequestManagementUI() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
////////////////////Codigo relacionado con los datos a colocar en la tabla /////////////////////////////////////////

    //Todas las solicitudes
    const [requests, setRequests] = useState([]);

    //Todos los vendedores
    const [sellers, setSellers] = useState([]);

    const user = JSON.parse(sessionStorage.getItem("user"));

    console.log(user.userID);
    
    useEffect(() => {
        //Se obtienen del servidor todas las solicitudes y vendedores
        getAllRequests()
            .then((data) => { setRequests(data);})
            .catch((error) => { console.log("Error al obtener las solicitudes ", error) })

        getAllSellers()
            .then((data) => { setSellers(data) })
            .catch((error) => { 
              console.log("Error al obtener los vendedores ", error); })
        
    }, [user.userID]);

    //funcion que crea un objeto con la fila de la tabla
    function createData(identificador, curtainType, descripcion, fechaIngreso, fechaLimite, clienteAsociado, estatusSolicitud, vendedorAsignado){
        return {identificador, curtainType, descripcion, fechaIngreso, fechaLimite, clienteAsociado, estatusSolicitud, vendedorAsignado};
    }
    //funcion que transforma una fecha del tipo "2023-16-06" al formato "16/06/2023"
    function formatDateToSpanish(dateString) {
        const [year, month, day] = dateString.split('-');
        const formattedDate = `${day}/${month}/${year}`;
        return formattedDate;
      }
      

    //Se definen las filas de la tabla
    const rows = requests.map((solicitud) => 
                    createData(solicitud.requestID,
                                solicitud.curtain.curtainType,
                                solicitud.description,
                                formatDateToSpanish(solicitud.admissionDate),
                                formatDateToSpanish(solicitud.deadline),
                                `${solicitud.user.name} ${solicitud.user.surname}`,
                                solicitud.status.statusName,
                                solicitud.sellerId));

    
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Div>
    <Paper>
      <StyledTableContainer>
        <Title>Solicitudes Realizadas</Title>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {/* Itera sobre las columnas y muestra las cabeceras */}
              {columns.map((column) => (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  minWidth={column.minWidth}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Itera sobre las filas y muestra los datos */}
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {/* Itera sobre las columnas y muestra los valores */}
                  {columns.map((column) => {
                    const id_solicitud = row.identificador;
                    const value = row[column.id];
                    return (
                      <StyledTableCell key={column.id} align={column.align}>
                        
                        {column.format && typeof value === 'number'
                          ? column.format(value)
                          : column.id === "vendedorAsignado" ? <SelectSellerUI tipoSelect={"asignarVendedor"} listado = {sellers} IdSolicitud={id_solicitud} solicitudes={requests} vendedorAsignado = {value}/> 
                          : value}
                      </StyledTableCell>
                    );
                  })}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </Div>
  );
}
