import React from 'react'
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import Button from "@mui/material/Button";
import Tables from "../../component/common/Table/table";
import Typography from "@mui/material/Typography";

const ManageCar = ({}) => {
    function createData(name, calories, fat, carbs, protein) {
        return {name, calories, fat, carbs, protein};
    }

    const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    return (
        <div>
            <Typography sx={{marginLeft:40,fontSize:35,fontWeight:'bold'}}>
                Car
            </Typography>
            <Box sx={{bgcolor: 'white', height: '100vh', flexGrow: 1}}>
                <div>
                    <div >
                        <Button variant="contained" color="primary" sx={{position: "absolute", top: 180, left: 25}}>
                            Add Car
                        </Button>

                        <Button variant="contained" color="success" sx={{position: "absolute", top: 180, left: 130}}>
                            Add to Maintain
                        </Button>
                    </div>


                    <Tables/>
                    {/*<Table sx={{position:"absolute",top:180}}>*/}
                    {/*    <TableHead>*/}
                    {/*        <TableRow>*/}
                    {/*            <TableCell>Id</TableCell>*/}
                    {/*            <TableCell>FirstName</TableCell>*/}
                    {/*            <TableCell align="right">LastName</TableCell>*/}
                    {/*            <TableCell align="right">UserName</TableCell>*/}
                    {/*            <TableCell align="right">Age</TableCell>*/}
                    {/*            <TableCell align="right">Salary</TableCell>*/}
                    {/*        </TableRow>*/}
                    {/*    </TableHead>*/}
                    {/*    <TableBody>*/}

                    {/*        <TableRow key="1">*/}
                    {/*            <TableCell component="th" scope="row">*/}
                    {/*                "C001"*/}
                    {/*            </TableCell>*/}
                    {/*            <TableCell align="right">"Geeth"</TableCell>*/}
                    {/*            <TableCell align="right">"dd"</TableCell>*/}
                    {/*            <TableCell align="right">"232"</TableCell>*/}
                    {/*            <TableCell align="right">"dfd"</TableCell>*/}
                    {/*            <TableCell align="right">"dff"</TableCell>*/}
                    {/*            <TableCell*/}
                    {/*                align="right" ><CreateIcon/></TableCell>*/}
                    {/*            <TableCell*/}
                    {/*                align="right"><DeleteIcon/></TableCell>*/}

                    {/*        </TableRow>*/}

                    {/*    </TableBody>*/}
                    {/*</Table>*/}
                    {/*<TableContainer component={Paper} sx={{*/}
                    {/*    position: "absolute",*/}
                    {/*    display:"flex",*/}
                    {/*    justifyContent:"center",*/}
                    {/*    alignItems:"center",*/}
                    {/*    top: 180,*/}
                    {/*    // bgcolor: '#cfe8fc',*/}
                    {/*    bgcolor: 'white',*/}
                    {/*    marginLeft: 15,*/}
                    {/*    marginRight: 15,*/}

                    {/*}}>*/}
                    {/*    <Table sx={{minWidth: 850}} aria-label="simple table">*/}
                    {/*        <TableHead>*/}
                    {/*            <TableRow>*/}
                    {/*                <TableCell>registrationNO</TableCell>*/}
                    {/*                <TableCell align="right">brand</TableCell>*/}
                    {/*                <TableCell align="right">type</TableCell>*/}
                    {/*                <TableCell align="right">noOfPassengers</TableCell>*/}
                    {/*                <TableCell align="right">transmissionType</TableCell>*/}
                    {/*                <TableCell align="right">fuelType</TableCell>*/}
                    {/*                <TableCell align="right">color</TableCell>*/}
                    {/*                /!*<TableCell align="right">frontViewImg</TableCell>*!/*/}
                    {/*                /!*<TableCell align="right">backViewImg</TableCell>*!/*/}
                    {/*                /!*<TableCell align="right">sideViewImg</TableCell>*!/*/}
                    {/*                /!*<TableCell align="right">internalViewImg</TableCell>*!/*/}
                    {/*                /!*<TableCell align="right">dailyRate</TableCell>*!/*/}
                    {/*                /!*<TableCell align="right">monthlyRate</TableCell>*!/*/}
                    {/*                /!*<TableCell align="right">monthlyRate</TableCell>*!/*/}
                    {/*            </TableRow>*/}
                    {/*        </TableHead>*/}
                    {/*        <TableBody>*/}
                    {/*            {rows.map((row) => (*/}
                    {/*                <TableRow*/}
                    {/*                    key={row.name}*/}
                    {/*                    sx={{'&:last-child td, &:last-child th': {border: 0}}}*/}
                    {/*                >*/}
                    {/*                    <TableCell component="th" scope="row">*/}
                    {/*                        {row.name}*/}
                    {/*                    </TableCell>*/}
                    {/*                    <TableCell align="right">{row.calories}</TableCell>*/}
                    {/*                    <TableCell align="right">{row.fat}</TableCell>*/}
                    {/*                    <TableCell align="right">{row.carbs}</TableCell>*/}
                    {/*                    <TableCell align="right">{row.protein}</TableCell>*/}
                    {/*                    <TableCell*/}
                    {/*                        align="right"><CreateIcon/></TableCell>*/}
                    {/*                    <TableCell*/}
                    {/*                        align="right"><DeleteIcon/></TableCell>*/}
                    {/*                </TableRow>*/}
                    {/*            ))}*/}
                    {/*        </TableBody>*/}
                    {/*    </Table>*/}
                    {/*</TableContainer>*/}
                </div>
            </Box>
        </div>
    )

}

export default ManageCar