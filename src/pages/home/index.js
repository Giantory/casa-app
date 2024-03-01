import React, { useEffect, useState, createContext } from 'react'

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

export const vehiclesConsumContext = createContext({});


const Home = () => {

    const [open, setOpen] = useState(false);
    const theme = useTheme();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };



    const [vehiclesListConsum, setVehiclesListConsum] = useState([]);
    let totalConsum;

    const calculateTotalConsum = () => {
        console.log(vehiclesListConsum);
        return totalConsum = vehiclesListConsum.reduce((total, vehicle) => {
            return total + parseFloat(vehicle.galones);
        }, 0)

    }
    const cleanTable = () => {

        setVehiclesListConsum([]);
        setOpen(false);
    }

    return (
        <>
            <vehiclesConsumContext.Provider value={{ vehiclesListConsum, setVehiclesListConsum }}>
                <Grid container spacing={2} >
                    <Grid item xs={6}>
                        <Stack direction="row" spacing={4} sx={{ display: "flex", width: '100%' }}>
                            <Button size='small' variant="outlined" startIcon={<ExitToAppIcon />}>
                                Exportar
                            </Button>
                            <Button size='small' variant="outlined" startIcon={<UploadIcon />}>
                                Subir
                                <input
                                    hidden
                                    type='file'

                                    accept='application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                                    id='account-settings-upload-image'
                                />
                            </Button>
                        </Stack>
                    </Grid>
                    <Grid item xs={6} sx={{ display: "flex" }}>
                        <Stack direction="row" spacing={4} sx={{ display: "flex", width: '100%', justifyContent: "flex-end" }}>
                            <Button disabled={true} size='small' variant="contained" startIcon={<PublishedWithChangesIcon />}
                                sx={{ backgroundColor: theme.palette.primary.light, }}>
                                Procesar
                            </Button>
                            <Button size='small' variant="contained" startIcon={<SaveIcon />}
                                sx={{ backgroundColor: theme.palette.primary.light, }} >
                                Guardar
                            </Button>
                            <Button size='small' variant="contained" color='error' startIcon={<DeleteIcon />} onClick={handleClickOpen}>
                                Limpiar
                            </Button>
                        </Stack>
                        <Dialog
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description"
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
                                <Button onClick={handleClose}>Cancelar</Button>
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
                                    <Badge badgeContent={12} color={'secondary'}>
                                        <Chip color={'success'} icon={<CheckCircleIcon />} label="Regular" />
                                    </Badge>
                                    <Badge badgeContent={12} color={'secondary'}>
                                        <Chip color={'warning'} icon={<ErrorIcon />} label="Sospechoso" />
                                    </Badge>
                                    <Badge badgeContent={12} color={'secondary'}>
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

                    </Grid>
                </Grid>
            </vehiclesConsumContext.Provider>
        </>
    );
}

export default Home;