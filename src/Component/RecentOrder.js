import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Avatar, Box, Grid, Stack, Typography } from '@mui/material';
import CustomerFeedback from './CustomerFeedback';



const avatarImages = {
    'Wade Warren': 'https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg',
    'Jane Cooper': 'https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png',
    'Gay Hawkins': 'https://img.freepik.com/premium-photo/3d-avatar-cartoon-character_113255-95054.jpg',
    'Kirstin Watson': 'https://img.freepik.com/premium-photo/3d-avatar-cartoon-character_113255-93999.jpg',
    'Cody Fisher': 'https://img.freepik.com/premium-photo/3d-avatar-cartoon-character_113255-92375.jpg',
};

function createData(name, orderNo, price, status, protein) {
    return { name, orderNo, price, status, protein };
}

const rows = [
    createData('Wade Warren', 1593535, "$126", "deliver"),
    createData('Jane Cooper', 2373423, "$116", "deliver"),
    createData('Gay Hawkins', 2621246, "$196", "cancelled"),
    createData('Cody Fisher', 3564288, "$106", "deliver"),
    createData('Kirstin Watson', 3050987, "$96", "cancelled"),
];

const RecentOrder = () => {
    return (
        <Grid container gap={3}>
            <Grid item xs={12} sm={12} md={12} lg={7} sx={{ backgroundColor: "#202027", borderRadius: "0.5rem" }} borderRadius={2}>
                <Stack direction={"row"} paddingLeft={2} paddingTop={2}>
                    <Typography variant="h6">Recent Orders</Typography>
                </Stack>
                <TableContainer sx={{ padding: "1rem" }}>
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow sx={{
                                '&:last-child td, &:last-child th': { border: 0 },
                                borderBottom: '0.1rem solid #3f3f40',
                            }}>
                                < TableCell sx={{ color: 'white' }} >Customer</TableCell>
                                <TableCell sx={{ color: 'white' }} align="center">Order&nbsp;No.</TableCell>
                                <TableCell sx={{ color: 'white' }} align="center">Amount</TableCell>
                                <TableCell sx={{ color: 'white' }} align="center">Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{
                                        '&:last-child td, &:last-child th': { border: 0 },
                                        borderBottom: '0.1rem solid #3f3f40',
                                    }}
                                >
                                    <TableCell component="th" sx={{ color: 'white', borderBottom: 'none' }}>
                                        <Box sx={{ display: "flex", alignItems: "center" }}>
                                            <Avatar src={avatarImages[row.name]} sx={{ marginRight: 2 }} />
                                            {row.name}
                                        </Box>
                                    </TableCell>
                                    <TableCell sx={{ color: 'white', borderBottom: 'none' }} align="center">{row.orderNo}</TableCell>
                                    <TableCell sx={{ color: 'white', borderBottom: 'none' }} align="center">{row.price}</TableCell>
                                    <TableCell sx={{ color: 'white', borderBottom: 'none' }} align="center">
                                        {row.status === "deliver" ?
                                            <Box sx={{ backgroundColor: "#1d6552", opacity: "0.8", borderRadius: "1rem", width: "6rem", marginLeft: "2rem" }}>
                                                <Typography sx={{ color: "#00fc08" }}>
                                                    Success
                                                </Typography>
                                            </Box>
                                            :
                                            <Box sx={{ backgroundColor: "#61393c", opacity: "0.8", borderRadius: "1rem", width: "6rem", marginLeft: "2rem" }}>
                                                <Typography sx={{ color: "#fc1500" }}>
                                                    Danger
                                                </Typography>
                                            </Box>
                                        }
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid >
            <Grid item xs={12} sm={12} md={12} lg={4.7} sx={{ backgroundColor: "#202027" }} borderRadius={2}>
                <CustomerFeedback />
            </Grid>
        </Grid >
    );
}


export default RecentOrder;



