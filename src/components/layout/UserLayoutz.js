import React from 'react';
import { styled } from '@mui/material/styles';
import { AppBar, BottomNavigation, BottomNavigationAction, Toolbar, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';

const BottomAppBar = styled(AppBar)({
  top: 'auto',
  bottom: 0,
});

const Layout = ({ children }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <div style={{ paddingTop: 64, paddingBottom: 56 }}>
        {children}
      </div>
      <BottomAppBar position="fixed">
        <BottomNavigation value={value} onChange={handleChange}>
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
          <BottomNavigationAction label="Info" icon={<InfoIcon />} />
        </BottomNavigation>
      </BottomAppBar>
    </>
  );
};

export default Layout;
