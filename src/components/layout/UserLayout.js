import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/system/Unstable_Grid/Grid';


import HorizontalAppBar from '../navigation/HorizontalAppBar';
import SideBar from '../navigation/SideBar';

import { createContext, useState } from 'react';


//pages
import Home from '../../pages/home';


export const NavigationContext = createContext({});
const UserLayout = ({ children }) => {
    const [value, setValue] = useState(1);

    const switchRenderNavigation = () => {
        switch (value) {
            case 1:
                return <Home />
            case 2:
                return <div>Equipos</div>
            case 3:
                return <div>Historial</div>
            case 4:
                return <div>Estadísticas</div>
            default:
                return <div>Not found</div>
        }
    }

    return (
        <NavigationContext.Provider value={{ value, setValue }}>
            {/* <SideBar /> */}
            <Box sx={{ height: 770, }}>
                {switchRenderNavigation()}
            </Box>
            <Grid container sx={{ justifyContent: 'center' }}>
                <Grid container sx={{ width: '45%' }}>
                    <HorizontalAppBar />
                </Grid>
            </Grid>
        </NavigationContext.Provider>
    )
}

export default UserLayout;