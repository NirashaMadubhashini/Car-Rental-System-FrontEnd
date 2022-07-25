import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Alto from '../../assets/img/alto.jpg';
import K10 from '../../assets/img/alto-k10.jpg';
import Celerio from '../../assets/img/Suzuki Celerio.jpg';
import Axia from '../../assets/img/Axia.jpg';
import Aqua from '../../assets/img/Aqua.jpg';
import Corolla from '../../assets/img/Toyota Corolla Axio.jpg';
import Bezza from '../../assets/img/Bezza.jpg';
import Allion from '../../assets/img/Allion.jpg';
import NKR from '../../assets/img/NKR.jfif';
import Premio from '../../assets/img/Premio.jpg';
import Mercedes from '../../assets/img/Mercedes.jpg';
import BMW from '../../assets/img/bmw-i8.jpg';
import {Grid} from "@mui/material";
import RubberBtn from "../../component/common/RubberBandBtn";
import CardActionArea from "@mui/material/CardActionArea";
import Divider from "@mui/material/Divider";


export default function CarDetails() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            <Grid item lg={12} xs={12} sm={12} md={12}>
                <RubberBtn name="Car Details"/>
            </Grid>

            <Typography>
                <Card sx={{maxWidth: 345, mt: 10, ml: 20}}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                                GC
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon/>
                            </IconButton>
                        }
                        title="General Cars Rates"
                        subheader="(30)"
                    />
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="194"
                            image={Alto}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Suzuki Alto
                            </Typography>
                            <Typography paragraph>
                                Brand : Suzuki Alto
                                <br/>
                                Transmission type : Premium
                                <br/>
                                Fuel type : Petrol
                                <br/>
                                Type : Manual
                                <br/>
                                No of passengers : 7
                                <br/>
                                Price : 2500(Daily)
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{maxWidth: 345, mt: -62, ml: 70}}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                                GC
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon/>
                            </IconButton>
                        }
                        title="General Cars Rates"
                        subheader="(30)"
                    />
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="194"
                            image={K10}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Suzuki Alto K10
                            </Typography>
                            <Typography paragraph>
                                Brand : Suzuki Alto K10
                                <br/>
                                Transmission type : Premium
                                <br/>
                                Fuel type : Petrol
                                <br/>
                                Type : Auto
                                <br/>
                                No of passengers : 8
                                <br/>
                                Price : 3000(Daily)
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{maxWidth: 345, mt: -62, ml: 120}}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                                GC
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon/>
                            </IconButton>
                        }
                        title="General Cars Rates"
                        subheader="(30)"
                    />
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="194"
                            image={Celerio}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Suzuki Celerio
                            </Typography>
                            <Typography paragraph>
                                Brand : Suzuki Celerio
                                <br/>
                                Transmission type : Premium
                                <br/>
                                Fuel type : Petrol
                                <br/>
                                Type : Auto
                                <br/>
                                No of passengers : 5
                                <br/>
                                Price : 3300(Daily)
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{maxWidth: 345, mt: 10, ml: 20}}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                                GC
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon/>
                            </IconButton>
                        }
                        title="General Cars Rates"
                        subheader="(30)"
                    />
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="194"
                            image={Axia}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Perodua (Daihatsu) Axia
                            </Typography>
                            <Typography paragraph>
                                Brand : Perodua (Daihatsu) Axia
                                <br/>
                                Transmission type : Premium
                                <br/>
                                Fuel type : Petrol
                                <br/>
                                Type : Auto
                                <br/>
                                No of passengers : 2
                                <br/>
                                Price : 3800(Daily)
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{maxWidth: 345, mt: -63, ml: 70}}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                                GC
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon/>
                            </IconButton>
                        }
                        title="General Cars Rates"
                        subheader="(30)"
                    />
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="194"
                            image={Aqua}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Toyota Prius C/ Aqua
                            </Typography>
                            <Typography paragraph>
                                Brand : Toyota Prius C/ Aqua
                                <br/>
                                Transmission type : Premium
                                <br/>
                                Fuel type : Petrol
                                <br/>
                                Type : Auto
                                <br/>
                                No of passengers : 8
                                <br/>
                                Price : 5000(Daily)
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
                <br/>

                <Divider/>

                <Card sx={{maxWidth: 345, mt: 10, ml: 20}}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                                PC
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon/>
                            </IconButton>
                        }
                        title="Premium Cars"
                        subheader="(14)"
                    />
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="194"
                            image={Corolla}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Toyota Corolla Axio/ NZE141
                            </Typography>
                            <Typography paragraph>
                                Brand : Toyota Corolla Axio/ NZE141
                                <br/>
                                Transmission type : Premium
                                <br/>
                                Fuel type : Petrol
                                <br/>
                                Type : Manual
                                <br/>
                                No of passengers : 4
                                <br/>
                                Price : 5500(Daily)
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{maxWidth: 345, mt: -63, ml: 70}}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                                PC
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon/>
                            </IconButton>
                        }
                        title="Premium Cars"
                        subheader="(14)"
                    />
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="194"
                            image={Bezza}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Perodua Bezza Prime Sedan (2017)
                            </Typography>
                            <Typography paragraph>
                                Brand : Perodua Bezza Prime Sedan
                                <br/>
                                Transmission type : Premium
                                <br/>
                                Fuel type : Petrol
                                <br/>
                                Type : Auto
                                <br/>
                                No of passengers : 5
                                <br/>
                                Price : 5500(Daily)
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{maxWidth: 345, mt: -63, ml: 120}}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                                PC
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon/>
                            </IconButton>
                        }
                        title="Premium Cars"
                        subheader="(14)"
                    />
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="194"
                            image={Allion}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Toyota Allion NZT 260
                            </Typography>
                            <Typography paragraph>
                                Brand : Toyota Allion NZT 260
                                <br/>
                                Transmission type : Premium
                                <br/>
                                Fuel type : Petrol
                                <br/>
                                Type : Manual
                                <br/>
                                No of passengers : 3
                                <br/>
                                Price : 5800(Daily)
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{maxWidth: 345, mt: 13, ml: 20}}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                                PC
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon/>
                            </IconButton>
                        }
                        title="Premium Cars"
                        subheader="(14)"
                    />
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="194"
                            image={NKR}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Toyota Axio NKR 165
                            </Typography>
                            <Typography paragraph>
                                Brand : Toyota Axio NKR 165
                                <br/>
                                Transmission type : Premium
                                <br/>
                                Fuel type : Petrol
                                <br/>
                                Type : Manual
                                <br/>
                                No of passengers : 2
                                <br/>
                                Price : 6000(Daily)
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>

                <br/>
                <Divider/>

                <Card sx={{maxWidth: 345, mt: 10, ml: 20}}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                                LC
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon/>
                            </IconButton>
                        }
                        title="Luxury Cars"
                        subheader="(6)"
                    />
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="194"
                            image={Premio}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Toyota Premio
                            </Typography>
                            <Typography paragraph>
                                Brand : Toyota Premio
                                <br/>
                                Transmission type : Luxury
                                <br/>
                                Fuel type : Petrol
                                <br/>
                                Type : Manual
                                <br/>
                                No of passengers : 2
                                <br/>
                                Price : 10,000(Daily)
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{maxWidth: 345, mt: -63, ml: 70}}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                                LC
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon/>
                            </IconButton>
                        }
                        title="Luxury Cars"
                        subheader="(6)"
                    />
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="194"
                            image={Mercedes}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Mercedes
                            </Typography>
                            <Typography paragraph>
                                Brand : Mercedes
                                <br/>
                                Transmission type : Luxury
                                <br/>
                                Fuel type : Petrol
                                <br/>
                                Type : Auto
                                <br/>
                                No of passengers : 2
                                <br/>
                                Price : 18,000(Daily)
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>

                <Card sx={{maxWidth: 345, mt: -62, ml: 120}}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                                LC
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon/>
                            </IconButton>
                        }
                        title="Luxury Cars"
                        subheader="(6)"
                    />
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="194"
                            image={BMW}
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                BMW i8
                            </Typography>
                            <Typography paragraph>
                                Brand : BMW i8
                                <br/>
                                Transmission type : Luxury
                                <br/>
                                Fuel type : Petrol
                                <br/>
                                Type : Manual
                                <br/>
                                No of passengers : 2
                                <br/>
                                Price : 18,000(Daily)
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                </Card>
            </Typography>
        </div>
    );
}
