import * as React from 'react';
import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Alto from '../../assets/img/alto.jpg';
import K10 from '../../assets/img/alto-k10.jpg';
import {Grid} from "@mui/material";
import RubberBtn from "../../component/common/RubberBandBtn";

const ExpandMore = styled((props) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

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
                <Card sx={{maxWidth: 345, mt: 10, ml: 15}}>
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
                        title="General Cars"
                        subheader="(30)"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={Alto}
                        alt=""
                    />
                    <CardContent>
                        <Typography variant="h5" color="text.secondary">
                            Suzuki Alto - Premium -
                            Manual
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>

                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon/>
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                Brand: Suzuki Alto
                            </Typography>
                            <Typography paragraph>
                                Type:- Premium
                            </Typography>
                            <Typography paragraph>
                                Transmission type:Manual
                            </Typography>
                            <Typography paragraph>
                                Fuel type:Petrol
                            </Typography>
                            <Typography paragraph>
                                No of passengers:7
                            </Typography>
                            <Typography paragraph>
                                Price:2500(Daily Rate)
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
                <Card sx={{maxWidth: 345, mt: -51, ml: 65}}>
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
                        title="General Cars"
                        subheader="(30)"
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={K10}
                        alt=""
                    />
                    <CardContent>
                        <Typography variant="h5" color="text.secondary">
                            Suzuki Alto K10 - Premium -
                            Auto
                        </Typography>
                    </CardContent>
                    <CardActions disableSpacing>

                        <ExpandMore
                            expand={expanded}
                            onClick={handleExpandClick}
                            aria-expanded={expanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon/>
                        </ExpandMore>
                    </CardActions>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph>
                                Brand: Suzuki Alto K10
                            </Typography>
                            <Typography paragraph>
                                Type:- Premium
                            </Typography>
                            <Typography paragraph>
                                Transmission type:Auto
                            </Typography>
                            <Typography paragraph>
                                Fuel type:Petrol
                            </Typography>
                            <Typography paragraph>
                                No of passengers:8
                            </Typography>
                            <Typography paragraph>
                                Price:3000(Daily Rate)
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>
            </Typography>
        </div>
    );
}
