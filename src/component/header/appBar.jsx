import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar  position="static" >
                <Toolbar sx={{backgroundColor:"darkblue"}}>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1 ,marginLeft:70}}>
                       Easy Car Rental
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
