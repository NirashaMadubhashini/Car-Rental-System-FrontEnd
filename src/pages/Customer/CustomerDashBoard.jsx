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



export default function CustomerDashBoard() {
    const [value, setValue] = React.useState(new Date());
    const values = 3.5;


    return (

        <Card variant="outlined" sx={{minWidth: '450px', mt: 5, ml: 25, mr: 25}}>
            <Box sx={{display: 'flex', flexDirection: 'column', gap: 0.5}}>
                <Typography level="h2" fontSize="md" sx={{alignSelf: 'flex-start', fontSize: 40,mt:5,ml:5,fontFamily:'system-ui',fontWeight:'bold'}}>
                    Customer DashBoard
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

            <Box
                sx={{
                    '& > legend': {mt: -30,ml:5},
                }}
            >
                <Typography component="legend">Controlled</Typography>
                <Rating
                    name="simple-controlled"
                    values={values}
                    onChange={(event, newValues) => {
                        setValue(newValues);
                    }}
                    sx={{ml:5}}
                />
            </Box>
            <Box sx={{mt: -20,ml:5}}>
                <Typography gutterBottom variant="body1">
                    Frameworks Used
                </Typography>
                <Stack direction="row" spacing={1}>
                    <Chip label="JavaScript"/>
                    <Chip color="primary" label="React"/>
                    <Chip label="AJAX"/>
                    <Chip label="Jason"/>
                </Stack>
            </Box>

            <Box sx={{width: '100%', mt: 15}}>
                <LinearProgress color="inherit"/>
            </Box>
        </Card>

    );
}
