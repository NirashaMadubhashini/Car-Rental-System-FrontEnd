import React from 'react'
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import Button from "@mui/material/Button";
import Tables from "../../component/common/Table/table";
import Typography from "@mui/material/Typography";

const CarDetails = ({}) => {

    return (
        <div>
            <Typography sx={{marginLeft:40,fontSize:35,fontWeight:'bold',top:100}}>
                Car Details
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

export default CarDetails