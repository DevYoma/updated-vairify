import { Stack } from '@mui/system'
import React from 'react'
import {
  Navbar, Home, About, Benifits, ContactUs, Footer, Feature, Thanks
} from '../../Components'
import Container from '@mui/material/Container'
import '../../Components/Styles.css'

const index = () => {
  return (
      <Stack direction='column' sx={{ gap: { xs: 0, md: '150px' }}}>
        <Navbar />
        <Home />
        <About />
        <Benifits />
        <Thanks/>
        <Feature />
        <ContactUs />
        <Footer />
      </Stack>
  )
}

export default index