import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Navbar from './DashNavbar';
import Card from './Card';
import Activity from './Activity';
import RecentOrder from './RecentOrder';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';

const drawerWidth = 300;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    borderRight: "none"
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
    borderRight: "none"
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function Dashboard() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const icons = [<HomeIcon />, <LocationCityIcon />, <EventAvailableIcon />, <AccountBalanceWalletIcon />, <ShoppingBagIcon />];

    const handleListItemClick = (index) => {
        setActiveIndex(index);
    };

    const handleDrawerOpen = () => {
        setOpen(!open);
    };


    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}
                sx={{ backgroundColor: "#202027" }}>
                {/* <Toolbar > */}
                <Box sx={{ display: "flex", marginLeft: "1.3rem" }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 2,
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Navbar />
                </Box>
                {/* </Toolbar> */}
            </AppBar>
            <Drawer variant="permanent"
                // open={open} 
                sx={{ backgroundColor: "#202027" }}   >
                <DrawerHeader>
                    <IconButton
                        onClick={handleDrawerOpen}
                    >
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>

                <List sx={{ backgroundColor: "#333333", height: '100%', display: 'flex', flexDirection: 'column' }}>
                    <div>
                        {icons.map((text, index) => (
                            <ListItem
                                key={index}
                                disablePadding
                                sx={{
                                    display: 'block',
                                    borderLeft: activeIndex === index ? '4px solid #6a96fc' : 'none',
                                    // backgroundColor: activeIndex === index ? '#444444' : 'inherit', 
                                }}
                            >
                                <ListItemButton
                                    sx={{
                                        minHeight: 48,
                                        justifyContent: open ? 'initial' : 'center',
                                        px: 3,
                                        color: activeIndex === index ? '#6a96fc' : '#B0B0B0',
                                    }}
                                    onClick={() => handleListItemClick(index)}
                                >
                                    <ListItemIcon
                                        sx={{
                                            minWidth: 0,
                                            mr: open ? 3 : 'auto',
                                            justifyContent: 'center',
                                            color: activeIndex === index ? '#6a96fc' : '#B0B0B0',
                                        }}
                                    >
                                        {icons[index]}
                                    </ListItemIcon>
                                    <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </div>

                    <div style={{ flexGrow: 1 }} />

                    <div>
                        <ListItem
                            disablePadding
                            sx={{
                                display: 'block',
                                borderLeft: activeIndex === 5 ? '4px solid #6a96fc' : 'none',
                                // backgroundColor: activeIndex === 4 ? '#6a96fc' : 'inherit',
                            }}
                        >
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 3,
                                    color: activeIndex === 5 ? '#6a96fc' : '#B0B0B0',
                                }}
                                onClick={() => handleListItemClick(5)}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                        color: activeIndex === 5 ? '#6a96fc' : '#B0B0B0',
                                    }}
                                >
                                    <LogoutIcon />
                                </ListItemIcon>
                                <ListItemText primary="Settings" sx={{ opacity: open ? 1 : 0 }} />
                            </ListItemButton>
                        </ListItem>
                    </div>
                </List>
            </Drawer>

            <Box component="main" bgcolor={"black"} sx={{ width: "100vw", height: "auto", color: "white" }}>
                <DrawerHeader />
                <Box sx={{ paddingTop: "1rem", paddingLeft: "1rem", display: "flex", justifyContent: "start" }}>
                    <Typography variant="h6" gutterBottom >Dashboard</Typography>
                </Box>
                <Box sx={{ padding: "1rem", display: "flex", justifyContent: "start" }}>
                    <Card />
                </Box>
                <Box sx={{ padding: "1rem", display: "flex", justifyContent: "start" }}>
                    <Activity />
                </Box>
                <Box sx={{ padding: "1rem", display: "flex", justifyContent: "start" }}>
                    <RecentOrder />
                </Box>

            </Box>
        </Box >
    );
}
