import React from 'react'
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';



const demo = [
    {
        id: 101,
        image: 'https://img.freepik.com/premium-photo/graphic-designer-digital-avatar-generative-ai_934475-9292.jpg',
        name: "Brad Pitt",
        value: 3,
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo eius nesciunt reprehenderit ducimus sit in aut minus, incidunt atque tempore laudantium dolorem commodi explicabo voluptatibus."
    }, {
        id: 102,
        image: 'https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png',
        name: "Pitbull",
        value: 5,
        description: " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo eius nesciunt reprehenderit ducimus sit in aut minus, incidunt atque tempore laudantium dolorem commodi explicabo voluptatibus."
    }, {
        id: 103,
        image: 'https://img.freepik.com/premium-photo/3d-avatar-cartoon-character_113255-95054.jpg',
        name: "Arnold",
        value: 3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla id, quo exercitationem dicta inventore voluptatum esse incidunt repellat earum nihil?  ",
    }, {
        id: 104,
        image: 'https://img.freepik.com/premium-photo/3d-avatar-cartoon-character_113255-93999.jpg',
        name: "Dwayne Johnson",
        value: 1,
        description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio eum corporis. Nam repellendus, dolorum placeat soluta voluptate molestiae! ",
    }
]

const CustomerFeedback = () => {
    return (
        <Box sx={{ padding: "1rem", maxHeight: "33rem", textAlign: "start", overflowY: "scroll" }}>
            <Typography variant='h6'>
                Customer's Feedback
            </Typography>
            {demo.map((data) => (
                <Box key={data?.id} sx={{ borderBottom: '0.1rem solid #3f3f40', marginTop: "1rem" }}>
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar src={data?.image} sx={{ marginRight: 2 }} />
                        <Typography variant='body1'>
                            {data?.name}
                        </Typography>
                    </Box>
                    <Box sx={{ display: "flex", marginTop: "1rem" }}>
                        <Rating
                            name="read-only"
                            value={data?.value}
                            readOnly
                            emptyIcon={<StarIcon fontSize="inherit" />}
                            sx={{
                                '& .MuiRating-iconEmpty': {
                                    color: '#ffffff',
                                },
                                '& .MuiRating-iconHover': {
                                    color: '#ff3d47',
                                },
                            }}
                        />
                    </Box>
                    <Box sx={{ display: "flex", justifyItems: "start", alignItems: "start", color: "#807e7e", marginTop: "0.5rem", marginBottom: "1rem" }}>
                        <Typography variant='body2' textAlign={"start"}>
                            {data?.description}
                        </Typography>
                    </Box>
                </Box>
            ))}
        </Box>
    )
}

export default CustomerFeedback
