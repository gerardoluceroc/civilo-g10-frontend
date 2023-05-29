import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InfoIcon from '@mui/icons-material/Info';
import { IconButton } from '@mui/material';
import { getAllUsers } from '../api/civilo_roller_api';

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: left;
  cursor: pointer;
  background-color: #f5f5f5;
`;

const TableBody = styled.tbody``;

const TableRow = styled.tr`
  background-color: #e2e2e2;
`;

const TableCell = styled.td`
  padding: 8px;
  border-bottom: 1.5px ridge;
`;

const SortIcon = styled.span`
  margin-left: 5px;
`;

export const UsersTable = ({ tipoUsuario }) => {
  const [usuarios, setUsuarios] = useState([]);
  const [usuariosEspecificos, setUsuariosEspecificos] = useState([]);
  const [orderBy, setOrderBy] = useState('');
  const [order, setOrder] = useState('asc');

  useEffect(() => {
    getAllUsers()
      .then((data) => {
        setUsuarios(data);
        let listado = data.filter(
          (usuario) =>
            usuario.role.accountType.toLowerCase() === tipoUsuario
        );
        setUsuariosEspecificos(listado);
      })
      .catch((error) => console.log("Error al obtener usuarios", error));
  }, [tipoUsuario]);

  const headers = [
    { id: 'name', label: 'Nombre' },
    { id: 'surname', label: 'Apellido' },
    { id: 'email', label: 'Email' },
    { id: 'phoneNumber', label: 'Contacto' },
    { id: 'commune', label: 'Comuna' },
    { id: 'acciones', label: 'Acciones' }
  ];

  const handleSort = (columnId) => {
    const isAsc = orderBy === columnId && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(columnId);
  };

  const compareValues = (a, b) => {
    if (a[orderBy] < b[orderBy]) {
      return order === 'asc' ? -1 : 1;
    }
    if (a[orderBy] > b[orderBy]) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  };

  const sortedUsuarios = [...usuariosEspecificos].sort(compareValues);

  return (
    <TableContainer>
      <TableWrapper>
        <thead>
          <tr>
            {headers.map((header) => (
              <TableHeader
                key={header.id}
                onClick={() => handleSort(header.id)}
              >
                {header.label}
                {orderBy === header.id && (
                  <SortIcon>{order === 'asc' ? '▲' : '▼'}</SortIcon>
                )}
              </TableHeader>
            ))}
          </tr>
        </thead>
        <TableBody>
          {sortedUsuarios.map((usuario) => (
            <TableRow key={usuario.userID}>
              <TableCell>{usuario.name}</TableCell>
              <TableCell>{usuario.surname}</TableCell>
              <TableCell>{usuario.email}</TableCell>
              <TableCell>{usuario.phoneNumber}</TableCell>
              <TableCell>{usuario.commune}</TableCell>
              <TableCell>
                <IconButton>
                  <InfoIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableWrapper>
    </TableContainer>
  );
};










































































// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import InfoIcon from '@mui/icons-material/Info';
// import { IconButton } from '@mui/material';
// import { getAllUsers } from '../api/civilo_roller_api';




// const TableContainer = styled.div`
//   width: 100%;
//   overflow-x: auto; /* Habilita el desplazamiento horizontal */
// `;

// const TableWrapper = styled.table`
//   width: 100%;
//   border-collapse: collapse;
// `;

// const TableHeader = styled.th`
//   padding: 8px;
//   text-align: left;
//   cursor: pointer;
//   background-color: #f5f5f5;
// `;

// const TableBody = styled.tbody``;

// const TableRow = styled.tr``;

// const TableCell = styled.td`
//   padding: 8px;
//   border-bottom: 1px solid #ddd;
// `;

// const SortIcon = styled.span`
//   margin-left: 5px;
// `;

// export const UsersTable = ({tipoUsuario}) => {

//     //Define los datos de ejemplo
//   const rows = [
//     { nombre: 'John', apellido: 'Doe', email: 'john.doe@example.com', contacto: '123456789', comuna: 'Puente Alto' },
//     { nombre: 'Jane', apellido: 'Smith', email: 'jane.smith@example.com', contacto: '987654321', comuna: 'La Florida'},
//     //Agrega más filas aquí...
//   ];

//   // Define los nombres de las cabeceras y los datos a ordenar
//   const headers = [
//     { id: 'nombre', label: 'Nombre' },
//     { id: 'apellido', label: 'Apellido' },
//     { id: 'email', label: 'Email' },
//     { id: 'contacto', label: 'Contacto' },
//     {id: 'comuna', label: 'Comuna'}, 
//     {id: 'acciones', label: 'Acciones'}
//   ];

//   const [usuarios, setUsuarios] = useState([]);
//   const [usuariosEspecificos, setUsuariosEspecificos] = useState([]);

//   useEffect(() => {
//     //Se obtienen los usuarios de la plataforma
//     getAllUsers()
//     .then((data) => {
//       setUsuarios(data)
//       console.log(data);
//       let listado = [];
      
//       //se recorre el listado de usuarios
//       data.map((usuario) => {
//         //si el rol de usuario coincide con el ingresado como prop
//         if(usuario.role.accountType.toLowerCase() === tipoUsuario){
//           //Se agrega al listado que luego sera mostrado en la tabla
//           listado.push(usuario);
//         }
//       })
//       //Se ajusta el listado de usuarios con el rol especifico
//       setUsuariosEspecificos(listado);
//     })
//     .catch((error) => console.log("Error al obtener usuarios", error));
//   }, [])


//   const [orderBy, setOrderBy] = useState('');
//   const [order, setOrder] = useState('asc');

//   // Función para manejar el ordenamiento al hacer clic en una cabecera
//   const handleSort = (columnId) => {
//     const isAsc = orderBy === columnId && order === 'asc';
//     setOrder(isAsc ? 'desc' : 'asc');
//     setOrderBy(columnId);
//   };

//   // Función para comparar los valores y ordenar la tabla
//   const compareValues = (a, b) => {
//     if (a[orderBy] < b[orderBy]) {
//       return order === 'asc' ? -1 : 1;
//     }
//     if (a[orderBy] > b[orderBy]) {
//       return order === 'asc' ? 1 : -1;
//     }
//     return 0;
//   };

//   // Ordena los datos en base al orden seleccionado
//   const usuariosOrdenados = [...usuariosEspecificos].sort(compareValues);

//   return (
//     <TableContainer>
//       <TableWrapper>
//         <thead>
//           <tr>
//             {headers.map((header) => (
//               <TableHeader key={header.id} onClick={() => handleSort(header.id)}>
//                 {header.label}
//                 {orderBy === header.id && (
//                   <SortIcon>{order === 'asc' ? '▲' : '▼'}</SortIcon>
//                 )}
//               </TableHeader>
//             ))}
//           </tr>
//         </thead>
//         <TableBody>
//           {usuariosOrdenadoss.map((usuario) => (
//             <TableRow key={usuario.userID}>
//               <TableCell>{usuario.name}</TableCell>
//               <TableCell>{usuario.surname}</TableCell>
//               <TableCell>{usuario.email}</TableCell>
//               <TableCell>{usuario.phoneNumber}</TableCell>
//               <TableCell>{usuario.commune}</TableCell>
//               <TableCell>
//                 <IconButton>
//                   <InfoIcon/>
//                 </IconButton>
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </TableWrapper>
//     </TableContainer>
//   );
// };
