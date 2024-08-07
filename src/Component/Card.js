import { Avatar, Box, Grid, ListItemAvatar, Typography } from '@mui/material'
import React from 'react'
import LocalMallIcon from '@mui/icons-material/LocalMall';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ApexChart from './ApexGraph/ApexChart';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';


const demo = [
    {
        image: <ShoppingBasketIcon />,
        title: "Total Order",
        value: "75",
        hike: "3%"
    }, {
        image: <LocalMallIcon />,
        title: "Total Delivered",
        value: "70",
        hike: "-2%"
    }, {
        image: <RemoveShoppingCartIcon />,
        title: "Total Cancelled",
        value: "05",
        hike: "5%"
    }, {
        image: <MonetizationOnIcon />,
        title: "Total Revenue",
        value: "$12K",
        hike: "-1%"
    }
]

const Card = () => {
    return (
        <Grid container gap={3} >
            <Grid gap={1} item container xs={12} sm={12} md={12} lg={7}  >
                {demo.map((data) => (
                    <Grid item xs={12} sm={5.9} md={2.92} lg={2.89} key={data?.value} sx={{ backgroundColor: "#202027" }} padding={2} borderRadius={2}>
                        <Box display="flex" alignItems="start" >
                            <ListItemAvatar >
                                <Avatar sx={{ backgroundColor: "#ed915f", opacity: "0.8", width: 56, height: 56, marginRight: "1rem" }}>
                                    {/* <CrisisAlertOutlinedIcon sx={{ color: "#fc5a03" }} /> */}
                                    {data?.image}
                                </Avatar>
                            </ListItemAvatar>
                        </Box>
                        <Box display="flex" alignItems="start" gap={1} marginTop={"0.5rem"}>
                            <Typography variant="body2">{data?.title}</Typography>
                        </Box>

                        <Box display="flex" justifyContent="space-between" marginTop={2}>
                            <Typography variant="h4">{data?.value}</Typography>
                            <Box display="flex" justifyContent={"center"} alignItems={"center"}>
                                <Typography variant="body1" color={data.hike.includes('-') ? 'red' : '#20e845'}>
                                    {data?.hike.includes('-') ? <ArrowDropDownIcon fontSize='large' /> : <ArrowDropUpIcon fontSize='large' />}
                                </Typography>
                                <Typography variant="body1" color={data.hike.includes('-') ? 'red' : '#20e845'}>
                                    {data?.hike}
                                </Typography>
                            </Box>

                        </Box>
                    </Grid>
                ))}
            </Grid >
            <Grid item xs={12} sm={12} md={12} lg={4.7} sx={{ backgroundColor: "#202027" }} borderRadius={2} >
                <Grid container>
                    <Grid item xs={12} sm={6} md={7} lg={7} >
                        <Grid textAlign={"start"} padding={2}>
                            <Typography variant="body1">Net Profit</Typography>
                            <Typography variant="h3" mt={2}>$6795.25</Typography>
                            <Box textAlign={"start"} sx={{ display: "flex", justifyContent: "start", alignItems: "center" }} >
                                <Typography variant="body1" color={'#20e845'}>
                                    <ArrowDropUpIcon fontSize='large' />
                                </Typography>
                                <Typography variant="body1" color={'#20e845'}>
                                    3%
                                </Typography>
                            </Box>

                        </Grid>

                    </Grid >
                    <Grid item xs={12} sm={6} md={5} lg={5}>
                        <ApexChart />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>


    )
}

export default Card
