import React from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import {Grid, IconButton} from "@mui/material";
import TextField from "@mui/material/TextField";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import RubberBtn from "../../component/common/RubberBandBtn";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import {visuallyHidden} from "@mui/utils";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import TablePagination from "@mui/material/TablePagination";
import DriverTables from "./driverTable";


const ManageDriver = ({}) => {

    return (

        <div>
            <Grid item lg={12} xs={12} sm={12} md={12}>
                <RubberBtn name="Manage Driver"/>
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
                    <Grid item>
                        <TextField
                            helperText="Enter NIC Number"
                            id="outlined-basic"
                            label="NIC Number"
                            name="nicNumber"

                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Name"
                            id="demo-helper-text-aligned"
                            label="Name"
                            name="name"

                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Driving License number"
                            id="demo-helper-text-aligned"
                            label="Driving License number"
                            name="drivingLicenseNumber"

                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Address"
                            id="demo-helper-text-aligned"
                            label="Address"
                            name="address"

                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Contact Number"
                            id="demo-helper-text-aligned"
                            label="Contact Number"
                            name="contactNumber"

                        />
                    </Grid>
                </Grid>
                <InputBase
                    sx={{ml: 10, mt: 5, flex: 1}}
                    placeholder="Search NIC Number"
                    inputProps={{'aria-label': 'search NIC Number'}}
                    variant="standard"
                />
                <IconButton type="submit" sx={{p: '20px'}} aria-label="search">
                    <SearchIcon/>
                </IconButton>
                <div>
                    <div>
                        <Button color="secondary" size="medium" type="submit" variant="contained"
                                sx={{ml: 45, mt: -13}}>
                            Search
                        </Button>

                        <Button  size="medium" type="submit" variant="contained"
                                sx={{ml:3, mt: -13}}>
                            Add Driver
                        </Button>

                        <Button type="reset" variant="contained" color="success"
                                sx={{ml: 3, mt: -13}}>
                            Reset
                        </Button>
                    </div>

                    <DriverTables/>


                </div>
            </Box>
        </div>
    )

}

export default ManageDriver