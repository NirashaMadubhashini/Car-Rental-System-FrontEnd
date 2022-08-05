import React, {useEffect, useState} from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import {Grid, IconButton} from "@mui/material";
import TextField from "@mui/material/TextField";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import RubberBtn from "../../component/common/RubberBandBtn";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableSortLabel from "@mui/material/TableSortLabel";
import {visuallyHidden} from "@mui/utils";
import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import TablePagination from "@mui/material/TablePagination";
import AdminService from "../../services/AdminService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const defaultPosition = toast.POSITION.TOP_CENTER;


function createData(did,nicNo, name, licenseNo, address, contactNo,username,password, update, deleted) {
    return {
        did,
        nicNo,
        name,
        licenseNo,
        address,
        contactNo,
        username,
        password,
        update,
        deleted

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
        id: 'did',
        numeric: false,
        disablePadding: true,
        label: 'Driver Number',
    },
    {
        id: 'nicNo',
        numeric: false,
        disablePadding: true,
        label: 'NIC Number',
    },
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Name',
    },
    {
        id: 'licenseNo',
        numeric: false,
        disablePadding: true,
        label: 'License Number',
    },
    {
        id: 'address',
        numeric: false,
        disablePadding: true,
        label: 'Address',
    },
    {
        id: 'contactNo',
        numeric: false,
        disablePadding: true,
        label: 'Contact Number',
    },
    {
        id: 'username',
        numeric: false,
        disablePadding: true,
        label: 'User Name',
    },
    {
        id: 'password',
        numeric: false,
        disablePadding: true,
        label: 'Password',
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


const ManageDriver = ({}) => {

    const initialValues = {
        did: "",
        nicNo: "",
        name: "",
        licenseNo: "",
        address: "",
        contactNo: "",
        username: "",
        password: "",
        /**
         * Exta data
         * */
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

    const [btnLabel, setBtnLabel] = useState('Add Driver');

    const [btnColor, setBtnColor] = useState('primary');

    const [tblData, setTblData] = useState([]);

    useEffect(() => {
        loadData();
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();

        await submitDriver();
    }

    const clearFields = () => {

        setFormValues({
            did: "",
            nicNo: "",
            name: "",
            licenseNo: "",
            address: "",
            contactNo: "",
            username: "",
            password: "",

        });
    };


    const submitDriver = async () => {

        let dto = {};
        dto = formValues;

        if (btnLabel === "Add Driver") {
            let res = await AdminService.addDriver(dto);//customer service --> postCustomer()


            if (res.data.code === 200 ) {
                setStatus({
                    alert: true,
                    message: "S",
                    severity: 'success'
                })
                showToast('success', 'saved successfully !');

                clearFields();
                loadData();
            } else {
                setStatus({
                    alert: true,
                    message: "E",
                    severity: 'error'
                });
                showToast('error', 'Not Saved');
            }
        } else {
            let res = await AdminService.putDriver(formValues);//customer service --> putCustomer()
            if (res.status === 200) {
                setStatus({
                    alert: true,
                    message: "s",
                    severity: 'success',

                });
                showToast('success', 'update successfully !');
                setBtnLabel("Add Driver");
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

    const loadData = () => {
        AdminService.fetchDriver().then((res) => {
            if (res.status === 200) {
                setTblData(res.data.data)
                setDataToRows(res.data.data)
            }
        });
    };


    const deleteDriver = async (id) => {
        let params = {
            did: id
        }
        let res = await AdminService.deleteDriver(params);

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

    const updateDriver = async (data) => {
        setBtnLabel("Update Driver");
        setBtnColor('secondary')
        setFormValues({
            did: data.did,
            nicNo: data.nicNo,
            name: data.name,
            licenseNo: data.licenseNo,
            address: data.address,
            contactNo: data.contactNo,
            username: data.username,
            password: data.password,

        });
    };


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
                td[i].did,td[i].nicNo, td[i].name, td[i].licenseNo, td[i].address, td[i].contactNo,td[i].username,td[i].password
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

    return (
        <div>
            <ToastContainer/>
            <Grid item lg={12} xs={12} sm={12} md={12}>
                <RubberBtn name="Manage Driver"/>
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
                        <TextField
                            helperText="Enter Driver Number"
                            id="outlined-basic"
                            label="Driver Number"
                            name="did"
                            validators={['required']}
                            onChange={handleInputChange}
                            value={formValues.did}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter NIC Number"
                            id="outlined-basic"
                            label="NIC Number"
                            name="nicNo"
                            validators={['required']}
                            onChange={handleInputChange}
                            value={formValues.nicNo}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Name"
                            id="outlined-basic"
                            label="Name"
                            name="name"
                            onChange={handleInputChange}
                            value={formValues.name}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Driving License number"
                            id="outlined-basic"
                            label="Driving License number"
                            name="licenseNo"
                            onChange={handleInputChange}
                            value={formValues.licenseNo}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Address"
                            id="outlined-basic"
                            label="Address"
                            name="address"
                            onChange={handleInputChange}
                            value={formValues.address}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Contact Number"
                            id="outlined-basic"
                            label="Contact Number"
                            name="contactNo"
                            onChange={handleInputChange}
                            value={formValues.contactNo}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter User Name"
                            id="outlined-basic"
                            label="User Name"
                            name="username"
                            onChange={handleInputChange}
                            value={formValues.username}
                        />
                    </Grid>
                    <Grid item>
                        <TextField
                            helperText="Enter Password"
                            id="outlined-basic"
                            label="Password"
                            name="password"
                            onChange={handleInputChange}
                            value={formValues.password}
                        />
                    </Grid>
                </Grid>
                {/*<InputBase*/}
                {/*    sx={{ml: 10, mt: 5, flex: 1}}*/}
                {/*    placeholder="Search NIC Number"*/}
                {/*    inputProps={{'aria-label': 'search NIC Number'}}*/}
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
                                sx={{ml: 5, mt: 5}}>
                            {btnLabel}
                        </Button>

                        <Button onClick={clearFields} type="reset" variant="contained" color="success"
                                sx={{ml: 5, mt: 5}}>
                            Reset
                        </Button>
                    </div>

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
                                                const isItemSelected = isSelected(row.did);
                                                const labelId = `enhanced-table-checkbox-${index}`;

                                                return (
                                                    <TableRow
                                                        hover
                                                        aria-checked={isItemSelected}
                                                        tabIndex={-1}
                                                        key={row.did}
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
                                                            {row.did}
                                                        </TableCell>
                                                        <TableCell
                                                            component="th"
                                                            id={labelId}
                                                            scope="row"
                                                            padding="none"
                                                        >
                                                            {row.nicNo}
                                                        </TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.name}
                                                        </TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.licenseNo}
                                                        </TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.address}
                                                        </TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.contactNo}
                                                        </TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.username}
                                                        </TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.password}
                                                        </TableCell>

                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.update}
                                                            <IconButton onClick={() => {
                                                                updateDriver(row);
                                                            }} color="info" aria-label="update" component="label">
                                                                <CreateIcon/>
                                                            </IconButton>

                                                        </TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.delete}

                                                            <IconButton onClick={() => deleteDriver(row. did)}
                                                                        color="error" aria-label="delete"
                                                                        component="label">
                                                                <DeleteIcon/>
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


                </div>
            </Box>
        </div>
    )

}

export default ManageDriver