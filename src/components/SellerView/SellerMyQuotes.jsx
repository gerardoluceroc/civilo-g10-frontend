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
import SelectSellerUI from '../SelectSellerUI';
import InfoIcon from '@mui/icons-material/Info';
import ModalRequestDetails from '../ModalRequestDetails';
import { getAllQuotes, getAllRequests, getAllSellers } from '../../api/civilo_roller_api';


const Title = styled.h1`
  text-align: center;
  margin-bottom: 3%;
`;

const Div = styled.div`
    min-height: calc(100vh - 80px);
`;


const BotonVerDetalles = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  margin: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover::before {
    content: 'Ver Detalles';
    position: absolute;
    top: -35px; /* Modificado: Ajusta la posición vertical del texto */
    left: 50%;
    transform: translateX(-50%);
    padding: 4px 8px;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    border-radius: 4px;
    font-size: 12px;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }

  &:hover::after {
    content: '';
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    border-style: solid;
    border-width: 5px;
    border-color: transparent transparent rgba(0, 0, 0, 0.8) rgba(0, 0, 0, 0.8);
  }

  &:hover::before {
    opacity: 1;
  }
`;







// Define las cabeceras de las columnas y sus propiedades
const columns = [
  { id:'identificador', label: 'Identificador', minWidth: 170}, 
  { id:'costoTotal', label: 'Costo Total', minWidth: 170}, 
  { id:'acciones', label: 'Acciones', minWidth: 170},  
  
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

export default function SellerMyQuotes() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
////////////////////Codigo relacionado con los datos a colocar en la tabla /////////////////////////////////////////

    const [cotizaciones, setCotizaciones] = useState([]);
    useEffect(() => {
      getAllQuotes()
      .then((data) => {setCotizaciones(data); console.log("cotizacionesssssssss",data);})
      .catch((error) => console.log("error al obtener cotizaciones: ",error));
    
      
    }, [])
    










    //modal que muestra los detalles de la solicitud
    const [modalOpen, setModalOpen] = useState(false);

    //maneja el cierre del modal
    const handleModalClose = () => {
      setModalOpen(false);
    };

    //Todas las solicitudes
    const [requests, setRequests] = useState([]);

    //solicitud seleccionada para ver sus detalles
    const [detallesSolicitud, setDetallesSolicitud] = useState([]);

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
    function createData(identificador, costoTotal, acciones){
        return {identificador, costoTotal, acciones};
    }
    //funcion que transforma una fecha del tipo "2023-16-06" al formato "16/06/2023"
    function formatDateToSpanish(dateString) {
        const [year, month, day] = dateString.split('-');
        const formattedDate = `${day}/${month}/${year}`;
        return formattedDate;
      }
      

    //Se definen las filas de la tabla
    const rows = cotizaciones.map((cotizacion) => 
                    createData(cotizacion.quoteID,
                                cotizacion.quoteSummary.totalCostOfProduction,
                                )
                                );
    //Funcion que se activa al presionar el boton Ver Detalles
    const handleVerDetalles = (event, id_solicitud) => {
      //se busca la solicitud con la id de entrada
      const solicitudSeleccionada = requests.find((solicitud) => solicitud.requestID === id_solicitud);

      //se cambia para que se pueda mostrar en el modal
      setDetallesSolicitud(solicitudSeleccionada);

      //se abre el modal con los detalles de la solicitud
      setModalOpen(true);

    }

    
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
      <ModalRequestDetails open={modalOpen} onClose={handleModalClose} requestDetails={detallesSolicitud} /> 
      <Paper>
        <StyledTableContainer>
          <Title>Cotizaciones Realizadas</Title>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {/* Itera sobre las columnas y muestra las cabeceras */}
                {/* La condicion de ModalOpen === false se hace para que cuando el modal se abra, las cabeceras de la tabla
                 no se vean, ya que por alguna razon esta cabecera se ve por encima del modal, tapandolo. */}
                {modalOpen === false ? columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    minWidth={column.minWidth}
                  >
                    {column.label}
                  </StyledTableCell>
                ))
                  : null }
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
                            : column.id === "acciones" ? <BotonVerDetalles onClick={(e) => handleVerDetalles(e,id_solicitud)}> <InfoIcon/> </BotonVerDetalles>
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
