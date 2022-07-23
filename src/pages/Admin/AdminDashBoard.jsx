import React from 'react'
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";


const AdminDashBoard = ({})=>{

    return (
        <Card sx={{ width:250,mt:10,ml:10,backgroundColor:'#4dabf5'}}>
            <CardContent>
                <Typography variant="h5" component="div">
                    Registered Users
                </Typography>

            </CardContent>

        </Card>
    );

}

export default AdminDashBoard