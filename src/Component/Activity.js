import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import ApexBarGraph from './ApexGraph/ApexBarGraph'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import DashMenu from './DashMenu';

const Activity = () => {
    return (
        <Grid container gap={3} >
            <Grid item xs={12} sm={12} md={12} lg={7} sx={{ backgroundColor: "#202027" }} borderRadius={2} >
                <Box display={"flex"} justifyContent={"space-between"} alignItems={"center"} paddingX={2} paddingTop={2}>
                    <Typography variant="h6">Activity</Typography>
                    <Button size="small" variant="contained" endIcon={<ArrowDropDownIcon />} sx={{ backgroundColor: "#2f302f" }}>
                        Weekly
                    </Button>
                </Box>
                <ApexBarGraph />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={4.7} sx={{ backgroundColor: "#202027" }} borderRadius={2} >
                <DashMenu />
            </Grid>
        </Grid>
    )
}

export default Activity
