import * as React from 'react';
import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Paper from '@mui/material/Paper';
import {visuallyHidden} from '@mui/utils';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';
import ConstructionIcon from '@mui/icons-material/Construction';
import IconButton from "@mui/material/IconButton";
import AdminService from "../../services/AdminService";

function createData(registrationNO, brand, type, noOfPassengers, transmissionType, fuelType, color, frontViewImg, backViewImg, sideViewImg, internalViewImg, dailyRate, monthlyRate, freeKmForPrice, freeKmForDuration, lossDamageWaiver, priceForExtraKm, completeKm,update, deleted, maintain) {
    return {
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
        lossDamageWaiver,
        priceForExtraKm,
        completeKm,
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
        id: 'lossDamageWaiver',
        numeric: false,
        disablePadding: true,
        label: 'LossDamageWaiver',
    },
    {
        id: 'priceForExtraKm',
        numeric: false,
        disablePadding: true,
        label: 'Price_For_Extra_Km',
    },
    {
        id: 'completeKm',
        numeric: false,
        disablePadding: true,
        label: 'Complete_Km',
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

export default function CarTable() {
    const [order, setOrder] = React.useState('asc');
    const [orderBy, setOrderBy] = React.useState('calories');
    const [selected, setSelected] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [tblData, setTblData] = useState([]);
    const [rows, setRows] = useState([]);

    useEffect(() => {
        loadData();
    }, [])


    const loadData = () => {
        AdminService.fetchCar().then((res) => {
            if (res.status === 200) {
                setTblData(res.data.data)
                setDataToRows(res.data.data)
                console.log("res table",res.data.data)
            }
        });//car service --> fetchCustomer()
    };
    const setDataToRows = (td) => {

        console.log("tablemap",td);
        const newArr2 = []
        for (let i = 0; i < td.length; i++) {
            newArr2.push((createData(

                td[i].registrationNO, td[i].brand, td[i].type, td[i].noOfPassengers, td[i].transmissionType, td[i].fuelType, td[i].color, td[i].frontViewImg,
                td[i].backViewImg, td[i].sideViewImg, td[i].internalViewImg, td[i].dailyRate, td[i].monthlyRate, td[i].freeKmForPrice, td[i].freeKmForDuration,
                td[i].lossDamageWaiver, td[i].priceForExtraKm, td[i].completeKm
            )))
        }
        console.log("new Arra",newArr2)
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
                                            <TableCell component="th"
                                                       id={labelId}
                                                       scope="row"
                                                       padding="none">{row.lossDamageWaiver}
                                            </TableCell>
                                            <TableCell component="th"
                                                       id={labelId}
                                                       scope="row"
                                                       padding="none">{row.priceForExtraKm}
                                            </TableCell>
                                            <TableCell component="th"
                                                       id={labelId}
                                                       scope="row"
                                                       padding="none">{row.completeKm}
                                            </TableCell>
                                            <TableCell component="th"
                                                       id={labelId}
                                                       scope="row"
                                                       padding="none">{row.isAvailable}
                                            </TableCell>
                                            <TableCell component="th"
                                                       id={labelId}
                                                       scope="row"
                                                       padding="none">{row.update}
                                                <IconButton color="info" aria-label="update" component="label">
                                                    <CreateIcon/>
                                                </IconButton>

                                            </TableCell>
                                            <TableCell component="th"
                                                       id={labelId}
                                                       scope="row"
                                                       padding="none">{row.delete}

                                                <IconButton color="error" aria-label="delete" component="label">
                                                    <DeleteIcon/>
                                                </IconButton>
                                            </TableCell>

                                            <TableCell component="th"
                                                       id={labelId}
                                                       scope="row"
                                                       padding="none">{row.maintain}
                                                <IconButton color="secondary" aria-label="maintain" component="label">
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
    );
}
