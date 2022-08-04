import React from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import {Grid, IconButton} from "@mui/material";
import TextField from "@mui/material/TextField";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import RubberBtn from "../../component/common/RubberBandBtn";
import RentalRequestTables from "./rentalRequestTable";


const ViewRentalRequest = ({}) => {

    return (

        <div>
            <Grid item lg={12} xs={12} sm={12} md={12}>
                <RubberBtn name="Rental Requests"/>
            </Grid>
            <Divider/>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': {},
                }}
                noValidate
                autoComplete="off"
            >

                <Grid container alignItems="center" justify="center" direction="row" spacing={2}
                      sx={{paddingLeft: 5, mt: 5}}
                >
                    {/*<Grid item>*/}
                    {/*    <TextField*/}
                    {/*        helperText="Enter Customer NICNumber"*/}
                    {/*        variant="outlined"*/}
                    {/*        id="outlined-basic"*/}
                    {/*        label="Customer NIC Number"*/}
                    {/*        name="customerNICNumber"*/}

                    {/*    />*/}
                    {/*</Grid>*/}
                    <Grid item>
                        <TextField
                            helperText="Enter Driver Name"
                            id="outlined-basic"
                            label="Driver Name"
                            name="driverName"

                        />
                    </Grid>
                    {/*<Grid item>*/}
                    {/*    <TextField*/}
                    {/*        helperText="Enter Vehicle Number"*/}
                    {/*        id="demo-helper-text-aligned"*/}
                    {/*        label="Vehicle Number"*/}
                    {/*        name="vehicleNumber"*/}

                    {/*    />*/}
                    {/*</Grid>*/}
                    {/*<Grid item>*/}
                    {/*    <TextField*/}
                    {/*        helperText="Enter No.of Cars"*/}
                    {/*        id="demo-helper-text-aligned"*/}
                    {/*        label="No.of Cars"*/}
                    {/*        name="noOfCars"*/}

                    {/*    />*/}
                    {/*</Grid>*/}
                    {/*<Grid item>*/}
                    {/*    <TextField*/}
                    {/*        helperText="Enter Payement"*/}
                    {/*        id="demo-helper-text-aligned"*/}
                    {/*        label="Payement"*/}
                    {/*        name="payement"*/}

                    {/*    />*/}
                    {/*</Grid>*/}
                    {/*<Grid item>*/}
                    {/*    <TextField*/}
                    {/*        helperText="Enter Date"*/}
                    {/*        id="demo-helper-text-aligned"*/}
                    {/*        label="Date"*/}
                    {/*        name="date"*/}

                    {/*    />*/}
                    {/*</Grid>*/}
                </Grid>
                {/*<InputBase*/}
                {/*    sx={{ml: 10, mt: 5, flex: 1}}*/}
                {/*    placeholder="Search Customer NIC Number"*/}
                {/*    inputProps={{'aria-label': 'search Customer NIC Number'}}*/}
                {/*    variant="standard"*/}
                {/*/>*/}
                {/*<IconButton type="submit" sx={{p: '20px'}} aria-label="search">*/}
                {/*    <SearchIcon/>*/}
                {/*</IconButton>*/}
                <div>
                    <div>
                        {/*<Button color="secondary" size="medium" type="submit" variant="contained"*/}
                        {/*        sx={{ml: 45, mt: -13}}>*/}
                        {/*    Search*/}
                        {/*</Button>*/}

                        <Button color="secondary" size="medium" variant="contained"
                                sx={{ml: 38, mt: -13}}>
                            Update
                        </Button>

                        <Button type="reset" variant="contained" color="success"
                                sx={{ml: 3, mt: -13}}>
                            Reset
                        </Button>
                    </div>

                    <RentalRequestTables/>


                </div>
            </Box>
        </div>
    )

}

export default ViewRentalRequest