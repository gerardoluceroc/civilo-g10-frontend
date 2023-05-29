import React, { useState } from 'react';
import styled from 'styled-components';

// Define los datos de ejemplo
const rows = [
  { nombre: 'John', apellido: 'Doe', email: 'john.doe@example.com', contacto: '123456789' },
  { nombre: 'Jane', apellido: 'Smith', email: 'jane.smith@example.com', contacto: '987654321' },
  // Agrega más filas aquí...
];

// Define los nombres de las cabeceras y los datos a ordenar
const headers = [
  { id: 'nombre', label: 'Nombre' },
  { id: 'apellido', label: 'Apellido' },
  { id: 'email', label: 'Email' },
  { id: 'contacto', label: 'Contacto' },
];

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto; /* Habilita el desplazamiento horizontal */
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

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

const SortIcon = styled.span`
  margin-left: 5px;
`;

export const UsersTable = () => {
  const [orderBy, setOrderBy] = useState('');
  const [order, setOrder] = useState('asc');

  // Función para manejar el ordenamiento al hacer clic en una cabecera
  const handleSort = (columnId) => {
    const isAsc = orderBy === columnId && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(columnId);
  };

  // Función para comparar los valores y ordenar la tabla
  const compareValues = (a, b) => {
    if (a[orderBy] < b[orderBy]) {
      return order === 'asc' ? -1 : 1;
    }
    if (a[orderBy] > b[orderBy]) {
      return order === 'asc' ? 1 : -1;
    }
    return 0;
  };

  // Ordena los datos en base al orden seleccionado
  const sortedRows = [...rows].sort(compareValues);

  return (
    <TableContainer>
      <TableWrapper>
        <thead>
          <tr>
            {headers.map((header) => (
              <TableHeader key={header.id} onClick={() => handleSort(header.id)}>
                {header.label}
                {orderBy === header.id && (
                  <SortIcon>{order === 'asc' ? '▲' : '▼'}</SortIcon>
                )}
              </TableHeader>
            ))}
          </tr>
        </thead>
        <TableBody>
          {sortedRows.map((row) => (
            <TableRow key={row.email}>
              <TableCell>{row.nombre}</TableCell>
              <TableCell>{row.apellido}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.contacto}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </TableWrapper>
    </TableContainer>
  );
};

