import * as React from 'react';
import {useEffect, useState} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Alto from '../../assets/img/alto.jpg';
import {Grid} from "@mui/material";
import RubberBtn from "../../component/common/RubberBandBtn";
import CardActionArea from "@mui/material/CardActionArea";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from "@mui/material/Box";
import CustomerService from "../../services/CustomerService";
import {DatePicker, LocalizationProvider, TimePicker} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import AdminService from "../../services/AdminService";
import {showToast} from "../Admin/Customer";

export default function CarDetails() {

    const initialValues = {
        pickUpDate: "",
        pickUpTime: "",
        returnDate: "",
        returnTime: "",
        location: "",
        slipFile: "",
    };

    const [open, setOpen] = React.useState(false);
    const [regNo, setRegNo] = React.useState("");
    const [car, setCarData] = React.useState([]);
    const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));
    const [formValues, setFormValues] = useState(initialValues);

    const handleChange = (newValue) => {
        setValue(newValue);
    };
    useEffect(() => {
        loadCar(false);
        console.log(loadCar(false))
    }, [])

    const loadCar = (boolean) => {
        CustomerService.fetchCarByAvailability(boolean).then((res) => {
            if (res.status === 200) {
                setCarData(res.data.data)
            }
        });
    };
    const handleClickOpen = (registrationNO) => {
        setOpen(true);
        setRegNo(registrationNO);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const carStats = async () => {
        let res = await CustomerService.carPurchase(regNo);

        if (res.data.code === 200) {

            showToast('success', 'successfully Accepted!');

        } else {

            showToast('error', 'Error');
        }

    };
    const PurchaseBtnToggled = async () => {
        await carStats();
        // handleClose();
    };

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
    }


    return (

        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Rent Details</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please Add Information Before your car Rent
                    </DialogContentText>

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
                              sx={{paddingLeft:2, mt: 5}}
                        >
                            <Grid item>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="Basic example"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <TimePicker
                                        label="Basic example"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <DatePicker
                                        label="Basic example"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <TimePicker
                                        label="Basic example"
                                        value={value}
                                        onChange={(newValue) => {
                                            setValue(newValue);
                                        }}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item>
                                <TextField
                                    helperText="Enter Location"
                                    id="demo-helper-text-aligned"
                                    label="Location"
                                    name="location"
                                    onChange={handleInputChange}
                                    value={formValues.location}
                                />
                            </Grid>

                            <Grid item>
                                <Button variant="contained" component="label" name="slipFile"
                                        value={formValues.slipFile}>
                                    Upload Photo
                                    <input hidden accept="image/*" multiple type="file" />
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={PurchaseBtnToggled}>Purchase</Button>
                </DialogActions>
            </Dialog>

            <div>
                <Grid item lg={12} xs={12} sm={12} md={12}>
                    <RubberBtn name="Booking Your Car"/>
                </Grid>

                <Box
                    component="form"
                    sx={{
                        '& > :not(style)': {},
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Grid
                        container alignItems="center" justify="center" direction="row" spacing={5}
                        sx={{paddingLeft: 5, paddingRight: 5, mt: 5}}
                    >
                        {car.map((data) => {
                            return <Grid item xs={12} sm={6} md={3} key={car.indexOf(data)}>
                                <Card sx={{mt: 3, mb: 5}}>
                                    <CardHeader
                                        avatar={
                                            <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                                                GC
                                            </Avatar>
                                        }
                                        action={
                                            <IconButton aria-label="settings">
                                                <MoreVertIcon/>
                                            </IconButton>
                                        }
                                        title="General Cars Rates"
                                        subheader="(30)"
                                    />
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="194"
                                            image={Alto}
                                            alt="green iguana"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                {data.brand}
                                            </Typography>
                                            <Typography paragraph>
                                                Brand : {data.brand}
                                                <br/>
                                                Transmission type : {data.transmissionType}
                                                <br/>
                                                Fuel type : {data.fuelType}
                                                <br/>
                                                Type : {data.type}
                                                <br/>
                                                No of passengers : {data.noOfPassengers}
                                                <br/>
                                                Price : {data.dailyRate}
                                            </Typography>

                                            <Stack spacing={2} direction="row">
                                                <Button color="secondary" onClick={() => handleClickOpen(data.registrationNO)}
                                                        variant="contained">Purchase</Button>
                                                <Button color="success" variant="contained">Add Driver</Button>
                                            </Stack>

                                        </CardContent>
                                    </CardActionArea>
                                </Card>

                            </Grid>

                        })}
                    </Grid>
                </Box>


            </div>
        </div>
    );
}
