import React, {useState} from 'react'
import Box from "@mui/material/Box";
import Tables from "../../component/common/Table/table";
import TextField from "@mui/material/TextField";
import {Button, Grid, Typography} from "@mui/material";
import AdminService from "../../services/AdminService";


const ManageCar = ({}) => {
    const initialValues = {
        registrationNO: "",
        brand: "",
        type: "",
        noOfPassengers: 0,
        transmissionType: "",
        fuelType: "",
        color: "",
        dailyRate: "",
        monthlyRate: "",
        freeKmForPrice: "",
        freeKmForDuration: "",
        priceForExtraKm: "",

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
            dailyRate: "",
            monthlyRate: "",
            freeKmForPrice: "",
            freeKmForDuration: "",
            priceForExtraKm: "",

        });
    };

    const submitCar = async () => {
        let formData = this.state.formData;

        if (this.state.btnLabel === "save") {
            let res = await AdminService.addCar(formData);//customer service --> postCustomer()

            console.log(res)    //print the promise

            if (res.status === 201) {
                setStatus({
                    alert: true,
                    message: res.data.message,
                    severity: 'success'
                })

                this.clearFields();
                // this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        } else {
            let res = await CustomerService.putCustomer(formData);//customer service --> putCustomer()
            if (res.status === 200) {
                this.setState({
                    alert: true,
                    message: res.data.message,
                    severity: 'success',
                    btnLabel: 'save',
                    btnColor: 'primary'
                });
                this.clearFields();
                this.loadData();
            } else {
                this.setState({
                    alert: true,
                    message: res.response.data.message,
                    severity: 'error'
                });
            }
        }
    };

    return (
        <div>
            <Typography sx={{marginLeft: 40, fontSize: 35, fontWeight: 'bold'}}>
                Car
            </Typography>


            <Box

                component="form"
                onSubmit={handleSubmit}
                sx={{
                    '& > :not(style)': {m: 1, width: '100vh'},
                }}
                noValidate
                autoComplete="off"
            >
                {/*<Grid*/}
                {/*    container*/}
                {/*    spacing={0}*/}
                {/*    direction="column"*/}
                {/*    alignItems="center"*/}
                {/*    justify="center"*/}
                {/*    style={{minHeight: "100vh"}}*/}
                {/*>*/}


                <Grid container alignItems="center" justify="center" direction="row">
                    <Grid item>
                        <TextField id="outlined-basic" label="RegistrationNO" variant="outlined"
                                   helperText="Enter RegistrationNO" name="registrationNO"
                                   onChange={handleInputChange} value={formValues.registrationNO}/>
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
                    {/*<Button component="label" variant="outlined" size="medium" startIcon={<PhotoCamera/>}*/}
                    {/*        sx={{color: '#B1B1B1', fontSize: '50'}}>*/}
                    {/*    Front_View_Img*/}
                    {/*    <input hidden accept="image/*" multiple type="file"/>*/}
                    {/*</Button>*/}

                    {/*<Button component="label" variant="outlined" size="medium" startIcon={<PhotoCamera/>}*/}
                    {/*        sx={{color: '#B1B1B1', fontSize: '50'}}>*/}
                    {/*    Back_View_Img*/}
                    {/*    <input hidden accept="image/*" multiple type="file"/>*/}
                    {/*</Button>*/}
                    {/*<Button component="label" variant="outlined" size="medium" startIcon={<PhotoCamera/>}*/}
                    {/*        sx={{color: '#B1B1B1', fontSize: '50'}}>*/}
                    {/*    Side_View_Img*/}
                    {/*    <input hidden accept="image/*" multiple type="file"/>*/}
                    {/*</Button>*/}
                    {/*<Button component="label" variant="outlined" size="medium" startIcon={<PhotoCamera/>}*/}
                    {/*        sx={{color: '#B1B1B1', fontSize: '50'}}>*/}
                    {/*    Internal_View_Img*/}
                    {/*    <input hidden accept="image/*" multiple type="file"/>*/}
                    {/*</Button>*/}
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
                            helperText="Enter Free_Km_For_Price"
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
                </Grid>

                <div>
                    <div>
                        <Button label={btnLabel} color={btnColor} type="submit" variant="contained" color="primary"
                                sx={{position: "absolute", top: 550, left: 25}}/>


                        <Button type="reset" variant="contained" color="success"
                                sx={{position: "absolute", top: 550, left: 130}}>
                            Reset
                        </Button>
                    </div>


                    <Tables/>
                </div>

            </Box>


        </div>


    )

}

export default ManageCar