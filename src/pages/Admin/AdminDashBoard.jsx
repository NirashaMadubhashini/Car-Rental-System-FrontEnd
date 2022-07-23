import * as React from 'react';
import {Box, styled} from '@mui/system';
import BadgeUnstyled, {badgeUnstyledClasses} from '@mui/base/BadgeUnstyled';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import PersonIcon from '@mui/icons-material/Person';
import BookIcon from '@mui/icons-material/Book';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DepartureBoardIcon from '@mui/icons-material/DepartureBoard';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import GarageIcon from '@mui/icons-material/Garage';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import CarCrashIcon from '@mui/icons-material/CarCrash';

const StyledBadge = styled(BadgeUnstyled)`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-variant: tabular-nums;
  list-style: none;
  font-family: IBM Plex Sans, sans-serif;
  position: relative;
  display: inline-block;
  line-height: 1;

  & .${badgeUnstyledClasses.badge} {
    z-index: auto;
    min-width: 20px;
    height: 20px;
    padding: 0 6px;
    color: #fff;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    white-space: nowrap;
    text-align: center;
    background: #07f;
    border-radius: 10px;
    box-shadow: 0 0 0 1px #fff;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
  }
`;

function BadgeContent() {
    return (
        <Box
            component="span"
            sx={{
                width: 42,
                height: 42,
                borderRadius: '2px',
                background: '#eee',
                display: 'inline-block',
                verticalAlign: 'middle',
            }}
        />
    );
}

const AdminDashBoard = ({}) => {

    return (
        <Typography sx={{ ml: 10}}>
            <Card sx={{width: 260, mt: 10, ml: 10, backgroundColor: '#4dabf5'}}>
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ml: 3}}>
                        Registered Users
                    </Typography>

                </CardContent>
                <StyledBadge badgeContent={5} sx={{mb: 5, ml: 13}}>
                    <PersonIcon/>
                </StyledBadge>
            </Card>

            <Card sx={{width: 260,mt:-16, ml: 50, backgroundColor: '#4dabf5'}}>
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ml:5}}>
                        Total Bookigs
                    </Typography>

                </CardContent>
                <StyledBadge badgeContent={5} sx={{mb: 5, ml: 13}}>
                    <BookIcon/>
                </StyledBadge>
            </Card>

            <Card sx={{width: 260,mt:-16, ml: 90, backgroundColor: '#4dabf5'}}>
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ml:5}}>
                        Available Cars
                    </Typography>

                </CardContent>
                <StyledBadge badgeContent={5} sx={{mb: 5, ml: 13}}>
                    <DirectionsCarIcon/>
                </StyledBadge>
            </Card>

            <Card sx={{width: 260,mt:-16, ml: 130, backgroundColor: '#4dabf5'}}>
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ml:5}}>
                        Reserved Cars
                    </Typography>

                </CardContent>
                <StyledBadge badgeContent={5} sx={{mb: 5, ml: 13}}>
                    <DepartureBoardIcon/>
                </StyledBadge>
            </Card>

            <Card sx={{width: 260, mt: 10, ml: 10, backgroundColor: '#4dabf5'}}>
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ml: 3}}>
                        No.of Bookings
                    </Typography>

                </CardContent>
                <StyledBadge badgeContent={5} sx={{mb: 5, ml: 13}}>
                    <BookmarkAddedIcon/>
                </StyledBadge>
            </Card>

            <Card sx={{width: 260,mt:-16, ml: 50, backgroundColor: '#4dabf5'}}>
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ml:4}}>
                        Available Drivers
                    </Typography>

                </CardContent>
                <StyledBadge badgeContent={5} sx={{mb: 5, ml: 13}}>
                    <AirlineSeatReclineNormalIcon/>
                </StyledBadge>
            </Card>

            <Card sx={{width: 260,mt:-16, ml: 90, backgroundColor: '#4dabf5'}}>
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ml:4}}>
                        Occupied Drivers.
                    </Typography>

                </CardContent>
                <StyledBadge badgeContent={5} sx={{mb: 5, ml: 13}}>
                    <PersonOffIcon/>
                </StyledBadge>
            </Card>

            <Card sx={{width: 260,mt:-16, ml: 130, backgroundColor: '#4dabf5'}}>
                <CardContent>
                    <Typography variant="h5" component="div" sx={{ml:2}}>
                        Need Maintenance
                    </Typography>

                </CardContent>
                <StyledBadge badgeContent={5} sx={{mb: 5, ml: 13}}>
                    <GarageIcon/>
                </StyledBadge>
            </Card>

            <Card sx={{width: 300,mt:5, ml: 70, backgroundColor: '#4dabf5'}}>
                <CardContent>
                    <Typography variant="h5" component="div" >
                       Cars Under Maintenance
                    </Typography>

                </CardContent>
                <StyledBadge badgeContent={5} sx={{mb: 5, ml: 16}}>
                    <CarCrashIcon/>
                </StyledBadge>
            </Card>

        </Typography>

    );

}

export default AdminDashBoard