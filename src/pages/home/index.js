import * as React from 'react';
import EnhancedTable from '../../components/home/DistributionTable';
import Grid from '@mui/system/Unstable_Grid/Grid';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DistributionForm from '../../components/home/DistributionForm';

const Home = () => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
      }

    return (
        <>
        <Grid container spacing={4}>
            <Grid container>
                <Grid item >
                    <Button onClick={() =>{handleOpen()}} variant="contained" endIcon={<AddIcon />}>
                        Agregar
                    </Button>
                </Grid>
            </Grid>
            <Grid container xs={12} sx={{justifyContent:'center'}}>
                <Grid item >
                    <EnhancedTable />
                </Grid>
            </Grid>
        </Grid>
       <DistributionForm showModal={{open, setOpen}}/>
        </>
    );
}

export default Home;