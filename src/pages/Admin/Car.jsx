import React, {useEffect, useState} from 'react'
import TextField from "@mui/material/TextField";
import {Box, Button, Grid, IconButton} from "@mui/material";
import AdminService from "../../services/AdminService";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import Divider from "@mui/material/Divider";
import RubberBtn from "../../component/common/RubberBandBtn";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import ConstructionIcon from "@mui/icons-material/Construction";
import TablePagination from "@mui/material/TablePagination";
import TableHead from "@mui/material/TableHead";
import TableSortLabel from "@mui/material/TableSortLabel";
import {visuallyHidden} from "@mui/utils";
import PropTypes from "prop-types";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const defaultPosition = toast.POSITION.TOP_CENTER;

function createData(idCar, registrationNO, brand, type, noOfPassengers, transmissionType, fuelType, color, frontViewImg, backViewImg, sideViewImg, internalViewImg, dailyRate, monthlyRate, freeKmForPrice, freeKmForDuration, priceForExtraKm, update, deleted, maintain) {
    return {
        idCar,
        registrationNO,
        brand,
        type,
        noOfPassengers,
        transmissionType,
        fuelType,
        color,
        frontViewImg,
        backViewImg,
        sideViewImg,
        internalViewImg,
        dailyRate,
        monthlyRate,
        freeKmForPrice,
        freeKmForDuration,
        priceForExtraKm,
        update,
        deleted,
        maintain
    };
}


function descendingComparator(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

function getComparator(order, orderBy) {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}


function stableSort(array, comparator) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

const headCells = [
    {
        id: 'registrationNO',
        numeric: false,
        disablePadding: true,
        label: 'RegistrationNO',
    },
    {
        id: 'brand',
        numeric: false,
        disablePadding: true,
        label: 'Brand',
    },
    {
        id: 'type',
        numeric: false,
        disablePadding: true,
        label: 'Type',
    },
    {
        id: 'noOfPassengers',
        numeric: false,
        disablePadding: true,
        label: 'No_Of_Passengers',
    },
    {
        id: 'transmissionType',
        numeric: false,
        disablePadding: true,
        label: 'Transmission_Type',
    },
    {
        id: 'fuelType',
        numeric: false,
        disablePadding: true,
        label: 'Fuel_Type',
    },
    {
        id: 'color',
        numeric: false,
        disablePadding: true,
        label: 'Color',
    },
    {
        id: 'frontViewImg',
        numeric: false,
        disablePadding: true,
        label: 'Front_View_Img',
    },
    {
        id: 'backViewImg',
        numeric: false,
        disablePadding: true,
        label: 'Back_View_Img',
    },
    {
        id: 'sideViewImg',
        numeric: false,
        disablePadding: true,
        label: 'Side_View_Img',
    },
    {
        id: 'internalViewImg',
        numeric: false,
        disablePadding: true,
        label: 'Internal_View_Img',
    },
    {
        id: 'dailyRate',
        numeric: false,
        disablePadding: true,
        label: 'Daily_Rate',
    },
    {
        id: 'monthlyRate',
        numeric: false,
        disablePadding: true,
        label: 'Monthly_Rate',
    },
    {
        id: 'freeKmForPrice',
        numeric: false,
        disablePadding: true,
        label: 'Free_Km_For_Price',
    },
    {
        id: 'freeKmForDuration',
        numeric: false,
        disablePadding: true,
        label: 'Free_Km_For_Duration',
    },
    {
        id: 'priceForExtraKm',
        numeric: false,
        disablePadding: true,
        label: 'Price_For_Extra_Km',
    },
    {
        id: 'isAvailable',
        numeric: false,
        disablePadding: true,
        label: 'Is_Available',
    },
    {
        id: 'update',
        numeric: false,
        disablePadding: true,
        label: 'Update',
    },
    {
        id: 'deleted',
        numeric: false,
        disablePadding: true,
        label: 'Delete',
    },
    {
        id: 'maintain',
        numeric: false,
        disablePadding: true,
        label: 'Maintain',
    },
];

function EnhancedTableHead(props) {
    const {onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort} =
        props;
    const createSortHandler = (property) => (event) => {
        onRequestSort(event, property);
    };


    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">

                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

EnhancedTableHead.propTypes = {
    numSelected: PropTypes.number.isRequired,
    onRequestSort: PropTypes.func.isRequired,
    onSelectAllClick: PropTypes.func.isRequired,
    order: PropTypes.oneOf(['asc', 'desc']).isRequired,
    orderBy: PropTypes.string.isRequired,
    rowCount: PropTypes.number.isRequired,
};

const EnhancedTableToolbar = (props) => {
    const {numSelected} = props;

};

EnhancedTableToolbar.propTypes = {
    numSelected: PropTypes.number.isRequired,
};

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
        dailyRate: 0,
        monthlyRate: 0,
        freeKmForPrice: 0,
        freeKmForDuration: 0,
        priceForExtraKm: 0,
        /**
         * Exta data
         * */
        idCar: 0,
        lossDamageWaiver: 0,
        completeKm: 0,
        isAvailable: false,
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

    const [btnLabel, setBtnLabel] = useState('Add Car');

    const [btnColor, setBtnColor] = useState('primary');

    const [tblData, setTblData] = useState([]);

    useEffect(() => {
        loadData();
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();

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
            dailyRate: 0,
            monthlyRate: 0,
            freeKmForPrice: 0,
            freeKmForDuration: 0,
            priceForExtraKm: 0,

        });
    };

    const submitCar = async () => {

        let dto = {};
        dto = formValues;

        if (btnLabel === "Add Car") {
            let res = await AdminService.addCar(dto);//customer service --> postCustomer()
            console.log(res.status)

            console.log("res Status", res.data)
            if (res.data.code === 200) {

                setStatus({
                    alert: true,
                    message: "S",
                    severity: 'success'
                })
                showToast('success', 'saved successfully !');

                loadData();
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
        } else {
            let res = await AdminService.putCar(formValues);//customer service --> putCustomer()
            if (res.status === 200) {
                setStatus({
                    alert: true,
                    message: "s",
                    severity: 'success',
                });
                showToast('success', 'update successfully !');
                setBtnLabel("Add Car");
                setBtnColor('primary')
                clearFields();
                loadData();
            } else {
                setStatus({
                    alert: true,
                    message: "e",
                    severity: 'error'
                });
                showToast('error', 'Not Updated');
            }
        }
    };


    const loadData = async () => {
        AdminService.fetchCar().then((res) => {
            if (res.status === 200) {
                setTblData(res.data.data)
                setDataToRows(res.data.data)
            }
        });
    };

    const deleteCar = async (id) => {
        let params = {
            registrationNO: id
        }
        let res = await AdminService.deleteCar(params);

        if (res.status === 200) {
            setStatus({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            showToast('success', 'successfully Deleted!');
            loadData()
        } else {
            setStatus({
                alert: true,
                message: res.data.message,
                severity: 'error'
            });
            showToast('error', 'Not Deleted');
        }
    };

    const updateCar = async (data) => {
        setBtnLabel("Update Car");
        setBtnColor('secondary')
        setFormValues({
            idCar: data.idCar,
            registrationNO: data.registrationNO,
            brand: data.brand,
            type: data.type,
            noOfPassengers: data.noOfPassengers,
            transmissionType: data.transmissionType,
            fuelType: data.fuelType,
            color: data.color,
            frontViewImg: data.frontViewImg,
            backViewImg: data.backViewImg,
            sideViewImg: data.sideViewImg,
            internalViewImg: data.internalViewImg,
            dailyRate: data.dailyRate,
            monthlyRate: data.monthlyRate,
            freeKmForPrice: data.freeKmForPrice,
            freeKmForDuration: data.freeKmForDuration,
            priceForExtraKm: data.priceForExtraKm,

        });
    };

    // car
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [rows, setRows] = useState([]);


    const setDataToRows = (td) => {

        console.log("tablemap", td);
        const newArr2 = []
        for (let i = 0; i < td.length; i++) {
            newArr2.push((createData(
                td[i].idCar,
                td[i].registrationNO, td[i].brand, td[i].type, td[i].noOfPassengers, td[i].transmissionType, td[i].fuelType, td[i].color, td[i].frontViewImg,
                td[i].backViewImg, td[i].sideViewImg, td[i].internalViewImg, td[i].dailyRate, td[i].monthlyRate, td[i].freeKmForPrice, td[i].freeKmForDuration,
                td[i].priceForExtraKm
            )))
        }
        console.log("new Arra", newArr2)
        setRows(newArr2)
        // td.map((data) => (
        //     setRows(createData(
        //         data.registrationNO, data.brand, data.type, data.noOfPassengers, data.transmissionType, data.fuelType, data.color, data.frontViewImg,
        //         data.backViewImg, data.sideViewImg, data.internalViewImg, data.dailyRate, data.monthlyRate, data.freeKmForPrice, data.freeKmForDuration,
        //         data.lossDamageWaiver, data.priceForExtraKm, data.completeKm,"update","deleted","maintain"
        //     ))
        // ))

    };

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = rows.map((n) => n.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };


    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };


    const isSelected = (name) => selected.indexOf(name) !== -1;


    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    // car

    //upload image start//
    const [imgfile, uploadimg] = useState([])
    console.log("Image FIles", imgfile);
    const imgFilehandler = (e) => {
        if (e.target.files.length !== 0) {
            uploadimg(imgfile => [...imgfile, URL.createObjectURL(e.target.files[0])])
        }
    }
    //upload image end//


    return (
        <div>
            <ToastContainer/>
            <Grid item lg={12} xs={12} sm={12} md={12}>
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

                <Grid container alignItems="center" justify="center" direction="row" spacing={2}
                      sx={{paddingLeft: 5, mt: 5}}
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

                    {/*<div className="App">*/}
                    {/*    <input type="file" onChange={imgFilehandler}*/}
                    {/*           value={formValues.frontViewImg}*/}
                    {/*           name="frontViewImg" helperText="Upload Front_View_Img"*/}
                    {/*           id="demo-helper-text-aligned"*/}
                    {/*           label="Front_View_Img"/>*/}

                    {/*</div>*/}

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

                    {/*<div className="App">*/}
                    {/*    <input type="file" onChange={imgFilehandler}*/}
                    {/*           value={formValues.backViewImg}*/}
                    {/*           name="backViewImg" helperText="Upload Back_View_Img"*/}
                    {/*           id="demo-helper-text-aligned"*/}
                    {/*           label="Back_View_Img"/>*/}

                    {/*</div>*/}

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

                    {/*<div className="App">*/}
                    {/*    <input type="file" onChange={imgFilehandler}*/}
                    {/*           value={formValues.sideViewImg}*/}
                    {/*           name="sideViewImg" helperText="Upload Side_View_Img"*/}
                    {/*           id="demo-helper-text-aligned"*/}
                    {/*           label="Side_View_Img"/>*/}

                    {/*</div>*/}

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

                    {/*<div className="App">*/}
                    {/*    <input type="file" onChange={imgFilehandler}*/}
                    {/*           value={formValues.internalViewImg}*/}
                    {/*           name="internalViewImg" helperText="Upload Internal_View_Img"*/}
                    {/*           id="demo-helper-text-aligned"*/}
                    {/*           label="Internal_View_Img"/>*/}

                    {/*</div>*/}

                </Grid>
                {/*<InputBase*/}
                {/*    id="outlined-basic"*/}
                {/*    sx={{ml: 10, mt: 5, flex: 1}}*/}
                {/*    placeholder="Search RegistrationNO"*/}
                {/*    inputProps={{'aria-label': 'search RegistrationNO'}}*/}
                {/*    variant="standard"*/}
                {/*/>*/}
                {/*<IconButton type="submit" sx={{p: '20px'}} aria-label="search">*/}
                {/*    <SearchIcon/>*/}
                {/*</IconButton>*/}
                <div>
                    <div>
                        {/*<Button color="secondary" size="medium" variant="contained"*/}
                        {/*        sx={{ml: 45, mt: -13}}>*/}
                        {/*    Search*/}
                        {/*</Button>*/}

                        <Button color={btnColor} size="medium" type="submit" variant="contained"
                                sx={{ml: 5, mt:5}}>
                            {btnLabel}
                        </Button>

                        <Button onClick={clearFields} type="reset" variant="contained" color="success"
                                sx={{ml: 5, mt: 5}}>
                            Reset
                        </Button>
                    </div>
                    {/*cartable open*/}
                    <Box sx={{width: '100%'}}>
                        <Paper sx={{width: '100%', mb: 2}}>
                            <EnhancedTableToolbar numSelected={selected.length}/>
                            <TableContainer>
                                <Table
                                    sx={{minWidth: 750, marginTop: 5}}
                                    aria-labelledby="tableTitle"
                                    size={dense ? 'small' : 'medium'}
                                >
                                    <EnhancedTableHead
                                        numSelected={selected.length}
                                        order={order}
                                        orderBy={orderBy}
                                        onSelectAllClick={handleSelectAllClick}
                                        onRequestSort={handleRequestSort}
                                        rowCount={rows.length}
                                    />
                                    <TableBody>
                                        {stableSort(rows, getComparator(order, orderBy))
                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((row, index) => {
                                                const isItemSelected = isSelected(row.registrationNO);
                                                const labelId = `enhanced-table-checkbox-${index}`;

                                                return (
                                                    <TableRow
                                                        hover
                                                        aria-checked={isItemSelected}
                                                        tabIndex={-1}
                                                        key={row.registrationNO}
                                                        selected={isItemSelected}
                                                    >
                                                        <TableCell>
                                                        </TableCell>
                                                        <TableCell
                                                            component="th"
                                                            id={labelId}
                                                            scope="row"
                                                            padding="none"
                                                        >
                                                            {row.registrationNO}
                                                        </TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.brand}</TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.type}</TableCell>
                                                        <TableCell>{row.noOfPassengers}</TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.transmissionType}
                                                        </TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.fuelType}
                                                        </TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.color}
                                                        </TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.frontViewImg}

                                                        </TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.backViewImg}
                                                        </TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.sideViewImg}
                                                        </TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.internalViewImg}
                                                        </TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.dailyRate}
                                                        </TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.monthlyRate}
                                                        </TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.freeKmForPrice}
                                                        </TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.freeKmForDuration}
                                                        </TableCell>
                                                        {/*<TableCell component="th"*/}
                                                        {/*           id={labelId}*/}
                                                        {/*           scope="row"*/}
                                                        {/*           padding="none">{row.lossDamageWaiver}*/}
                                                        {/*</TableCell>*/}
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.priceForExtraKm}
                                                        </TableCell>
                                                        {/*<TableCell component="th"*/}
                                                        {/*           id={labelId}*/}
                                                        {/*           scope="row"*/}
                                                        {/*           padding="none">{row.completeKm}*/}
                                                        {/*</TableCell>*/}
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.isAvailable}
                                                        </TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.update}
                                                            <IconButton onClick={() => {
                                                                updateCar(row);
                                                            }} color="info" aria-label="update" component="label">
                                                                <CreateIcon/>
                                                            </IconButton>

                                                        </TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.delete}

                                                            <IconButton onClick={() => deleteCar(row.registrationNO)}
                                                                        color="error" aria-label="delete"
                                                                        component="label">
                                                                <DeleteIcon/>
                                                            </IconButton>
                                                        </TableCell>

                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.maintain}
                                                            <IconButton color="secondary" aria-label="maintain"
                                                                        component="label">
                                                                <ConstructionIcon/>
                                                            </IconButton>
                                                        </TableCell>
                                                    </TableRow>
                                                );
                                            })}
                                        {emptyRows > 0 && (
                                            <TableRow
                                                style={{
                                                    height: (dense ? 33 : 53) * emptyRows,
                                                }}
                                            >
                                                <TableCell colSpan={6}/>
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                component="div"
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>
                    </Box>
                    {/*cartable close*/}

                </div>

            </Box>
        </div>
    )

}

export default ManageCar