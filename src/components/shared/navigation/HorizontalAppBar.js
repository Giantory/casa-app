import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CottageIcon from '@mui/icons-material/Cottage';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import GroupIcon from '@mui/icons-material/Group';
import FactCheckIcon from '@mui/icons-material/FactCheck';

import { useContext } from 'react';
import { NavigationContext } from '../../layout/UserLayout';




const HorizontalAppBar = () => {
    const { value, setValue } = useContext(NavigationContext);
    return (
        <Box sx={{ height: 75, width:'100%', justifyContent: 'center', position: 'sticky', m:2}}>
            <BottomNavigation
                sx={{ borderRadius: 3, boxShadow: 10, height: 70, width:'100%' }}
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
            >
                <BottomNavigationAction disabled="false" icon={<img
                    width={55}
                    height={55}
                    src='/images/logos/logo.svg'
                />} />
                <BottomNavigationAction label="Despacho" icon={<FactCheckIcon />} />
                <BottomNavigationAction label="Equipos" icon={<LocalShippingIcon />} />
                {/* <BottomNavigationAction label="Equipos" icon={<LocalShippingIcon />} /> */}
                <BottomNavigationAction label="Historial" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Estadísticas" icon={<LeaderboardIcon />} />
            </BottomNavigation>
        </Box>
    )
}

export default HorizontalAppBar;