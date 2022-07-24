import React from 'react'
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { Grid,Paper, Avatar, Button, Typography,Link }  from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import LockIcon from '@mui/icons-material/Lock';
import Image from '../../assets/img/black4.jpg';


const Login=()=>{

    const paperStyle={padding :20,height:'80vh',width:350,marginLeft:700,marginTop:-19}
    const paperStyleContainer={padding :20,height:'80vh',width:680,marginTop:50,marginLeft:200 ,
        backgroundImage: `url(${Image})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'}

    const avatarStyle={backgroundColor:'#1565C0'}
    return(
        <Grid>
            <Paper elevation={10} style={paperStyleContainer}>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}><LockIcon/></Avatar>
                        <h2>Sign In</h2>
                    </Grid>
                    <TextField label='Username' placeholder='Enter username' fullWidth required sx={{mt:2}}/>
                    <TextField label='Password' placeholder='Enter password' type='password' fullWidth required sx={{mt:2}}/>
                    <Typography sx={{mt:1}}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                        }
                        label="Remember me"

                    />
                        <Link href="#" sx={{ml:5}}>
                            Forgot password ?
                        </Link>
                    </Typography>
                    <Link href="admin">
                    <Button type='submit' color='primary' variant="contained" sx={{mt:3}} fullWidth>Sign in</Button>
                    </Link>
                    <Typography sx={{mt:2,ml:7}}> Do you have an account ?
                        <Link href="signUp" >
                            Sign Up
                        </Link>
                    </Typography>
                </Paper>
            </Paper>

        </Grid>
    )
}

export default Login