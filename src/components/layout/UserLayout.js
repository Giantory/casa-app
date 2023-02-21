import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import HorizontalAppBar from '../navigation/HorizontalAppBar';
import Card from '@mui/material/Card'
import { createContext, useState } from 'react';

export const NavigationContext = createContext({});
const UserLayout = ({ children }) => {
    const [value, setValue] = useState(1);

    const switchRenderNavigation = () =>{
        switch(value){
            case 1:
                return <div>Inicio</div>
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
        <NavigationContext.Provider value={{value, setValue}}>
        <Box sx={{bgcolor:'#F0F0F9', height: '100vh', width: '200vh' }}>
            <Grid sx={{minHeight: '100vh', minWidth:'100vh'}} container spacing={1}>
                <Grid item xs={12}>
                </Grid>        
                <Grid item xs={12}> 
                <Card sx={{ minHeight: 500, minWidth:'100%', bgcolor: '#F0F0F9', boxShadow: 1 }}>
                    {switchRenderNavigation()}
                </Card>              
                </Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={10}>
                    <HorizontalAppBar/>
                </Grid>
                <Grid item xs={1}></Grid>
            </Grid>
        </Box>
        </NavigationContext.Provider>
    )
}

export default UserLayout;