import * as React from 'react';
import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';
import Alto from '../../assets/img/alto.jpg';
import Toyota from '../../assets/img/Toyota Corolla Axio.jpg';
import I8 from '../../assets/img/bmw-i8.jpg';

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


const CustomerDashBoard = ({}) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Typography>
            <Card sx={{maxWidth: 345, ml: 25, mt: 21,backgroundColor:'#0d47a1'}}>
                <CardHeader
                    avatar={
                        <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                            GC
                        </Avatar>
                    }
                    title="General Cars"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={Alto}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">

                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                </CardActions>
            </Card>

            <Card sx={{maxWidth: 345, ml: 78, mt: -40,backgroundColor:'#0d47a1'}}>
                <CardHeader
                    avatar={
                        <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                            PC
                        </Avatar>
                    }

                    title="Premium Cars "

                />
                <CardMedia
                    component="img"
                    height="194"
                    image={Toyota}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">

                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                </CardActions>
            </Card>

            <Card sx={{maxWidth: 345, ml: 130, mt: -39,backgroundColor:'#0d47a1'}}>
                <CardHeader
                    avatar={
                        <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                            LC
                        </Avatar>
                    }

                    title="Luxury Cars"

                />
                <CardMedia
                    component="img"
                    height="194"
                    image={I8}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">

                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                </CardActions>
            </Card>

        </Typography>
    );
}

export default CustomerDashBoard