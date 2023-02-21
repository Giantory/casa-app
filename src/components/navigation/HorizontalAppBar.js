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
import { useContext } from 'react';
import { NavigationContext } from '../layout/UserLayout';




const HorizontalAppBar = () => {
    const { value, setValue } = useContext(NavigationContext);
    return (
        <Box sx={{ position: 'relative', marginTop: 1.7 }}>

            <BottomNavigation

                sx={{ borderRadius: 3, boxShadow: 10, height: 70 }}
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
                <BottomNavigationAction label="Inicio" icon={<CottageIcon />} />
                <BottomNavigationAction label="Equipos" icon={<LocalShippingIcon />} />
                <BottomNavigationAction label="Historial" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Estadísticas" icon={<LeaderboardIcon />} />
            </BottomNavigation>
        </Box>
    )
}

export default HorizontalAppBar;