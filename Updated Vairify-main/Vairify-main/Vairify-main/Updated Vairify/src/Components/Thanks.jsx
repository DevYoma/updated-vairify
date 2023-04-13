import React from 'react'
import {
    Container, Typography, Box
} from '@mui/material';
import './Styles.css'
import Home from '../Assets/png/Home.png'


const Thanks = () => {
    return (
      <Box my={4} mx={1}>
        <Container className="thanks">
          <Typography variant="h6" color="#fff" sx={{ p: { xs: 2, md: 6 } }}>
            <Typography variant="h4" mb={4} color="#fff" fontWeight={600}>
              Special Thank You and Message
            </Typography>
            We extend special thanks to the 24 providers and 11
            clients/hobbyists who shared their feedback and issues with us over
            the last three years. Email us and reference 'Super Founder' to
            claim your lifetime preregistered account. Although this is not
            enough, it's a start. To all reading this message, clients,
            providers, and businesses.
          </Typography>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography variant="h4" color="#fff" fontWeight={600} mb={4}>
              Welome Home
            </Typography>
            <img src={Home} alt="" width={300} mb={4} />
          </Box>
        </Container>
      </Box>
    );
}

export default Thanks