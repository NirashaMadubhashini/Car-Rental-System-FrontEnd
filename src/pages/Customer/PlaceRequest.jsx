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
import ConstructionIcon from "@mui/icons-material/Construction";
import TablePagination from "@mui/material/TablePagination";
import Autocomplete from "@mui/material/Autocomplete";
import PlaceRequestTables from "./placeRequestTable";


const PlaceRequest = ({}) => {
    return (

        <div>
            <Grid item lg={12} xs={12} sm={12} md={12}>
                <RubberBtn name="Place Request"/>
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
                      sx={{paddingLeft: 5,mt:5}}
                >
                    <Grid item>
                        <Autocomplete
                            disablePortal
                            id="combo-box-demo"
                            options={cars}
                            sx={{ width: 250,mt:-3 }}
                            renderInput={(params) => <TextField {...params} label="Car Names" />}
                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            helperText="Enter Pick-up Date"
                            variant="outlined"
                            id="outlined-basic"
                            label="Pick-up Date"
                            name="pickupDate"

                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Pick-up Time"
                            id="demo-helper-text-aligned"
                            label="Pick-up Time"
                            name="pickupTime"

                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Return Date"
                            id="demo-helper-text-aligned"
                            label="Return Date"
                            name="returnDate"
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Return Time"
                            id="demo-helper-text-aligned"
                            label="Return Time"
                            name="returnTime"

                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Location"
                            id="demo-helper-text-aligned"
                            label="Location"
                            name="location"

                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            helperText="Enter Slip Photo"
                            id="demo-helper-text-aligned"
                            label="Slip Photo"
                            name="slipFile"

                        />
                    </Grid>
                </Grid>
                <div>
                    <div>
                        <Button  size="medium" type="submit" variant="contained"
                                 sx={{ml:5, mt: 5}}>
                            Place Request
                        </Button>
                        <Button type="reset" variant="contained" color="success"
                                sx={{ml: 5, mt: 5}}>
                            Reset
                        </Button>
                    </div>
                </div>
            </Box>
        </div>
    )

}
const cars = [
    { label: 'BMW'},
    { label: 'i8'},
    { label: 'Aqua'},
    { label: 'Bens'},
]

export default PlaceRequest