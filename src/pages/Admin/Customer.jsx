import React, {useEffect, useState} from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import {Grid, IconButton} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import RubberBtn from "../../component/common/RubberBandBtn";
import CustomerTables from "./customerTable";
import AdminService from "../../services/AdminService";


const ManageCustomer = ({}) => {

    return (

        <div>
            <Grid item lg={12} xs={12} sm={12} md={12}>
                <RubberBtn name="Manage Customer"/>
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

                        <Button type="reset" variant="contained" color="success"
                                sx={{ml: 3, mt: -13}}>
                            Reset
                        </Button>
                    </div>

                    <CustomerTables/>
                </div>
            </Box>
        </div>
    )

}

export default ManageCustomer