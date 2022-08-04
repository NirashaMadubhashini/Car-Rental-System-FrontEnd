import React, {useState} from 'react'
import TextField from "@mui/material/TextField";
import {Avatar, Box, Button, Grid, Link, Paper, Typography} from "@mui/material";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {showToast} from "../Admin/Car";
import CustomerService from "../../services/CustomerService";
import {toast, ToastContainer} from 'react-toastify';

const SignUp = () => {
    const paperStyle = {padding: 20, height: '70vh', width: 350, margin: "20px auto"}
    const paperStyleContainer = {
        padding: 20, height: '80vh', width: 500,
        margin: "50px auto"
    }

    const avatarStyle = {backgroundColor: '#1565C0'}

    const [values, setValues] = React.useState({
        amount: '',
        password: '',
        weight: '',
        weightRange: '',
        showPassword: false,
    });


    const handleChange = (prop) => (event) => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const initialValues = {
        email: "",
        password: "",
        address: "",
        contactNo: 0,
        nicNo: "",
        nicImg: "",
        licenceNo: "",
        licenceImg: "",
        username: "",

        /**
         * Exta data
         * */
        isRegistered: false,
        isDriverRequested: false,
        isAccept: false
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

    const [btnLabel, setBtnLabel] = useState('Create Account');

    const [btnColor, setBtnColor] = useState('primary');

    const [tblData, setTblData] = useState([]);


    const handleSubmit = async (event) => {
        event.preventDefault();

        await submitUser();
    }

    const clearFields = () => {

        setFormValues({
            username: "",
            email: "",
            password: "",
            address: "",
            contactNo: 0,
            nicNo: "",
            nicImg: "",
            licenceNo: "",
            licenceImg: "",

        });
};

        const submitUser = async () => {

            let dto = {};
            dto = formValues;
            console.log("form Values",formValues)
            let res = await CustomerService.registerCustomer(formValues);
            console.log(res.status)

            console.log("res Status", res)
            if (res.data.code === 200) {

                setStatus({
                    alert: true,
                    message: "S",
                    severity: 'success'
                })
                showToast('success', 'saved successfully !');

                clearFields();

            } else {
                setStatus({
                    alert: true,
                    message: "E",
                    severity: 'error'
                });
                console.log("not Equal")
                showToast('error', 'Not Saved');
            }
        };


        return (
            <Grid>
            <ToastContainer/>
                <Paper elevation={10} style={paperStyleContainer}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockOpenIcon/></Avatar>
                        <h2>Sign Up</h2>
                    </Grid>

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
                              sx={{paddingLeft: 2, mt:5}}>

                            <Grid item sx={{paddingLeft: 2, mt:-12}}>
                                <TextField label='UserName' placeholder='Enter UserName'
                                           name="username"
                                           onChange={handleInputChange} validators={['required']}
                                           value={formValues.username}/>
                            </Grid>

                            <Grid item sx={{ml:-30, mt:5}}>
                                <TextField label='Email' placeholder='Enter  Email'
                                           name="email"
                                           onChange={handleInputChange} validators={['required']}
                                           value={formValues.email}/>
                            </Grid>

                            <Grid item >
                                <FormControl sx={{mt: -17.5, ml: 30}} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">New Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                >
                                                    {values.showPassword ? <VisibilityOff/> : <Visibility/>}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        label="Password"
                                        name="password"
                                        onChange={handleInputChange}
                                        value={formValues.password}
                                    />
                                </FormControl>
                            </Grid>

                            <Grid item sx={{mt: -17, ml: 30}}>
                                <TextField label='Address' placeholder='Enter Address'
                                           name="address"
                                           onChange={handleInputChange}
                                           value={formValues.address}/>
                            </Grid>


                            <Grid item sx={{mt: -4}}>
                                <TextField label='NIC Number' placeholder='Enter NIC Number'
                                           name="nicNo"
                                           onChange={handleInputChange}
                                           value={formValues.nicNo}/>
                            </Grid>

                            <Grid item sx={{mt: -4}}>
                                <TextField label='NIC Photo' placeholder='Upload NIC Photo'
                                           name="nicImg"
                                           onChange={handleInputChange}
                                           value={formValues.nicImg}/>
                            </Grid>

                            <Grid item>
                                <TextField label='Driving License Number' placeholder='Enter Driving License Number'
                                           name="licenceNo"
                                           onChange={handleInputChange}
                                           value={formValues.licenceNo}/>
                            </Grid>

                            <Grid item>
                                <TextField label='Driving License Photo' placeholder='Upload Driving License Photo'
                                           name="licenceImg"
                                           onChange={handleInputChange}
                                           value={formValues.licenceImg}/>
                            </Grid>
                            <Grid item sx={{ml:15}}>
                                <TextField label='Contact Number' placeholder='Enter Contact Number'
                                           name="contactNo"
                                           onChange={handleInputChange}
                                           value={formValues.contactNo}/>
                            </Grid>

                        </Grid>
                        <Button type='submit' color={btnColor} variant="contained" sx={{mt: 3, ml: 20}}>
                            {btnLabel}
                        </Button>
                    </Box>
                    <Typography sx={{mt: 3, ml: 20}}> Previous Page ?
                        <Link href="/" underline="none">
                            Sign In
                        </Link>
                    </Typography>
                </Paper>
            </Grid>
        )
    }
    export default SignUp