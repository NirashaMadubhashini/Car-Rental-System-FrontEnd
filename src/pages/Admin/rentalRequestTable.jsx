import React from 'react'
import Box from "@mui/material/Box";
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
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import TablePagination from "@mui/material/TablePagination";
import IconButton from "@mui/material/IconButton";


function createData(customerNICNumber, driverName, vehicleNumber, noOfCars, payement, date, update, deleted, manageRequest) {
    return {
        customerNICNumber,
        driverName,
        vehicleNumber,
        noOfCars,
        payement,
        date,
        update,
        deleted,
        manageRequest
    };
}

const rows = [
    createData("1234567", "Praboda", "ABC123", "1", "3000", "2022.07.24"),
    createData("7654321", "Sadali", "ABC456", "1", "4000", "2022.07.23"),
    createData("6543218", "Geethika", "ABC789", "2", "6000", "2022.07.24"),
    createData("5432198", "Anupama", "DEF123", "3", "10000", "2022.07.24")
];

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
        id: 'customerNICNumber',
        numeric: false,
        disablePadding: true,
        label: 'Customer NIC Number',
    },
    {
        id: 'driverName',
        numeric: false,
        disablePadding: true,
        label: 'Driver Name',
    },
    {
        id: 'vehicleNumber',
        numeric: false,
        disablePadding: true,
        label: 'Vehicle Number',
    },
    {
        id: 'noOfCars',
        numeric: false,
        disablePadding: true,
        label: ' No.of Cars',
    },
    {
        id: 'payement',
        numeric: false,
        disablePadding: true,
        label: 'Payements',
    },
    {
        id: 'date',
        numeric: false,
        disablePadding: true,
        label: 'date',
    },
    {
        id: 'update',
        numeric: false,
        disablePadding: true,
        label: 'Update',
    },
    // {
    //     id: 'deleted',
    //     numeric: false,
    //     disablePadding: true,
    //     label: 'Delete',
    // },
    // {
    //     id: 'manageRequest',
    //     numeric: false,
    //     disablePadding: true,
    //     label: 'Manage Request',
    // },
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

export default function RentalRequestTables() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

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

    return(
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
                                    const isItemSelected = isSelected(row.customerNICNumber);
                                    const labelId = `enhanced-table-checkbox-${index}`;

                                    return (
                                        <TableRow
                                            hover
                                            aria-checked={isItemSelected}
                                            tabIndex={-1}
                                            key={row.customerNICNumber}
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
                                                {row.customerNICNumber}
                                            </TableCell>
                                            <TableCell component="th"
                                                       id={labelId}
                                                       scope="row"
                                                       padding="none">{row.driverName}
                                            </TableCell>
                                            <TableCell component="th"
                                                       id={labelId}
                                                       scope="row"
                                                       padding="none">{row.vehicleNumber}
                                            </TableCell>
                                            <TableCell component="th"
                                                       id={labelId}
                                                       scope="row"
                                                       padding="none">{row.noOfCars}
                                            </TableCell>
                                            <TableCell component="th"
                                                       id={labelId}
                                                       scope="row"
                                                       padding="none">{row.payement}
                                            </TableCell>
                                            <TableCell component="th"
                                                       id={labelId}
                                                       scope="row"
                                                       padding="none">{row.date}
                                            </TableCell>

                                            <TableCell component="th"
                                                       id={labelId}
                                                       scope="row"
                                                       padding="none">{row.update}
                                                <IconButton color="info" aria-label="update" component="label">
                                                    <CreateIcon/>
                                                </IconButton>

                                            </TableCell>
                                            {/*<TableCell component="th"*/}
                                            {/*           id={labelId}*/}
                                            {/*           scope="row"*/}
                                            {/*           padding="none">{row.delete}*/}

                                            {/*    <IconButton color="error" aria-label="delete" component="label">*/}
                                            {/*        <DeleteIcon/>*/}
                                            {/*    </IconButton>*/}
                                            {/*</TableCell>*/}

                                            {/*<TableCell component="th"*/}
                                            {/*           id={labelId}*/}
                                            {/*           scope="row"*/}
                                            {/*           padding="none">{row.manageRequest}*/}
                                            {/*    <IconButton color="secondary" aria-label="maintain" component="label">*/}
                                            {/*        <ManageAccountsIcon/>*/}
                                            {/*    </IconButton>*/}
                                            {/*</TableCell>*/}
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
    )
}