import React from 'react'
import {Grid} from "@mui/material";
import RubberBtn from "../../component/common/RubberBandBtn";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import User from "../../assets/img/register.jfif"
import Book from "../../assets/img/book.png"
import Driver from "../../assets/img/driver.jpg"
import Maintain from "../../assets/img/maintain.jpg"

const DailySummary = ({}) => {


    return (
        <div>
            <Grid item lg={12} xs={12} sm={12} md={12}>
                <RubberBtn name="Summary"/>
            </Grid>
            <Card sx={{ maxWidth: 345,ml:25,mt:10 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={User}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Registered users
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            25
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 345,ml:75,mt:-29 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Book}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Bookings for the day
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            10
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            Active Bookings
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            5
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 345,ml:125,mt:-37 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Driver}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Available Drivers
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            40
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            Occupied Drivers
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            15
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 345,ml:75,mt:5 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={Maintain}
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Available Drivers
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            40
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div">
                            Occupied Drivers
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            15
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        </div>
    )

}

export default DailySummary