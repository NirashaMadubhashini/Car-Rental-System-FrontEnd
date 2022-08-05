import React, {useEffect, useState} from 'react'
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import {Grid, IconButton} from "@mui/material";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import RubberBtn from "../../component/common/RubberBandBtn";
import AdminService from "../../services/AdminService";
import 'react-toastify/dist/ReactToastify.css';
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
import TablePagination from "@mui/material/TablePagination";
import CustomerService from "../../services/CustomerService";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import {toast, ToastContainer} from 'react-toastify';
import CancelIcon from '@mui/icons-material/Cancel';

const defaultPosition = toast.POSITION.TOP_CENTER;


function createData(email, nicNo, nicImg, licenceNo, licenceImg, address, contactNo, isAccept, decline) {
    return {
        email,
        nicNo,
        nicImg,
        licenceNo,
        licenceImg,
        address,
        contactNo,
        isAccept,
        decline
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
        id: 'email',
        numeric: false,
        disablePadding: true,
        label: 'Email',
    },
    {
        id: 'nicNo',
        numeric: false,
        disablePadding: true,
        label: 'NIC Number',
    },
    {
        id: 'nicImg',
        numeric: false,
        disablePadding: true,
        label: 'NIC Photos',
    },
    {
        id: 'licenceNo',
        numeric: false,
        disablePadding: true,
        label: 'Driving License Number',
    },
    {
        id: 'licenceImg',
        numeric: false,
        disablePadding: true,
        label: 'Driving License Photo',
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
        id: 'isAccept',
        numeric: false,
        disablePadding: true,
        label: 'Accept',
    },
    {
        id: 'decline',
        numeric: false,
        disablePadding: true,
        label: 'Decline',
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


const ManageCustomer = ({}) => {

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
        isAccept: false,
        /**
         * Exta data
         * */
        isRegistered: false,
        isDriverRequested: false,
        // isAccept: false
    };

    const statusObj = {
        alert: false,
        message: '',
        severity: '',
    }

    const [formValues, setFormValues] = useState(initialValues);

    const [status, setStatus] = useState(statusObj);

    const [tblData, setTblData] = useState([]);

    const [open, setOpen] = useState(false);
    const [isOk, setOk] = useState(false);


    const handleClickOpen = () => {
        setOpen(true);
    };


    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        CustomerService.fetchPendingCustomers().then((res) => {
            if (res.status === 200) {
                setTblData(res.data.data)
                setDataToRows(res.data.data)
            }
        });
    };


    const acceptRequest = async (nicNo) => {
        let res = await AdminService.customerAccept("ACCEPTED", nicNo);

        if (res.data.code === 200) {
            setStatus({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            showToast('success', 'successfully Accepted!');
            setOk(false);
            loadData()
        } else {
            setStatus({
                alert: true,
                message: res.data.message,
                severity: 'error'
            });
            showToast('error', 'Error');
            setOk(false);
        }

    };

    const declineRequest = async (nicNo) => {
        let res = await AdminService.customerAccept("DENIED", nicNo);
        console.log(res)
        if (res.data.code === 200) {
            setStatus({
                alert: true,
                message: res.data.message,
                severity: 'success'
            });
            showToast('success', 'successfully DENIED!');
            setOk(false);
            loadData()
        } else {
            setStatus({
                alert: true,
                message: res.data.message,
                severity: 'error'
            });
            showToast('error', 'Error');
            setOk(false);
        }

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
                td[i].email, td[i].nicNo, td[i].nicImg, td[i].licenceNo, td[i].licenceImg, td[i].address, td[i].contactNo, td[i].isAccept, td[i].decline
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

    const clearFields = () => {
        setFormValues({
            search: ""
        });
    };


    return (
        <div>
            <ToastContainer/>
            <Grid item lg={12} xs={12} sm={12} md={12}>
                <RubberBtn name="Manage Customer"/>
            </Grid>
            <Divider/>

            <Box
                component="form"
                sx={{
                    '& > :not(style)': {},
                }}
                noValidate
                autoComplete="off"
            >

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
                        {/*<Button*/}
                        {/*    color="secondary" size="medium" variant="contained"*/}
                        {/*    value={formValues.search}*/}
                        {/*    sx={{ml: 45, mt: -13}}>*/}
                        {/*    Search*/}
                        {/*</Button>*/}

                        {/*<Button onClick={clearFields} type="reset" variant="contained" color="success"*/}
                        {/*        sx={{ml: 3, mt: 10}}>*/}
                        {/*    Reset*/}
                        {/*</Button>*/}
                    </div>
<br/>
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
                                                const isItemSelected = isSelected(row.email);
                                                const labelId = `enhanced-table-checkbox-${index}`;

                                                return (
                                                    <TableRow
                                                        hover
                                                        aria-checked={isItemSelected}
                                                        tabIndex={-1}
                                                        key={row.email}
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
                                                            {row.email}
                                                        </TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.nicNo}
                                                        </TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.nicImg}
                                                        </TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.licenceNo}
                                                        </TableCell>
                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none">{row.licenceImg}
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
                                                                   padding="none"
                                                        >

                                                            <IconButton onClick={() => {
                                                                acceptRequest(row.nicNo)
                                                            }}
                                                                        color="success" aria-label="delete"
                                                                        component="label">
                                                                <CheckCircleOutlineIcon/>
                                                            </IconButton>
                                                        </TableCell>

                                                        <TableCell component="th"
                                                                   id={labelId}
                                                                   scope="row"
                                                                   padding="none"
                                                        >

                                                            <IconButton onClick={() => {
                                                                declineRequest(row.nicNo)
                                                            }}
                                                                        color="error" aria-label="delete"
                                                                        component="label">
                                                                <CancelIcon/>
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

export default ManageCustomer