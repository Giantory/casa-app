import * as React from 'react';
import EnhancedTable from '../../components/home/DistributionTable';
import Grid from '@mui/system/Unstable_Grid/Grid';
import Button from '@mui/material/Button';
import DistributionForm from '../../components/home/DistributionForm';
import DaysControl from '../../components/home/DaysControl';
import DaysControlSummary from '../../components/home/DaysControlSummary';
import QuickActionsList from '../../components/home/QuickActionsList';
import Calendar from '../../components/home/Calendar';

const Home = () => {

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    }

    return (
        <>
            <Grid container spacing={2} >
                <Grid item container xs={8} >
                    <Grid item xs={12}>
                        <DaysControl />
                    </Grid>
                </Grid>
                <Grid item container xs={4} sx={{display:"flex", flexDirection:"column", justifyContent:"space-between" }}>
                    <Grid item xs={12}>
                        <QuickActionsList />
                    </Grid>
                    <Grid item xs={12}>
                        <DaysControlSummary />
                    </Grid>
                </Grid>
            </Grid>
            <DistributionForm showModal={{ open, setOpen }} />
        </>
    );
}

export default Home;