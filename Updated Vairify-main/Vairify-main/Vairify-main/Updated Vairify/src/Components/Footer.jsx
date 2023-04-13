import React from 'react'
import {Divider,Container,Box, Typography} from '@mui/material'

const Footer = () => {
  return (
    <Box sx={{mt:{xs:4,md:0}}} color="#ffffff">
        <Container>
            <Divider
              variant="fullWidth"
              orientation="horizontal"
              color="myColor"
            />
            <Box my={2} textAlign="center">
                <Typography variant="body2" color="#000000">@Year 2023</Typography>
            </Box>
        </Container>
    </Box>
  )
}

export default Footer