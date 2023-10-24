import { useEffect, useState, useContext } from 'react';


import * as React from 'react';
import PropTypes from 'prop-types';
import { alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import { useTheme } from '@mui/material/styles'
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid'
import { Modal } from '@mui/material'
import { Divider } from '@mui/material';
import { TextField } from '@mui/material';
import { FormControl } from '@mui/material/';
import { InputLabel } from '@mui/material';
import { Select } from '@mui/material';
import { MenuItem } from '@mui/material';
import { Button } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery'
import InputAdornment from '@mui/material/InputAdornment'

import SearchIcon from '@mui/icons-material/Search';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import EighteenMpIcon from '@mui/icons-material/EighteenMp';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import DescriptionIcon from '@mui/icons-material/Description';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

import RecentConsum from './RecentConsum';
import QuickResumeTable from './QuickResumeTable';

const DistributionForm = (props) => {
    const [selectedDates, setSelectedDates] = React.useState([]);

    const handleDateChange = (date) => {
        setSelectedDates((prevSelectedDates) => {
            const index = prevSelectedDates.findIndex((d) => d.getTime() === date.getTime());
            if (index === -1) {
                return [...prevSelectedDates, date];
            } else {
                return [...prevSelectedDates.slice(0, index), ...prevSelectedDates.slice(index + 1)];
            }
        });
    };

    const { open, setOpen } = props.showModal;


    const handleClose = () => {
        setOpen(false);
    }
    const theme = useTheme()

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1000,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 3,
    };
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography id="modal-modal-title" variant="h4" component="h1" >
                            Añadir un registro de distribución
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item container xs={6} spacing={1}>
                        <Grid item xs={6}>
                            <TextField
                                size='small'
                                sx={{ '& .MuiOutlinedInput-root': { borderRadius: 4 } }}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position='start'>
                                            <SearchIcon fontSize='small' />
                                        </InputAdornment>
                                    )
                                }}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Button variant="contained" >
                                Buscar
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} />
                    {/* <Grid item xs={1} sx={{ display: "flex", alignItems: "center", justifyContent: "start" }}>
                        <Divider orientation="vertical" />
                    </Grid> */}
                    <Grid item container xs={2.5}>
                        <Grid item xs={12}>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <EighteenMpIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
                                    </ListItemAvatar>
                                    <ListItemText primary="Placa" secondary="ASD-QWE" />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12}>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <DescriptionIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
                                    </ListItemAvatar>
                                    <ListItemText primary="Descripción" secondary="Ambulancia" />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                    <Grid item container xs={2.5}>
                        <Grid item xs={12}>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <FiberNewIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
                                    </ListItemAvatar>
                                    <ListItemText primary="Marca" secondary="Volkswagen" />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={12}>
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <DriveEtaIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
                                    </ListItemAvatar>
                                    <ListItemText primary="Modelo" secondary="Dutro" />
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                    <Grid item container xs={7} spacing={1}>
                        <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography variant='h6'>
                                Consumos recientes
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <RecentConsum />
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item container xs={6} spacing={1}>
                        <Grid item xs={12}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DemoContainer components={['DatePicker']}>
                                    <DatePicker label="Fecha de consumo" />
                                </DemoContainer>

                            </LocalizationProvider>
                        </Grid>
                        <Grid item container xs={12} spacing={1}>
                            <Grid item xs={6}>
                                <TextField

                                    type='number'
                                    label='Kilometraje'
                                    placeholder='276628'
                                // InputProps={{
                                //     startAdornment: (
                                //         <InputAdornment position='start'>
                                //             <Phone />
                                //         </InputAdornment>
                                //     )
                                // }}
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField

                                    type='number'
                                    label='Horómetro'
                                    placeholder='16256'
                                // InputProps={{
                                //     startAdornment: (
                                //         <InputAdornment position='start'>
                                //             <Phone />
                                //         </InputAdornment>
                                //     )
                                // }}
                                />
                            </Grid>
                            <Grid item container xs={12} spacing={1}>
                                <Grid item xs={6}>
                                    <TextField

                                        type='number'
                                        label='Phone No.'
                                        placeholder='+1-123-456-8790'
                                    // InputProps={{
                                    //     startAdornment: (
                                    //         <InputAdornment position='start'>
                                    //             <Phone />
                                    //         </InputAdornment>
                                    //     )
                                    // }}
                                    />
                                </Grid>
                                <Grid item xs={6} sx={{ display: "flex", alignItems: "center" }}>
                                    <Button variant="contained" >
                                        Buscar
                                    </Button>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid item xs={12} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Typography variant='h6'>
                                Consumos registrados
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <QuickResumeTable />
                        </Grid>
                        {/* <FormControl fullWidth>
                            <InputLabel>Equipo</InputLabel>
                            <Select label='Country' defaultValue='empty'>
                                <MenuItem value='empty'>Ninguno</MenuItem>
                                <MenuItem value='segunda_etapa'>Segunda etapa</MenuItem>
                                <MenuItem value='tercera_etapa'>Tercera etapa</MenuItem>
                                <MenuItem value='rutinario'>Rutinario</MenuItem>
                                <MenuItem value='periodico'>Periódico</MenuItem>
                                <MenuItem value='san_marino'>San Marino</MenuItem>
                                <MenuItem value='otro'>Otro</MenuItem>
                            </Select>
                        </FormControl> */}
                    </Grid>
                    <Grid item xs={6}>
                        {/* <TextField
                            fullWidth
                            type='number'
                            label='Phone No.'
                            placeholder='+1-123-456-8790'
                        // InputProps={{
                        //     startAdornment: (
                        //         <InputAdornment position='start'>
                        //             <Phone />
                        //         </InputAdornment>
                        //     )
                        // }}
                        /> */}
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )

}

export default DistributionForm;