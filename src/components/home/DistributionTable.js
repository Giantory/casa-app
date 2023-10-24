import React, { useState, useContext } from 'react'
import Box from '@mui/material/Box';
import { DataGrid} from '@mui/x-data-grid';
import { useTheme } from '@mui/material';

//context
import { vehiclesConsumContext } from '../../pages/home';


const columns = [
    {
        field: 'vehicle',
        headerName: 'Equipo',
        width: 105,
        editable: true,
    },
    {
        field: 'brand',
        headerName: 'Marca',
        width: 105,
        editable: true,
    },
    {
        field: 'model',
        headerName: 'Modelo',
        width: 105,
        editable: true,
    },
    {
        field: 'code',
        headerName: 'Placa',
        width: 105,
        editable: true,
    },
    {
        field: 'horometer',
        headerName: 'Horometraje',
        type: 'number',
        width: 150,
        editable: true,
    },
    {
        field: 'kilometer',
        headerName: 'Kilometraje',
        type: 'number',
        width: 150,
        editable: true,
    },
    {
        field: 'consum',
        headerName: 'Consumo',
        type: 'number',
        width: 105,
        editable: true,
    },
    {
        field: 'lastConsum',
        headerName: 'Último consumo',
        width: 150,
        editable: true,
    },
    {
        field: 'place',
        headerName: 'Frente',
        width: 105,
        editable: true,
    },


];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];



export default function DistributionTable() {

    const { vehiclesListConsum, setVehiclesListConsum } = useContext(vehiclesConsumContext);

    const theme = useTheme();
    return (
        <Box sx={{
            height: 475,
            width: '100%',
            bgcolor: 'background.paper',
            borderRadius: 2,
        }}>
            <DataGrid
                rows={vehiclesListConsum}
                columns={columns}
                columnHeaderHeight={40}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 9,
                        },
                    },
                }}
                rowHeight={40}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
           
            />
        </Box>
    );
}
