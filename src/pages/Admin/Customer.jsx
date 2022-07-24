import React from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Tables from "../../component/common/Table/table";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import {Grid, IconButton} from "@mui/material";
import TextField from "@mui/material/TextField";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";


const ManageCustomer = ({}) => {

    return (

        <div>
            <Grid item lg={12} xs={12} sm={12} md={12}>
                <Typography sx={{marginLeft: 40, fontSize: 35, fontWeight: 'bold',fontFamily:'system-ui'}}>
                    Manage Customer
                </Typography>
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
                {/*>*/}
                {/*<Grid*/}
                {/*    container*/}
                {/*    spacing={0}*/}
                {/*    direction="column"*/}
                {/*    alignItems="center"*/}
                {/*    justify="center"*/}
                {/*    style={{minHeight: "100vh"}}*/}
                {/*>*/}


                <Grid container alignItems="center" justify="center" direction="row" spacing={2}
                      sx={{paddingLeft: 5,mt:5}}
                >
                    <Grid item>
                        <TextField id="outlined-basic" label="Email" variant="outlined"
                                   helperText="Enter Email" name="email"
                               />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Brand"
                            variant="outlined"
                            id="outlined-basic"
                            label="Brand"
                            name="brand"

                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Type"
                            id="outlined-basic"
                            label="Type"
                            name="type"

                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            id="outlined-number"
                            label="Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            helperText="Enter No_Of_Passengers"
                            name="noOfPassengers"

                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Transmission_Type"
                            id="demo-helper-text-aligned"
                            label="Transmission_Type"
                            name="transmissionType"

                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Fuel_Type"
                            id="demo-helper-text-aligned"
                            label="Fuel_Type"
                            name="fuelType"

                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Color"
                            id="demo-helper-text-aligned"
                            label="Color"
                            name="color"

                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Daily_Rate"
                            id="demo-helper-text-aligned"
                            label="Daily_Rate"
                            name="dailyRate"

                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Monthly_Rate"
                            id="demo-helper-text-aligned"
                            label="Monthly_Rate"
                            name="monthlyRate"

                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Free_Km_For_Price"
                            id="demo-helper-text-aligned"
                            label="Free_Km_For_Price"
                            name="freeKmForPrice"

                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Free_Km_For_Price"
                            id="demo-helper-text-aligned"
                            label="Free_Km_For_Duration"
                            name="freeKmForDuration"

                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Price_For_Extra_Km"
                            id="demo-helper-text-aligned"
                            label="Price_For_Extra_Km"
                            name="priceForExtraKm"

                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Upload Front_View_Img"
                            id="demo-helper-text-aligned"
                            label="Front_View_Img"
                            name="frontViewImg"

                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Upload Back_View_Img"
                            id="demo-helper-text-aligned"
                            label="Back_View_Img"
                            name="backViewImg"
                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            helperText="Upload Side_View_Img"
                            id="demo-helper-text-aligned"
                            label="Side_View_Img"
                            name="sideViewImg"

                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            helperText="Upload  Internal_View_Img"
                            id="demo-helper-text-aligned"
                            label="Internal_View_Img"
                            name="internalViewImg"

                        />
                    </Grid>
                </Grid>
                <InputBase
                    sx={{ml: 10, mt: 5, flex: 1}}
                    placeholder="Search RegistrationNO"
                    inputProps={{'aria-label': 'search google maps'}}
                    variant="standard"
                />
                <IconButton type="submit" sx={{p:'20px'}} aria-label="search">
                    <SearchIcon/>
                </IconButton>
                <div>
                    <div>
                        <Button color="secondary" size="medium" type="submit" variant="contained"
                                sx={{ml: 45, mt: -13}}>
                            Search
                        </Button>

                        <Button type="reset" variant="contained" color="success"
                                sx={{ml: 3, mt: -13}}>
                            Reset
                        </Button>
                    </div>
                    <Tables/>
                </div>

            </Box>
        </div>
    )

}

export default ManageCustomer