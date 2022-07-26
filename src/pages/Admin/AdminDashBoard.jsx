import * as React from 'react';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import {BookmarkAdd} from "@mui/icons-material";
import {LocalizationProvider, StaticDatePicker} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import TextField from "@mui/material/TextField";
import isWeekend from 'date-fns/isWeekend';
import "react-circular-progressbar/dist/styles.css";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Rating from "@mui/material/Rating";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";


const card = (
    <React.Fragment>
        <Box sx={{backgroundColor:'#7B1FA2'}}>
            <CardContent>
                <Typography sx={{fontWeight:'bold',fontSize:20}} >
                    Customer
                    ============
                    Car
                    ============
                    Driver
                </Typography>
            </CardContent>
        </Box>
    </React.Fragment>
);
const card2 = (
    <React.Fragment >
        <Box sx={{backgroundColor:'green'}}>
            <CardContent>
                <Typography sx={{fontWeight:'bold',fontSize:20}}>
                    Rent Request
                    ============
                    Income
                    ============
                    Daily Summary
                </Typography>
            </CardContent>
        </Box>
    </React.Fragment>
);



export default function AdminDashBoard() {
    const [value, setValue] = React.useState(new Date());


    return (

        <Card variant="outlined" sx={{minWidth: '550px', mt: 5, ml: 25, mr: 25}}>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 0.5}}>
                <Typography level="h2" fontSize="md" sx={{
                    alignSelf: 'flex-start',
                    fontSize: 40,
                    mt: 5,
                    ml: 5,
                    fontFamily: 'system-ui',
                    fontWeight: 'bold'
                }}>
                    Admin DashBord
                </Typography>
            </Box>
            <IconButton
                aria-label="bookmark Bahamas Islands"
                variant="plain"
                color="neutral"
                size="sm"
                sx={{position: 'absolute', top: '0.5rem', right: '0.5rem'}}
            >
                <BookmarkAdd/>
            </IconButton>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <StaticDatePicker
                    orientation="landscape"
                    openTo="day"
                    value={value}
                    shouldDisableDate={isWeekend}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                    sx={{ml: 80, width: 125, backgroundColor: '#1565C0'}}
                />
            </LocalizationProvider>
            <Box sx={{width: 200, ml:5,mt:-40}}>
                <Card variant="outlined">{card}</Card>
            </Box>

            <Box sx={{width: 250, ml:35,mt:-28}}>
                <Card variant="outlined">{card2}</Card>
            </Box>
            <Box sx={{width: '100%', mt: 15}}>
                <LinearProgress/>
            </Box>
            <br/>
        </Card>

    );
}
