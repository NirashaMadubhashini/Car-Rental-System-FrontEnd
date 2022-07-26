import React, {useEffect, useState} from 'react'
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
import UpdateInfoTables from "./updateInfoTable";
import AdminService from "../../services/AdminService";
import CustomerService from "../../services/CustomerService";



const UpdateInformation = ({}) => {

    const initialValues = {
        username: "",
        password: "",
        licenceNo: "",
        licenceImg: "",
        address: "",
        contactNo: 0,
        /**
         * Exta data
         * */
        customerId: "",
        name: "",
        email: "",
        nicNo: "",
        nicImg: "",
        isRegistered:false,
        isDriverRequested: false,
        isAccept: false,
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

    useEffect(() => {
        loadData();
    }, [])

    const [formValues, setFormValues] = useState(initialValues);

    const [status, setStatus] = useState(statusObj);

    const [btnLabel, setBtnLabel] = useState('Add Details');

    const [btnColor, setBtnColor] = useState('primary');

    const [tblData, setTblData] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        await submitCustomer();
    }

    const clearFields = () => {

        setFormValues({
            username: "",
            password: "",
            licenceNo: "",
            licenceImg: "",
            address: "",
            contactNo: 0,

        });
    };


    const submitCustomer = async () => {

        let dto = {};
        dto = formValues;

        if (btnLabel === "Add Details") {
            let res = CustomerService.addCustomer(dto);//customer service --> postCustomer()


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
            let res = await CustomerService.putCustomer(formValues);//customer service --> putCustomer()
            if (res.status === 200) {
                setStatus({
                    alert: true,
                    message: "s",
                    severity: 'success',

                });
                setBtnLabel("Add Details");
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


    const loadData =  () => {
        CustomerService.fetchCustomer().then((res) => {
            if (res.status === 200) {
                setTblData(res.data.data)
            }
        });
    };



    return (

        <div>
            <Grid item lg={12} xs={12} sm={12} md={12}>
                <RubberBtn name="Update Informations"/>
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

                <Grid container alignItems="center" justify="center" direction="row" spacing={2}
                      sx={{paddingLeft: 5,mt:5}}
                >
                    <Grid item>
                        <TextField id="outlined-basic" label="UserName" variant="outlined"
                                   helperText="Enter UserName" name="userName"
                                   onChange={handleInputChange}
                                   value={formValues.username}
                        />

                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="EnterPassword"
                            variant="outlined"
                            id="outlined-basic"
                            label="Password"
                            name="password"
                            onChange={handleInputChange}
                            value={formValues.password}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Driving License number"
                            id="demo-helper-text-aligned"
                            label="Driving License number"
                            name="drivingLicenseNumber"
                            onChange={handleInputChange}
                            value={formValues.licenceNo}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Upload Driving License Photo"
                            id="demo-helper-text-aligned"
                            label="Driving License Photo"
                            name="drivingLicensePhoto"
                            onChange={handleInputChange}
                            value={formValues.licenceImg}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Address"
                            id="demo-helper-text-aligned"
                            label="Address"
                            name="address"
                            onChange={handleInputChange}
                            value={formValues.address}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Contact Number"
                            id="demo-helper-text-aligned"
                            label="Contact Number"
                            name="contactNumber"
                            onChange={handleInputChange}
                            value={formValues.contactNo}
                        />
                    </Grid>
                </Grid>
                <InputBase
                    sx={{ml: 10, mt: 5, flex: 1}}
                    placeholder="Search NIC Number"
                    inputProps={{'aria-label': 'search NIC Number'}}
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

                    <UpdateInfoTables/>

                </div>
            </Box>
        </div>
    )

}

export default UpdateInformation