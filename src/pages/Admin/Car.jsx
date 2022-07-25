import React, {useState} from 'react'
import Tables from "../../component/common/Table/table";
import TextField from "@mui/material/TextField";
import {Box, Button, Grid, IconButton, Link, Typography} from "@mui/material";
import AdminService from "../../services/AdminService";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Divider from "@mui/material/Divider";
import RubberBtn from "../../component/common/RubberBandBtn";
import CarTables from "./carTable";

const ManageCar = ({}) => {
    const initialValues = {
        registrationNO: "",
        brand: "",
        type: "",
        noOfPassengers: 0,
        transmissionType: "",
        fuelType: "",
        color: "",
        frontViewImg: "",
        backViewImg: "",
        sideViewImg: "",
        internalViewImg: "",
        dailyRate: "",
        monthlyRate: "",
        freeKmForPrice: "",
        freeKmForDuration: "",
        priceForExtraKm: "",
        /**
         * Exta data
         * */
        id: 0,
        lossDamageWaiver: "",
        completeKm: "",
        isAvailable: "",


    };

    const statusObj = {
        alert: false,
        message: '',
        severity: '',
    }

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };
    const [formValues, setFormValues] = useState(initialValues);

    const [status, setStatus] = useState(statusObj);

    const [btnLabel, setBtnLabel] = useState('AddCar');

    const [btnColor, setBtnColor] = useState('primary');


    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(formValues);
        await submitCar();
    }

    const clearFields = () => {
        setFormValues({
            registrationNO: "",
            brand: "",
            type: "",
            noOfPassengers: 0,
            transmissionType: "",
            fuelType: "",
            color: "",
            frontViewImg: "",
            backViewImg: "",
            sideViewImg: "",
            internalViewImg: "",
            dailyRate: "",
            monthlyRate: "",
            freeKmForPrice: "",
            freeKmForDuration: "",
            priceForExtraKm: "",

        });
    };

    const submitCar = async () => {

        let dto = {};
        dto = formValues;

        console.log(formValues)
        if (btnLabel === "AddCar") {
            let res = AdminService.addCar(dto);//customer service --> postCustomer()

            console.log(res)    //print the promise

            if (res.status === 201) {
                setStatus({
                    alert: true,
                    message: "S",
                    severity: 'success'
                })

                clearFields();
                // this.loadData();
            } else {
                setStatus({
                    alert: true,
                    message: "E",
                    severity: 'error'
                });
            }
        } else {
            let res = await AdminService.putCar(formValues);//customer service --> putCustomer()
            if (res.status === 200) {
                setStatus({
                    alert: true,
                    message: "s",
                    severity: 'success',

                });
                setBtnLabel("AddCar");
                setBtnColor('primary')
                clearFields();
                // this.loadData();
            } else {
                setStatus({
                    alert: true,
                    message: "e",
                    severity: 'error'
                });
            }
        }
    };

    return (
        <div>
            <Grid item lg={12} xs={12} sm={12} md={12}>
                {/*<Typography sx={{marginLeft: 40, fontSize: 35, fontWeight: 'bold',fontFamily:'system-ui'}}>*/}
                {/*    Manage Car*/}
                {/*</Typography>*/}
                <RubberBtn name="Manage Car"/>
            </Grid>
            <Divider/>
            <Box
                component="form"
                onSubmit={handleSubmit}
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
                        <TextField id="outlined-basic" label="RegistrationNO" variant="outlined"
                                   helperText="Enter RegistrationNO" name="registrationNO"
                                   onChange={handleInputChange} validators={['required']}
                                   value={formValues.registrationNO}/>
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Brand"
                            variant="outlined"
                            id="outlined-basic"
                            label="Brand"
                            name="brand"
                            onChange={handleInputChange}
                            value={formValues.brand}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Type"
                            id="outlined-basic"
                            label="Type"
                            name="type"
                            onChange={handleInputChange}
                            value={formValues.type}
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
                            onChange={handleInputChange}
                            value={formValues.noOfPassengers}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Transmission_Type"
                            id="demo-helper-text-aligned"
                            label="Transmission_Type"
                            name="transmissionType"
                            onChange={handleInputChange}
                            value={formValues.transmissionType}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Fuel_Type"
                            id="demo-helper-text-aligned"
                            label="Fuel_Type"
                            name="fuelType"
                            onChange={handleInputChange}
                            value={formValues.fuelType}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Color"
                            id="demo-helper-text-aligned"
                            label="Color"
                            name="color"
                            onChange={handleInputChange}
                            value={formValues.color}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Daily_Rate"
                            id="demo-helper-text-aligned"
                            label="Daily_Rate"
                            name="dailyRate"
                            onChange={handleInputChange}
                            value={formValues.dailyRate}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Monthly_Rate"
                            id="demo-helper-text-aligned"
                            label="Monthly_Rate"
                            name="monthlyRate"
                            onChange={handleInputChange}
                            value={formValues.monthlyRate}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Free_Km_For_Price"
                            id="demo-helper-text-aligned"
                            label="Free_Km_For_Price"
                            name="freeKmForPrice"
                            onChange={handleInputChange}
                            value={formValues.freeKmForPrice}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Free_Km_For_Duration"
                            id="demo-helper-text-aligned"
                            label="Free_Km_For_Duration"
                            name="freeKmForDuration"
                            onChange={handleInputChange}
                            value={formValues.freeKmForDuration}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Price_For_Extra_Km"
                            id="demo-helper-text-aligned"
                            label="Price_For_Extra_Km"
                            name="priceForExtraKm"
                            onChange={handleInputChange}
                            value={formValues.priceForExtraKm}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Upload Front_View_Img"
                            id="demo-helper-text-aligned"
                            label="Front_View_Img"
                            name="frontViewImg"
                            onChange={handleInputChange}
                            value={formValues.frontViewImg}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Upload Back_View_Img"
                            id="demo-helper-text-aligned"
                            label="Back_View_Img"
                            name="backViewImg"
                            onChange={handleInputChange}
                            value={formValues.backViewImg}
                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            helperText="Upload Side_View_Img"
                            id="demo-helper-text-aligned"
                            label="Side_View_Img"
                            name="sideViewImg"
                            onChange={handleInputChange}
                            value={formValues.sideViewImg}
                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            helperText="Upload  Internal_View_Img"
                            id="demo-helper-text-aligned"
                            label="Internal_View_Img"
                            name="internalViewImg"
                            onChange={handleInputChange}
                            value={formValues.internalViewImg}
                        />
                    </Grid>
                </Grid>
                <InputBase
                    id="outlined-basic"
                    sx={{ml: 10, mt: 5, flex: 1}}
                    placeholder="Search RegistrationNO"
                    inputProps={{'aria-label': 'search RegistrationNO'}}
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

                        <Button color={btnColor} size="medium" type="submit" variant="contained"
                                sx={{ml:3, mt: -13}}>
                            {btnLabel}
                        </Button>

                        <Button type="reset" variant="contained" color="success"
                                sx={{ml: 3, mt: -13}}>
                            Reset
                        </Button>
                    </div>
                    <CarTables/>
                </div>

            </Box>
        </div>
    )

}

export default ManageCar