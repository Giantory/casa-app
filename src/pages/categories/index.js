import * as React from 'react';
import { createContext, useState } from "react";

import EnhancedTable from '../../components/home/DistributionTable';
import Grid from '@mui/system/Unstable_Grid/Grid';
import Button from '@mui/material/Button';
import DistributionForm from '../../components/home/DistributionForm';
import DaysControl from '../../components/home/DaysControl';
import DaysControlSummary from '../../components/home/DaysControlSummary';
import QuickActionsList from '../../components/home/QuickActionsList';
import Calendar from '../../components/home/Calendar';
import ProfilesTable from '../../components/categories/ProfilesTable';
import CategoryDriver from '../../components/categories/CategoryDriver';
import CategoriesTable from '../../components/categories/CategoriesTable';
import VehiclesCounter from '../../components/categories/VehiclesCounter';
import VehiclesList from '../../components/categories/VehiclesList';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import CategoryCard from '../../components/categories/CategoryCard';
import RecentConsumChart from '../../components/categories/RecentConsumChart';
import { Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { TextField } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AddIcon from '@mui/icons-material/Add';

export const ProfileDriverContext = createContext({});
export const CategoryContext = createContext({});

const Drivers = () => {

    const [selectedProfile, setSelectedProfile] = useState(1);
    const [selectedCategory, setSelectedCategory] = useState(1);

    return (
        <>
            <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
                <ProfileDriverContext.Provider value={{ selectedProfile, setSelectedProfile }}>
                    <Grid container spacing={2} >
                        <Grid item xs={12} >
                            <Stack direction="row" justifyContent={"flex-end"}>

                                <FormControl size='small' sx={{ minWidth: 150 }}>
                                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"

                                        label="Age"
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                                <Button size='small' variant="contained" startIcon={<AddIcon />} sx={{ textTransform: 'none' }}>
                                    Nueva categoría
                                </Button>
                            </Stack>
                        </Grid>
                        <Grid container item xs={6} sx={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }} >
                            <Grid item xs={12} >
                                <Stack direction="row" spacing={1}>
                                    <CategoryDriver />
                                    <VehiclesCounter />
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    size='small'
                                    sx={{ '& .MuiOutlinedInput-root': { borderRadius: 2 } }}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position='start'>
                                                <SearchIcon fontSize='small' />
                                            </InputAdornment>
                                        )
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <VehiclesList />
                            </Grid>
                        </Grid>
                        <Grid container item xs={6}>
                            <Grid item xs={12}>
                                <RecentConsumChart />
                            </Grid>
                        </Grid>
                        <Grid item xs={4}>

                        </Grid>
                    </Grid>
                </ProfileDriverContext.Provider>
            </CategoryContext.Provider>
        </>
    );
}

export default Drivers;