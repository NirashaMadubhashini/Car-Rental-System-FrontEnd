import React, {useState} from 'react'
import TextField from "@mui/material/TextField";
import {Avatar, Button, Grid, Link, Paper, Typography} from "@mui/material";
import LockIcon from '@mui/icons-material/Lock';
import Image from '../../assets/img/car3.jpg';
import Box from "@mui/material/Box";
import AdminService from "../../services/AdminService";
import LoginService from "../../services/LoginService";
import {toast, ToastContainer} from 'react-toastify';
import { useNavigate } from "react-router-dom";

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
    let navigate = useNavigate();

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
        await login();

    }

    const login = async () => {
        let dto = {};
        dto = formValues;
        let res = await LoginService.loginUser(dto);//customer service --> postCustomer()
        console.log(res.status)
        console.log("res Status", res)
        if (res.data.code === 200) {
            showToast('success', res.data.message);
            if (res.data.type === "Admin"){
                navigate("/admin");
            }else if (res.data.type === "Driver"){
                navigate("/driver");
            }else {
                navigate("/customer");
            }
        }
        if (res.data.code === 403) {
            showToast('error', res.data.message);
        }
        if (res.data.code === 405) {
            showToast('error', res.data.message);
        }
        if (res.data.code === 406) {
            showToast('error', res.data.message);
        }
        if (res.data.code === 404) {
            showToast('error', res.data.message);
        }
        if (res.data.code === 407){
            showToast('error',res.data.message);
        }
    }

    return (
        <Grid>
            <ToastContainer/>
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
                            <Button  type='submit' color='primary' variant="contained" size="large" sx={{mt: 5}} fullWidth>Sign
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