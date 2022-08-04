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
import MainPanel from "../Main";
import CarCrashIcon from '@mui/icons-material/CarCrash';
import SecurityUpdateGoodIcon from '@mui/icons-material/SecurityUpdateGood';
import InfoIcon from '@mui/icons-material/Info';
import CarDetails from "./CarDetail";
import RequestDetails from "./RequestDetails";
import UpdateInformation from "./UpdateInformation";
import PlaceRequest from "./PlaceRequest";
import CheckIcon from '@mui/icons-material/Check';
import CustomerDashBoard from "./CustomerDashBoard";





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

export default function CustomerPanel() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [isCarDetail, setCarDetail] = React.useState(false);
    const [isUpdateInformation, setUpdateInformation] = React.useState(false);
    const [isRequestDetails, setRequestDetails] = React.useState(false);
    const [isPlaceRequest, setPlaceRequest] = React.useState(false);

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
        if (dowerBtnName === 'carDetails') {
            setCarDetail(true)
            setUpdateInformation(false)
            setRequestDetails(false)
            setPlaceRequest(false)
        } else if (dowerBtnName === 'updateInformation') {
            setCarDetail(false)
            setUpdateInformation(true)
            setRequestDetails(false)
            setPlaceRequest(false)
        } else if (dowerBtnName === 'placeRequest') {
            setCarDetail(false)
            setUpdateInformation(false)
            setRequestDetails(false)
            setPlaceRequest(true)
        } else {
            setCarDetail(false)
            setUpdateInformation(false)
            setRequestDetails(true)
            setPlaceRequest(false)
        }

    }

    const getDowerBtnName = (name) => {
        switch (name) {
            case 'Car Details':
                return 'carDetails'
            case 'Update Information':
                return 'updateInformation'
            case 'Place Request':
                return 'placeRequest'
            case 'Request Details':
                return 'requestDetails'
            default:
                return ''
        }
    }

    return (
        <MainPanel>
            <Box sx={{flexGrow: 1}}>
                <CssBaseline/>
                <AppBar position="static" open={open} sx={{backgroundColor: "#1565BF", marginTop: -5}}>
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
                            Customer
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
                        {['Car Details', 'Update Information', 'Place Request', 'Request Details'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton onClick={() => ListItemBtnToggle(text)}>
                                    <ListItemIcon>
                                        {index === 0 ? <CarCrashIcon/> :
                                            index === 1 ? <SecurityUpdateGoodIcon/> :
                                                index === 2 ? <CheckIcon/> :
                                                    <InfoIcon/>}
                                    </ListItemIcon>
                                    <ListItemText primary={text}/>
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Box>
            {
                isCarDetail ? <CarDetails/> :
                    isUpdateInformation ? <UpdateInformation/> :
                        isRequestDetails ? <RequestDetails/> :
                            isPlaceRequest ? <PlaceRequest/> :
                                <CustomerDashBoard/>

            }
        </MainPanel>
    );
}