import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid} from "@mui/material";
import RubberBtn from "../../component/common/RubberBandBtn";


const card = (
    <React.Fragment>
        <Box sx={{color:'green'}}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Daily Income
                </Typography>
                <Typography sx={{mb: 1.5}} color="text.secondary">
                    $
                </Typography>
                <Typography variant="body2">
                    Rupees:
                    <br/>
                    20,000
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">More Details</Button>
            </CardActions>
        </Box>
    </React.Fragment>
);

const card2 = (
    <React.Fragment>
        <Box sx={{color:'green'}}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Weekly Income
                </Typography>
                <Typography sx={{mb: 1.5}} color="text.secondary">
                    $
                </Typography>
                <Typography variant="body2">
                    Rupees:
                    <br/>
                    90,000
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">More Details</Button>
            </CardActions>
        </Box>
    </React.Fragment>
);

const card3 = (
    <React.Fragment>
        <Box sx={{color:'green'}}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Monthly Income
                </Typography>
                <Typography sx={{mb: 1.5}} color="text.secondary">
                    $
                </Typography>
                <Typography variant="body2">
                    Rupees:
                    <br/>
                    90,000
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">More Details</Button>
            </CardActions>
        </Box>
    </React.Fragment>
);

const card4 = (
    <React.Fragment>
        <Box sx={{color:'green'}}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Annual Income
                </Typography>
                <Typography sx={{mb: 1.5}} color="text.secondary">
                    $
                </Typography>
                <Typography variant="body2">
                    Rupees:
                    <br/>
                    150,000
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">More Details</Button>
            </CardActions>
        </Box>
    </React.Fragment>
);


const Income = ({}) => {

    return (
        <div>
            <Grid item lg={12} xs={12} sm={12} md={12}>
                <RubberBtn name="Income Details"/>
            </Grid>
            <Box sx={{width: 250, ml: 25, mt: 15}}>
                <Card variant="outlined">{card}</Card>
            </Box>

            <Box sx={{width: 250, ml: 65, mt: -23}}>
                <Card variant="outlined">{card2}</Card>
            </Box>

            <Box sx={{width: 250, ml: 105, mt: -23}}>
                <Card variant="outlined">{card3}</Card>
            </Box>

            <Box sx={{width: 250, ml: 145, mt: -23}}>
                <Card variant="outlined">{card4}</Card>
            </Box>


        </div>
    )

}

export default Income