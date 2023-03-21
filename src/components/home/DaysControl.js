import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

import DistributionForm from '../../components/home/DistributionForm';
import ConsumTable from './ConsumTable';
import DistributionTable from './DistributionTable';


import { Grid } from '@mui/material';


const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >        •
    </Box>
);

export default function DaysControl() {
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    }
    return (
        <Card sx={{ minHeight: 675 }}>
            <CardContent>
                <Grid container spacing={2} >
                    <Grid item container spacing={2} xs={12}>
                        <Grid item xs={2} >
                            <Button variant="contained" onClick={handleOpen} endIcon={<AddIcon />}>
                                Agregar
                            </Button>
                        </Grid>
                        <Grid item xs={1} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <Divider orientation="vertical" />
                        </Grid>
                        <Grid item xs={3}>
                            <TextField
                                size='small'
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
                        <Grid item xs={7} >

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
                            <Button variant="contained" sx={{ marginLeft: 5 }}>
                                OK
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} >
                        <Divider />
                    </Grid>
                    <Grid item xs={12} >
                        <DistributionTable/>
                    </Grid>
                </Grid>
            </CardContent>
            <DistributionForm showModal={{ open, setOpen }} />
        </Card>
    );
}