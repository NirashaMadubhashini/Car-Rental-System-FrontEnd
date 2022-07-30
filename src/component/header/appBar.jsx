import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function Header() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar sx={{backgroundColor: "#1565BF"}}>
                    <Typography variant="h5" component="div" sx={{flexGrow: 1, marginLeft: 70,fontFamily:'sans-serif'}}>
                        Easy Car Rental
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
                {/*<Divider />*/}
            </AppBar>
        </Box>
    );
}
