import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/system/Unstable_Grid/Grid';
import Toolbar from '@mui/material/Toolbar';

import HorizontalAppBar from '../navigation/HorizontalAppBar';
import SideBar from '../categories/DriverCategoryInfo';

import { createContext, useState } from 'react';


//pages
import Home from '../../pages/home';
import Drivers from '../../pages/categories';


export const NavigationContext = createContext({});
const UserLayout = ({ children }) => {
    const [value, setValue] = useState(1);

    const switchRenderNavigation = () => {
        switch (value) {
            case 1:
                return <Home />
            case 2:
                return <Drivers />
            case 3:
                return <div>Equipos</div>
            case 4:
                return <div>Historial</div>
            case 5:
                return <div>Estadísticas</div>
            default:
                return <div>Not found</div>
        }
    }

    return (
        <NavigationContext.Provider value={{ value, setValue }}>
            <Grid container sx={{ justifyContent: 'center' }} >
                <Grid item xs={12}>
                    <Toolbar >
                        
                    </Toolbar>
                </Grid>
                <Grid item xs={12} sx={{ minHeight: 610, }}>
                    {switchRenderNavigation()}
                </Grid>
                <Grid item xs={12} sx={{ width: '45%' }}>
                    <HorizontalAppBar />
                </Grid>
            </Grid>
        </NavigationContext.Provider>
    )
}

export default UserLayout;