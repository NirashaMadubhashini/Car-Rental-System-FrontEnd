import React from 'react'
import TextField from "@mui/material/TextField";
import {Avatar, Button, Grid, Link, Paper, Typography} from "@mui/material";
import LockOpenIcon from '@mui/icons-material/LockOpen';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import {Visibility, VisibilityOff} from "@mui/icons-material";

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

    return (
        <Grid>
            <Paper elevation={10} style={paperStyleContainer}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOpenIcon/></Avatar>
                    <h2>Sign Up</h2>
                </Grid>
                <Grid container alignItems="center" justify="center" direction="row" spacing={2}
                      sx={{paddingLeft:2, mt: 5}}>

                    <Grid item >
                        <TextField label='Email' placeholder='Enter  Email' required/>
                    </Grid>

                    <Grid item>
                        <FormControl sx={{mt: -9,ml:30}} variant="outlined">
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
                            />
                        </FormControl>
                    </Grid>

                    <Grid item sx={{mt: -5}}>
                        <TextField label='Address' placeholder='Enter Address' required/>
                    </Grid>

                    <Grid item sx={{mt: -5}}>
                        <TextField label='Contact Number' placeholder='Enter Contact Number' required/>
                    </Grid>

                    <Grid item>
                        <TextField label='NIC Number' placeholder='Enter NIC Number' required/>
                    </Grid>

                    <Grid item>
                        <TextField label='NIC Photo' placeholder='Upload NIC Photo' required/>
                    </Grid>

                    <Grid item>
                        <TextField label='Driving License Number' placeholder='Enter Driving License Number' required/>
                    </Grid>

                    <Grid item>
                        <TextField label='Driving License Photo' placeholder='Upload Driving License Photo' required/>
                    </Grid>

                </Grid>

                <Button type='submit' color='primary' variant="contained" sx={{mt: 3, ml: 20}}>Create Account</Button>
                <Typography sx={{mt:3,ml:20}}> Previous Page ?
                    <Link href="/" underline="none">
                        Sign In
                    </Link>
                </Typography>
            </Paper>
        </Grid>
    )
}

export default SignUp