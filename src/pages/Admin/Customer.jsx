import React from 'react'
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import Button from "@mui/material/Button";
import Tables from "../../component/common/Table/table";
import Typography from "@mui/material/Typography";

const ManageCustomer = ({}) => {
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
            <Typography sx={{marginLeft:40,fontSize:35,fontWeight:'bold',top:100}}>
                Customer
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

                </div>
            </Box>
        </div>
    )

}

export default ManageCustomer