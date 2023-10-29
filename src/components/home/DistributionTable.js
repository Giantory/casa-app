import React, { useState, useContext } from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useTheme } from '@mui/material';

//context
import { vehiclesConsumContext } from '../../pages/home';


const columns = [
    {
        field: 'equipo',
        headerName: 'Equipo',
        width: 105,
        editable: true,
    },
    {
        field: 'marca',
        headerName: 'Marca',
        width: 105,
        editable: true,
    },
    {
        field: 'modelo',
        headerName: 'Modelo',
        width: 105,
        editable: true,
    },
    {
        field: 'placa',
        headerName: 'Placa',
        width: 105,
        editable: true,
    },
    {
        field: 'horometraje',
        headerName: 'Horometraje',
        type: 'number',
        width: 190,
        editable: true,
    },
    {
        field: 'kilometraje',
        headerName: 'Kilometraje',
        type: 'number',
        width: 190,
        editable: true,
    },
    {
        field: 'galones',
        headerName: 'Galones',
        type: 'number',
        width: 105,
        editable: true,
    },
    {
        field: 'rendimiento',
        headerName: 'Rendimiento',
        type: 'number',
        width: 105,
        editable: true,
    },
    {
        field: 'estadoDescripcion',
        headerName: 'Estado',
        width: 105,
        editable: true,
    },


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
                slots={{ toolbar: GridToolbar }}
                rows={vehiclesListConsum}
                getRowId={(row) => row.placa}
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
