import React, { useState } from 'react'
import { Box, Container, Button, Typography, Divider } from '@mui/material'
import './Styles.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { HashLink as Link } from 'react-router-hash-link'
import { BrowserRouter } from 'react-router-dom';
import logo from '../Assets/png/Logo.png'
import '../Styles/Navbar.scss';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  }

  return (
    <Box sx={{ height: "80px" }} display="flex" alignItems="center" >
      <Container >

        {/* Laptop Navbar */}
        <Box className='PC'>
          <Box>
            <img src={logo} alt="" width={140} />
          </Box>
          <BrowserRouter >
            <Box display='flex' alignContent='center'>
              <ul className='LaptopuList'>
                <li style={{ fontSize: "0.8rem" }}><Link to="./what_next" style={{ color: "#000" }}>Whats Next</Link></li>
                <li style={{ fontSize: "0.8rem" }}><Link to="#experience" style={{ color: "#000" }}>Varify Blog</Link></li>
                <li style={{ fontSize: "0.8rem" }}><Link to="#service" style={{ color: "#000" }}>My Revenue Portal</Link></li>
                <li style={{ fontSize: "0.8rem" }}><Link to="#projects" style={{ color: "#000" }}>Provider Representaion</Link></li>
              </ul>
              <Link target='_blank'  rel="noreferrer" to='https://affiliate.vairify.date/login'>
                <Button color='myColor' sx={{ ml: 4, px: 3, borderRadius: '30px', fontSize: "1rem" }}>Login</Button>
              </Link>

              <Link target='_blank'  rel="noreferrer" to='https://affiliate.vairify.date/register'>
                <Button color='myColor' sx={{ ml: 4, px: 3, borderRadius: '30px', fontSize: "1rem" }}>Register</Button>
              </Link>
            </Box>
          </BrowserRouter>
        </Box>
        <Divider sx={{ mt: 2 }} color="#9698A9" className='divider' />

        {/* Mobile Navbar */}
        <Box className='mobile'>
          <Box>
            <img src={logo} alt="" width={140} />
          </Box>
          <Box>
            {
              nav ?
                <CloseIcon style={{ color: "#000" }} onClick={handleClick} /> :
                <MenuIcon style={{ color: "#000" }} onClick={handleClick} />
            }
          </Box>
          <BrowserRouter >
            <Box className={nav ? 'mobileNav' : 'd'} >
              <ul className='uList'>
                <li style={{ fontSize: "0.8rem" }}><Link to="#what_next" style={{ color: "#fff" }}>What's Next</Link></li>
                <li style={{ fontSize: "0.8rem" }}><Link to="#experience" style={{ color: "#fff" }}>Varify Blog</Link></li>
                <li style={{ fontSize: "0.8rem" }}><Link to="#service" style={{ color: "#fff" }}>My Revenue Portal</Link></li>
                <li style={{ fontSize: "0.8rem" }}><Link to="#projects" style={{ color: "#fff" }}>Provider Representaion</Link></li>
              </ul>
              {/* <Link to='#ContactMe'>
                <Button color='myColor' sx={{ mr: 2 }} onClick={handleClick}>Contect Me</Button>
              </Link> */}

              <Link target='_blank'  rel="noreferrer" to='https://affiliate.vairify.date/login'>
                <Button color='myColor' sx={{  mr: 2 }}>Login</Button>
              </Link>

              <Link target='_blank' to='https://affiliate.vairify.date/register'>
                <Button color='myColor'  rel="noreferrer" sx={{  mr: 2 }}>Register</Button>
              </Link>
            </Box>
          </BrowserRouter>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar