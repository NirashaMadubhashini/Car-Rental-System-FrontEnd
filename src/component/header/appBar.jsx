import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from "@mui/material";

export default function Header() {
    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar sx={{backgroundColor: "#1565BF"}}>
                    <Typography variant="h5" component="div" sx={{flexGrow: 1, marginLeft: 70,fontFamily:'sans-serif'}}>
                        Easy Car Rental
                    </Typography>

                    <Link href="/" underline="none">
                        <Button  type='submit' color='primary' variant="contained" size="small" sx={{mt:1}} fullWidth>LogOut</Button>
                    </Link>

                </Toolbar>
            </AppBar>
        </Box>
    );
}
