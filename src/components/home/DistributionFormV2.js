import React, { useState, useContext } from 'react'

import { Box } from '@mui/material'
import { Grid } from '@mui/material'
import { Typography } from '@mui/material'
import { useTheme } from '@mui/material'
import { Divider } from '@mui/material';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment'
import InputLabel from '@mui/material/InputLabel'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import AgricultureIcon from '@mui/icons-material/Agriculture';
import DriveEtaIcon from '@mui/icons-material/DriveEta';
import EighteenMpIcon from '@mui/icons-material/EighteenMp';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import DescriptionIcon from '@mui/icons-material/Description';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { Stack } from '@mui/material'
import Avatar from '@mui/material/Avatar';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

//context
import { vehiclesConsumContext } from '../../pages/home'
import dayjs from 'dayjs'

const DistributionFormV2 = () => {

    const current = new Date();
    const [metre, setMetre] = useState(() => []);
    const [totalConsum, setTotalConsum] = useState(0);
    const { vehiclesListConsum, setVehiclesListConsum} = useContext(vehiclesConsumContext);

    const [vehicleConsum, setVehicleConsum] = useState({ id: 1, code: '', consum: 0 });
    const handleMetre = (event, newMetre) => {
        setMetre(newMetre);
    }

    const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

    const theme = useTheme();



    const addVehicle = (e) => {
        e.preventDefault();
        setVehiclesListConsum([...vehiclesListConsum, vehicleConsum]);

        const newTotalConsumption = vehiclesListConsum.reduce((total, vehicle) => {
            return total + parseFloat(vehicle.consum);
        }, 0);

        setTotalConsum(newTotalConsumption);

        setVehicleConsum((prevVehicleConsum) => ({
            ...prevVehicleConsum,
            id: prevVehicleConsum.id + 1
        }));

    }

    return (
        <Box sx={{ height: '100%', bgcolor: "background.paper", borderRadius: 2, p: 3, }} >
            <Grid container spacing={1}>
                <Grid item xs={12}>
                    <Typography variant={'subtitle1'} component="div" sx={{ color: theme.palette.primary.light, fontWeight: 'bold', m: 1 }}>
                        Registrar consumo
                    </Typography>
                </Grid>
                <Grid item xs={12} p={2} sx={{ display: "flex", justifyContent: "center" }}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DatePicker']}>

                            <DatePicker label="Fecha de consumo" defaultValue={dayjs(date)} />
                        </DemoContainer>
                    </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant={'subtitle2'} component="div" sx={{ fontWeight: 'bold', m: 1 }}>
                        {date}
                    </Typography>
                </Grid>

                {/* <Grid item xs={12}>
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
                </Grid> */}
                {/* <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Button size='small' variant="contained" >
                        Buscar
                    </Button>
                </Grid>
                <Grid item xs={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Button size='small' variant="outlined" >
                        Limpiar
                    </Button>
                </Grid> */}
                {/* <Grid item xs={6} >
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                <EighteenMpIcon sx={{ fontSize: 30, color: theme.palette.primary.main }} />
                            </ListItemAvatar>
                            <ListItemText primary="Placa" secondary="ASD-QWE" />
                        </ListItem>
                    </List>
                </Grid> */}
                {/* <Grid item xs={3}>
                    <Stack direction={'column'} spacing={2} p={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                        <Avatar sx={{ fontSize: 30, bgcolor: theme.palette.primary.main }}>
                            <EighteenMpIcon sx={{ color: theme.palette.common.white }} />
                        </Avatar>
                        <Typography variant={'body2'} component="div" sx={{ fontWeight: 'bold', m: 1 }}>
                            XYZ-123
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={3}>
                    <Stack direction={'column'} spacing={2} p={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                        <Avatar sx={{ fontSize: 30, bgcolor: theme.palette.primary.main }}>
                            <DescriptionIcon sx={{ color: theme.palette.common.white }} />
                        </Avatar>
                        <Typography variant={'body2'} component="div" sx={{ fontWeight: 'bold', m: 1 }}>
                            Descripción
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={3}>
                    <Stack direction={'column'} spacing={2} p={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                        <Avatar sx={{ fontSize: 30, bgcolor: theme.palette.primary.main }}>
                            <FiberNewIcon sx={{ color: theme.palette.common.white }} />
                        </Avatar>
                        <Typography variant={'body2'} component="div" sx={{ fontWeight: 'bold', m: 1 }}>
                            Volkswagen
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={3}>
                    <Stack direction={'column'} spacing={2} p={4} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                        <Avatar sx={{ fontSize: 30, bgcolor: theme.palette.primary.main }}>
                            <DriveEtaIcon sx={{ color: theme.palette.common.white }} />
                        </Avatar>
                        <Typography variant={'body2'} component="div" sx={{ fontWeight: 'bold', m: 1 }}>
                            Dutro
                        </Typography>
                    </Stack>
                </Grid> */}
                {/* <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }} >
                    <Stack direction={'row'} spacing={-1} sx={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
                        <Typography variant={'body2'} component="div" sx={{ fontWeight: 'bold', m: 1, }}>
                            Ver consumo
                        </Typography>
                        <ArrowForwardIcon sx={{ color: theme.palette.secondary.main, }} />
                    </Stack>

                </Grid> */}

                <Grid item xs={12}>
                    <Stack direction="column" spacing={4} p={1}>

                        <TextField
                            size='small'
                            type='text'
                            label='Placa/Serie'
                            placeholder='276628'
                            value={vehicleConsum.code}
                            onChange={(e) => {
                                setVehicleConsum({
                                    ...vehicleConsum,
                                    code: e.target.value
                                })
                            }}
                        // InputProps={{
                        //     startAdornment: (
                        //         <InputAdornment position='start'>
                        //             <Phone />
                        //         </InputAdornment>
                        //     )
                        // }}
                        />
                        <TextField
                            size='small'
                            type='number'
                            label='Diesel'
                            placeholder='276628'
                            value={vehicleConsum.consum}
                            onChange={(e) => {
                                setVehicleConsum({
                                    ...vehicleConsum,
                                    consum: e.target.value
                                })
                            }}
                        // InputProps={{
                        //     startAdornment: (
                        //         <InputAdornment position='start'>
                        //             <Phone />
                        //         </InputAdornment>
                        //     )
                        // }}
                        />
                        <TextField
                            size='small'
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
                        <TextField
                            size='small'
                            type='number'
                            label='Horómetro'
                            placeholder='276628'
                        // InputProps={{
                        //     startAdornment: (
                        //         <InputAdornment position='start'>
                        //             <Phone />
                        //         </InputAdornment>
                        //     )
                        // }}
                        />
                    </Stack>
                </Grid>
                <Grid item xs={12}>

                </Grid>
                <Grid item xs={12}>

                </Grid>
                <Grid item xs={12} sx={{ display: "flex", justifyContent: "flex-end" }} >
                    <Button size='small' variant="contained" sx={{ marginTop: 4 }} onClick={addVehicle}>
                        Agregar
                    </Button>
                </Grid>
            </Grid>
        </Box >

    )
}

export default DistributionFormV2