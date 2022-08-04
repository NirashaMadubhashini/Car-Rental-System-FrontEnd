import React, {useState} from 'react'
import TextField from "@mui/material/TextField";
import {Avatar, Button, Grid, Link, Paper, Typography} from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import Image from '../../assets/img/car3.jpg';
import Box from "@mui/material/Box";



const Login = () => {

    const paperStyle = {padding: 20, height: '80vh', width: 350, marginLeft: 700, marginTop: -19}
    const paperStyleContainer = {
        padding: 20, height: '80vh', width: 680, marginTop: 50, marginLeft: 200,
        backgroundImage: `url(${Image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    const avatarStyle = {backgroundColor: '#1565C0'}

    const initialValues = {
        username: "",
        password: "",
    };

    const clearFields = () => {
        setFormValues({
            username: "",
            password: "",

        });
    };

    const [formValues, setFormValues] = useState(initialValues);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        console.log(name)
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log("Form Values==>",formValues)
    }



    return (
        <Grid>
            <Paper elevation={10} style={paperStyleContainer}>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockIcon/></Avatar>
                        <h2>Sign In</h2>
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
                        <TextField
                            label='Username'
                            placeholder='Enter username'
                            fullWidth required
                            onChange={handleInputChange}
                            name="username"
                            value={formValues.username}
                            sx={{mt: 4}}
                        />
                        <TextField
                            label='Password'
                            placeholder='Enter password'
                            type='password'
                            fullWidth required
                            name="password"
                            onChange={handleInputChange}
                            value={formValues.password}
                                   sx={{mt: 2}}/>

                        <Link href="admin" underline="none">
                            <Button type='submit' color='primary' variant="contained" size="large" sx={{mt: 5}} fullWidth>Sign
                                in</Button>
                        </Link>

                    </Box>

                    <Typography sx={{mt: 2, ml: 7}}> Do you have an account ?
                        <Link href="signUp" underline="none">
                            Sign Up
                        </Link>
                    </Typography>
                </Paper>
            </Paper>

        </Grid>
    )
}

export default Login