import * as React from 'react';
import {Box} from '@mui/system';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardMedia from "@mui/material/CardMedia";
import User from "../../assets/img/person.png";
import Book from "../../assets/img/book.png";
import Car from "../../assets/img/carr.png";
import Driver from "../../assets/img/driver.png";
import Maintain from "../../assets/img/maintain.png";
import CardCover from "@mui/joy/CardCover";
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';
import Link from "@mui/material/Link";
import {AspectRatio, Favorite} from "@mui/icons-material";
import Chip from "@mui/material/Chip";
import CardOverflow from "@mui/joy/CardOverflow";
import IconButton from "@mui/material/IconButton";

const AdminDashBoard = ({}) => {

    return (
        <Typography>
            <Card sx={{display: 'flex', width: 400, mt: 10, ml: 10, backgroundColor: '#1565c0'}}>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <CardContent sx={{flex: '1 0 auto'}}>
                        <Typography component="div" variant="h5">
                            Registered Users
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            60
                        </Typography>
                    </CardContent>
                </Box>
                <CardMedia
                    component="img"
                    sx={{width: 151}}
                    image={User}
                />
            </Card>
            <Card sx={{display: 'flex', width: 420, mt: -19, ml: 70, backgroundColor: '#1565c0'}}>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <CardContent sx={{flex: '1 0 auto'}}>
                        <Typography component="div" variant="h5">
                            Total Bookigs
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            50
                        </Typography>

                        <Typography component="div" variant="h5">
                            Bookigs for the Day
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            15
                        </Typography>
                    </CardContent>
                </Box>
                <CardMedia
                    component="img"
                    sx={{width: 151}}
                    image={Book}
                />
            </Card>
            <Card sx={{display: 'flex', width: 400, mt: -20, ml: 130, backgroundColor: '#1565c0'}}>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <CardContent sx={{flex: '1 0 auto'}}>
                        <Typography component="div" variant="h5">
                            Available Cars
                        </Typography>

                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            20
                        </Typography>
                        <Typography component="div" variant="h5">
                            Reserved Cars
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            10
                        </Typography>
                    </CardContent>

                </Box>
                <CardMedia
                    component="img"
                    sx={{width: 151}}
                    image={Car}
                />
            </Card>
            <Card sx={{display: 'flex', width: 430, mt: 10, ml: 40, backgroundColor: '#1565c0'}}>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <CardContent sx={{flex: '1 0 auto'}}>
                        <Typography component="div" variant="h5">
                            Available Drivers
                        </Typography>

                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            20
                        </Typography>
                        <Typography component="div" variant="h5">
                            Occupied Drivers.
                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            10
                        </Typography>
                    </CardContent>

                </Box>
                <CardMedia
                    component="img"
                    sx={{width: 151}}
                    image={Driver}
                />
            </Card>
            <Card sx={{display: 'flex', width: 450, mt: -20, ml: 100, backgroundColor: '#1565c0'}}>
                <Box sx={{display: 'flex', flexDirection: 'column'}}>
                    <CardContent sx={{flex: '1 0 auto'}}>
                        <Typography component="div" variant="h5">
                            Need Maintenance
                        </Typography>

                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            20
                        </Typography>
                        <Typography component="div" variant="h5">
                            Cars Under Maintenance

                        </Typography>
                        <Typography variant="subtitle1" color="text.secondary" component="div">
                            10
                        </Typography>
                    </CardContent>

                </Box>
                <CardMedia
                    component="img"
                    sx={{width: 151}}
                    image={Maintain}
                />
            </Card>

        </Typography>

    );

}

export default AdminDashBoard

