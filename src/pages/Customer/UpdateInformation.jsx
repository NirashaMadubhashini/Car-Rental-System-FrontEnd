import React, {useEffect, useState} from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import {Grid} from "@mui/material";
import TextField from "@mui/material/TextField";
import RubberBtn from "../../component/common/RubberBandBtn";
import CustomerService from "../../services/CustomerService";
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const defaultPosition = toast.POSITION.TOP_CENTER;


export const showToast = (type = "success", msg, autoClose = 2000, className = "primaryColor", position = defaultPosition) => {
    if (type === "success") {
        toast.success(msg, {
            autoClose: autoClose === null ? 2000 : autoClose,
            className: className === null ? "primaryColor" : className,
            position: position,
        });
    } else if (type === "error") {
        toast.error(msg, {
            autoClose: autoClose === null ? 2000 : autoClose,
            className: className === null ? "dangerColor" : className,
            position: position,
        });
    }
};

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
        isRegistered: false,
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


    const [formValues, setFormValues] = useState(initialValues);

    const [status, setStatus] = useState(statusObj);

    const [btnLabel, setBtnLabel] = useState('Update Details');

    const [btnColor, setBtnColor] = useState('primary');

    const [tblData, setTblData] = useState([]);


    useEffect(() => {
        loadData();
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();

        await submitUpdateCustomer();
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


    const submitUpdateCustomer = async () => {
        let dto = {};
        dto = formValues;

        if (btnLabel === "Update Details") {
            let res = await CustomerService.putCustomer(formValues);//customer service --> putCustomer()

            if (res.status === 201) {
                setStatus({
                    alert: true,
                    message: "S",
                    severity: 'success'
                })
                showToast('success', 'update successfully !');
                clearFields();
                loadData();
            } else {
                setStatus({
                    alert: true,
                    message: "E",
                    severity: 'error'
                });
                showToast('error', 'Not Updated');
            }
        }
    };


    const loadData = () => {
        CustomerService.fetchPendingCustomers().then((res) => {
            if (res.status === 200) {
                setTblData(res.data.data)
            }
        });
    };


    const updateCustomer = async (data) => {
        setFormValues({
            username: data.username,
            password: data.password,
            licenceNo: data.licenceNo,
            licenceImg: data.licenceImg,
            address: data.address,
            contactNo: data.contactNo,

        });
    };

    const [rows, setRows] = useState([]);


    // const setDataToRows = (td) => {
    //
    //     console.log("tablemap", td);
    //     const newArr2 = []
    //     for (let i = 0; i < td.length; i++) {
    //         newArr2.push((createData(
    //             td[i].username, td[i].password, td[i].licenceNo, td[i].licenceImg, td[i].address, td[i].contactNo
    //         )))
    //     }
    //     console.log("new Arra", newArr2)
    //     setRows(newArr2)
    //     // td.map((data) => (
    //     //     setRows(createData(
    //     //         data.registrationNO, data.brand, data.type, data.noOfPassengers, data.transmissionType, data.fuelType, data.color, data.frontViewImg,
    //     //         data.backViewImg, data.sideViewImg, data.internalViewImg, data.dailyRate, data.monthlyRate, data.freeKmForPrice, data.freeKmForDuration,
    //     //         data.lossDamageWaiver, data.priceForExtraKm, data.completeKm,"update","deleted","maintain"
    //     //     ))
    //     // ))
    // };


    return (

        <div>
            <ToastContainer/>
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
                      sx={{paddingLeft: 5, mt: 5}}
                >
                    <Grid item>
                        <TextField id="outlined-basic" label="UserName" variant="outlined"
                                   helperText="Enter UserName" name="username"
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
                            name="licenceNo"
                            onChange={handleInputChange}
                            value={formValues.licenceNo}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Upload Driving License Photo"
                            id="demo-helper-text-aligned"
                            label="Driving License Photo"
                            name="licenceImg"
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
                            name="contactNo"
                            onChange={handleInputChange}
                            value={formValues.contactNo}
                        />
                    </Grid>
                </Grid>
                <div>
                    <div>
                        <Button onClick={() => {
                            updateCustomer();
                        }} color={btnColor} size="medium" type="submit" variant="contained"
                                sx={{ml: 10, mt: 5}}>
                            {btnLabel}
                        </Button>
                        <Button onClick={clearFields} type="reset" variant="contained" color="success"
                                sx={{ml: 3, mt: 5}}>
                            Reset
                        </Button>
                    </div>

                </div>
            </Box>
        </div>
    )

}

export default UpdateInformation