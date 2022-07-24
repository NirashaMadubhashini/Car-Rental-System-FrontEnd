import * as React from 'react';
import {Box} from '@mui/system';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import User from "../../assets/img/register.jfif"
import Book from "../../assets/img/book.png"
import Driver from "../../assets/img/driver.jpg"
import Maintain from "../../assets/img/maintain.jpg"


const AdminDashBoard = ({}) => {

    return (
        <Typography>
            <Card sx={{ display: 'flex',width:371,height:150,mt:15,ml:35,backgroundColor:'green' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Registered users
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{fontWeight:'bold'}}>
                            25
                        </Typography>
                    </CardContent>

                </Box>
                <CardMedia
                    component="img"
                    sx={{ backgroundSize: 'cover',width:157}}
                    image={User}
                    alt="Live from space album cover"
                />
            </Card>
            <Card sx={{ display: 'flex',width:421,height:150,mt:-19,ml:110,backgroundColor:'#006AF0' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Bookings for the day
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{fontWeight:'bold'}}>
                            10
                        </Typography>

                        <Typography component="div" variant="h5">
                            Active Bookings
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{fontWeight:'bold'}}>
                            5
                        </Typography>
                    </CardContent>

                </Box>
                <CardMedia
                    component="img"
                    sx={{width:170}}
                    image={Book}
                    alt="Live from space album cover"
                />
            </Card>
            <Card sx={{ display: 'flex',width:387,height:150,mt:15,ml:34,backgroundColor:'#006AF0' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                            Available Drivers
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{fontWeight:'bold'}}>
                            40
                        </Typography>

                        <Typography component="div" variant="h5">
                            Occupied Drivers
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{fontWeight:'bold'}}>
                            15
                        </Typography>
                    </CardContent>

                </Box>
                <CardMedia
                    component="img"
                    sx={{width: 170}}
                    image={Driver}
                    alt="Live from space album cover"
                />
            </Card>
            <Card sx={{ display: 'flex',width:462,height:150,mt:-19,ml:110,backgroundColor:'green' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                        <Typography component="div" variant="h5">
                          Cars need Maintenance
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{fontWeight:'bold'}}>
                            40
                        </Typography>

                        <Typography component="div" variant="h5">
                          Cars under Maintenance
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div" sx={{fontWeight:'bold'}}>
                            15
                        </Typography>
                    </CardContent>

                </Box>
                <CardMedia
                    component="img"
                    sx={{ width: 151,ml:2 }}
                    image={Maintain}
                    alt="Live from space album cover"
                />
            </Card>
        </Typography>

    );

}

export default AdminDashBoard

