import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import CrisisAlertOutlinedIcon from '@mui/icons-material/CrisisAlertOutlined';
import LunchDiningOutlinedIcon from '@mui/icons-material/LunchDiningOutlined';
import RoomServiceOutlinedIcon from '@mui/icons-material/RoomServiceOutlined';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Box, Fab } from '@mui/material';

const DashMenu = () => {
    return (
        <Box sx={{ width: '100%' }} borderRadius={2}>
            <List >
                <ListItem>
                    <ListItemAvatar >
                        <Avatar sx={{ backgroundColor: "#ed915f", opacity: "0.8", width: 56, height: 56, marginRight: "1rem" }}>
                            <CrisisAlertOutlinedIcon sx={{ color: "#fc5a03" }} />
                        </Avatar>
                    </ListItemAvatar>

                    <ListItemText primary="Goals" />
                    <Fab size="small" disabled aria-label="arro">
                        <ArrowForwardIosIcon fontSize='small' sx={{ color: "white" }} />
                    </Fab>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ backgroundColor: "#78a1fa", opacity: "0.8", width: 56, height: 56, marginRight: "1rem" }}>
                            <LunchDiningOutlinedIcon sx={{ color: "#0051ff" }} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Popular Dishes" />
                    <Fab size="small" disabled aria-label="arro">
                        <ArrowForwardIosIcon fontSize='small' sx={{ color: "white" }} />
                    </Fab>
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar sx={{ backgroundColor: "#88dffc", opacity: "0.8", width: 56, height: 56, marginRight: "1rem" }}>
                            <RoomServiceOutlinedIcon sx={{ color: "#00bbfa" }} />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Menus" />
                    <Fab size="small" disabled aria-label="arro">
                        <ArrowForwardIosIcon fontSize='small' sx={{ color: "white" }} />
                    </Fab>
                </ListItem>
            </List>
        </Box >
    )
}

export default DashMenu;

