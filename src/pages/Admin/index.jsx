import * as React from 'react';
import {useEffect} from 'react';
import {styled, useTheme} from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import MainPanel from "../Main";
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SummarizeIcon from '@mui/icons-material/Summarize';
import Income from "./Income";
import ManageCustomer from "./Customer";
import ManageDriver from "./Driver";
import ManageCar from "./Car";
import ViewRentalRequest from "./ViewRentalRequest";
import DailySummary from "./Summary";
import AdminDashBoard from "./AdminDashBoard";



const drawerWidth = 240;

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({theme, open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',

}));

export default function AdminPanel () {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [isCustomer, setCustomer] = React.useState(false);
    const [isDriver, setDriver] = React.useState(false);
    const [isCar, setCar] = React.useState(false);
    const [isRequest, setRequest] = React.useState(false);
    const [isIncome, setIncome] = React.useState(false);
    const [isSummary, setSummary] = React.useState(false);

    useEffect(() => {

    }, [])

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const ListItemBtnToggle = (index) => {
        let dowerBtnName = getDowerBtnName(index);
        if (dowerBtnName === 'customer') {
            setCustomer(true)
            setDriver(false)
            setCar(false)
            setRequest(false)
            setIncome(false)
            setSummary(false)
        } else if (dowerBtnName === 'driver') {
            setCustomer(false)
            setDriver(true)
            setCar(false)
            setRequest(false)
            setIncome(false)
            setSummary(false)
        } else if (dowerBtnName === 'car') {
            setCustomer(false)
            setDriver(false)
            setCar(true)
            setRequest(false)
            setIncome(false)
            setSummary(false)
        } else if (dowerBtnName === 'request') {
            setCustomer(false)
            setDriver(false)
            setCar(false)
            setRequest(true)
            setIncome(false)
            setSummary(false)
        } else if (dowerBtnName === 'income') {
            setCustomer(false)
            setDriver(false)
            setCar(false)
            setRequest(false)
            setIncome(true)
            setSummary(false)
        } else {
            setCustomer(false)
            setDriver(false)
            setCar(false)
            setRequest(false)
            setIncome(false)
            setSummary(true)
        }

    }

    const getDowerBtnName = (name) => {
        switch (name) {
            case 'Manage Customer':
                return 'customer'
            case 'Manage Driver':
                return 'driver'
            case 'Manage Car':
                return 'car'
            case 'View Rental Request':
                return 'request'
            case 'Income':
                return 'income'
            case 'Daily Summary':
                return 'summary'
            default:
                return ''
        }
    }


    return (
        <MainPanel>
            <Box sx={{flexGrow: 1}}>
                <CssBaseline/>
                <AppBar position="static" open={open} sx={{backgroundColor: "#1565BF", marginTop: -6}}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{mr: 2, ...(open && {display: 'none'})}}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography variant="h6" noWrap component="div">
                            Admin
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="temporary"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <Typography variant="h6" noWrap component="div"
                                    sx={{position: "absolute", left: 55, fontWeight: "bold"}}>
                            DashBoard
                        </Typography>

                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                        </IconButton>

                    </DrawerHeader>
                    <Divider/>
                    <List>
                        {['Manage Customer', 'Manage Driver', 'Manage Car', 'View Rental Request', 'Income', 'Daily Summary'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton onClick={() => ListItemBtnToggle(text)}>
                                    <ListItemIcon>
                                        {index === 0 ? <PersonIcon/> :
                                            index === 1 ? <AirlineSeatReclineNormalIcon/> :
                                                index === 2 ? <DirectionsCarIcon/> :
                                                    index == 3 ? <CreditScoreIcon/> :
                                                        index == 4 ? <AttachMoneyIcon/> : <SummarizeIcon/>
                                        }
                                    </ListItemIcon>
                                    <ListItemText primary={text}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Box>
            {
                isCustomer ? <ManageCustomer/> :
                    isDriver ? <ManageDriver/> :
                        isCar ? <ManageCar/> :
                            isRequest ? <ViewRentalRequest/> :
                                isIncome ? <Income/> :
                                    isSummary ? <DailySummary/> :
                                        <AdminDashBoard/>
                // <App/>



            }

        </MainPanel>
    );
}
