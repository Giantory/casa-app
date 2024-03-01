import React, { useEffect, useState, createContext, useContext } from 'react'

import EnhancedTable from '../../components/home/DistributionTable';
import Grid from '@mui/system/Unstable_Grid/Grid';
import Button from '@mui/material/Button';
import DistributionForm from '../../components/home/DistributionForm';
import DistributionTable from '../../components/home/DistributionTable';
import DaysControl from '../../components/home/DaysControl';
import DaysControlSummary from '../../components/home/DaysControlSummary';
import QuickActionsList from '../../components/home/QuickActionsList';
import Calendar from '../../components/home/Calendar';
import StatusConsumSummary from '../../components/home/StatusConsumSummary';
import DistributionFormV2 from '../../components/home/DistributionFormV2';
import TankReferenceForm from '../../components/home/TankReferenceForm';
import CategoriesChart from '../../components/home/CategoriesChart';
import TankReferenceChart from '../../components/home/TankReferenceChart';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';
import Box from '@mui/material/Box'
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import { Typography } from '@mui/material'

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import CancelIcon from '@mui/icons-material/Cancel';
import { useTheme } from '@mui/material/';
import Badge from '@mui/material/Badge';

import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import UploadIcon from '@mui/icons-material/Upload';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';

import DropExcelZone from '../../components/home/DropExcelZone';
import { styled } from '@mui/material/styles'

import { SnackbarContext } from '../../components/layout/UserLayout';
export const vehiclesConsumContext = createContext({});





const ButtonStyled = styled(Button)(({ theme }) => ({
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        textAlign: 'center'
    }
}))

const Home = () => {

    const [openCleanDialog, setOpenCleanDialog] = useState(false);
    const [openDropExcelZoneModal, setOpenDropExcelZoneModal] = useState(false);
    const [nameExcelFile, setNameExcelFile] = useState(null);
    const [excelFile, setExcelFile] = useState(null);
    const [regularCount, setRegularCount] = useState(0);
    const [suspiciousCount, setSuspiciousCount] = useState(0);
    const [measuredCount, setMeasuredCount] = useState(0);
    const [vehiclesListConsum, setVehiclesListConsum] = useState([]);
    let totalConsum;

    useEffect(() => {
        // Esta función se ejecutará cada vez que vehiclesListConsum cambie
        countConsumStatus();
    }, [vehiclesListConsum]);



    const { snackbarState, setSnackbarState } = useContext(SnackbarContext)
    const theme = useTheme();

    const handleClickOpenCleanDialog = () => {
        setOpenCleanDialog(true);
    };

    const handleCloseCleanDialog = () => {
        setOpenCleanDialog(false);
    };

    const calculateTotalConsum = () => {
        console.log(vehiclesListConsum);
        return totalConsum = vehiclesListConsum.reduce((total, vehicle) => {
            return total + parseFloat(vehicle.galones);
        }, 0)

    }
    const cleanTable = () => {

        setVehiclesListConsum([]);
        setOpenCleanDialog(false);
    }

    const processConsums = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', excelFile);
        fetch('http://localhost:3001/api/consums/processManyConsums', {
            method: 'POST',
            body: formData
        }).then(res => {
            return res.json();
        }).then(response => {
            if (!response[0]) {
                setSnackbarState({
                    open: true,
                    message: 'Error al procesar',
                    status: 'error'
                });
            } else {
                let newVehiclesList = [];
                response.forEach((vehicleConsum) => {
                    console.log(vehicleConsum);
                    newVehiclesList.push(vehicleConsum);
                });
                setVehiclesListConsum([...vehiclesListConsum, ...newVehiclesList]);

                setSnackbarState({
                    open: true,
                    message: 'Procesado con éxito',
                    status: 'success'
                });
            }
        });
    };

    const countConsumStatus = () => {
        let regular = 0;
        let suspicious = 0;
        let measured = 0;

        vehiclesListConsum.forEach(obj => {
            const estado = obj.estadoDescripcion;
            if (estado === "Regular") {
                regular++;
            } else if (estado === "Desmedido") {
                measured++;
            } else if (estado === "Sospechoso") {
                suspicious++;
            }
        });

        setRegularCount(regular);
        setSuspiciousCount(suspicious);
        setMeasuredCount(measured);
    };



    return (
        <>
            <vehiclesConsumContext.Provider value={{ vehiclesListConsum, setVehiclesListConsum }}>
                <Grid container spacing={2} >
                    <Grid item xs={6}>
                        <Stack direction="row" spacing={2} sx={{ display: "flex", width: '100%', alignItems: 'center', }}>
                            <ButtonStyled component='label' variant='contained' startIcon={<UploadIcon />} htmlFor='account-settings-upload-image'>
                                Subir
                                <input
                                    hidden
                                    type='file'
                                    // onChange={(e) => setExcelFile(e.target.files[0])}
                                    accept='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                                    id='account-settings-upload-image'
                                    onChange={(e) => {
                                        const archivo = e.target.files[0];
                                        setNameExcelFile(archivo ? archivo.name : null);
                                        setExcelFile(archivo);
                                        // Aquí puedes hacer lo que necesites con el archivo, por ejemplo, almacenarlo en un estado si es necesario.
                                    }}
                                />

                            </ButtonStyled>
                            <InsertDriveFileIcon />
                            <Typography variant={'subtitle1'} component="div" sx={{ fontWeight: 'light', m: 1 }}>
                                {nameExcelFile ? nameExcelFile : 'No file'}
                            </Typography>

                        </Stack>
                    </Grid>
                    <Grid item xs={6} sx={{ display: "flex" }}>
                        <Stack direction="row" spacing={4} sx={{ display: "flex", width: '100%', justifyContent: "flex-end" }}>
                            <Button disabled={nameExcelFile ? false : true} size='small' variant="contained" color='success'
                                startIcon={<PublishedWithChangesIcon />} onClick={(e) => { processConsums(e) }} >
                                Procesar
                            </Button>
                            <Button size='small' variant="contained" startIcon={<ExitToAppIcon />}
                                sx={{ backgroundColor: theme.palette.primary.light, }} >
                                Exportar
                            </Button>
                            <Button size='small' variant="contained" startIcon={<SaveIcon />}
                                sx={{ backgroundColor: theme.palette.primary.light, }} >
                                Guardar
                            </Button>
                            <Button size='small' variant="contained" color='error' startIcon={<DeleteIcon />} onClick={handleClickOpenCleanDialog}>
                                Limpiar
                            </Button>
                        </Stack>
                        <Dialog
                            open={openCleanDialog}
                            onClose={handleCloseCleanDialog}
                        >
                            <DialogTitle id="alert-dialog-title">
                                {"¿Estás seguro de realizar esta acción?"}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    Eliminará los registros de la tabla actual
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleCloseCleanDialog}>Cancelar</Button>
                                <Button variant="contained" color={'error'} onClick={cleanTable} autoFocus>
                                    Aceptar
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </Grid>
                    <Grid item xs={2} >
                        <DistributionFormV2 />
                    </Grid>
                    <Grid container item xs={10}  >
                        {/* <Grid item xs={12} sx={{display:"flex", justifyContent:"flex-end"}} >
                        <TankReferenceForm />
                    </Grid> */}
                        <Grid container item xs={12} >
                            <Grid item xs={6}>
                                <Stack direction="row" spacing={4} p={1}>
                                    <Badge badgeContent={regularCount} color={'secondary'}>
                                        <Chip color={'success'} icon={<CheckCircleIcon />} label="Regular" />
                                    </Badge>
                                    <Badge badgeContent={suspiciousCount} color={'secondary'}>
                                        <Chip color={'warning'} icon={<ErrorIcon />} label="Sospechoso" />
                                    </Badge>
                                    <Badge badgeContent={measuredCount} color={'secondary'}>
                                        <Chip color={'error'} icon={<CancelIcon />} label="Desmedido" />
                                    </Badge>
                                </Stack>

                            </Grid>
                            <Grid item xs={6} sx={{ display: "flex", justifyContent: "flex-end" }}>
                                <Typography variant={'subtitle1'} component="div" sx={{ fontWeight: 'light', m: 1 }}>
                                    Total: {
                                        calculateTotalConsum()
                                    }
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} >
                            <DistributionTable />
                        </Grid>
                        {/* <DropExcelZone showModal={{openDropExcelZoneModal, setOpenDropExcelZoneModal}} /> */}
                    </Grid>
                </Grid>
            </vehiclesConsumContext.Provider>
        </>
    );
}

export default Home;