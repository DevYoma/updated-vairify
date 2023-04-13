import React, { useState } from 'react'
import './Styles.css'
import { Box, Container, Grid, Typography, Button, Modal, Stack } from '@mui/material'
import Main from '../Assets/png/Main.png'
import { HomeData } from '../Data/DummyData.js'
import { motion } from "framer-motion";
import ReactPlayer from 'react-player';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: "10px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Home = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [showVideo, setShowVideo] = useState(false);

    const handleShowVideo = () => {
        setShowVideo(true);
    };

    const closeVideo = () => {
        setShowVideo(false);
    }



  const [SecOpen, setSecOpen] = React.useState(false);
  const handleSecOpen = () => {
    setOpen(false);
    setSecOpen(true);
    setThiOpen(false);
  };
  const handleSecClose = () => {
    setSecOpen(false);
    setThiOpen(false);
  };

  const [ThiOpen, setThiOpen] = React.useState(false);
  const handleThiOpen = () => {
    setSecOpen(false);
    setThiOpen(true);
  };
  const handleThiClose = () => {
    setSecOpen(false);
    setThiOpen(false);
  };


  return (
    <Box className="Header" >
      <Container>
        <Grid container spacing={4} sx={{ height: { xs: '80vh', md: '50vh' } }} >
          <Grid item xs={12} md={8} sx={{ display: 'flex', alignItems: { xs: "", sm: "center", md: 'center' } }} >
            <Box >
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                variants={{
                  hidden: { opacity: 0, x: -100 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <Box >
                  <Typography variant="h3" color="myColor" fontWeight={600} sx={{ mt: { xs: 4, md: 2 }, fontSize: { xs: '40px', md: '50px' } }} className="name">{HomeData.title} </Typography>
                  <Typography variant="h3" color="myColor" fontWeight={900} sx={{ mt: { xs: 0, md: 0 }, fontSize: { xs: '40px', md: '50px' } }} >{HomeData.subTitle} </Typography>
                  <Typography variant="h6" color="myColor" mt={3} sx={{ textIndent: '30px' }}>
                    {HomeData.desc}
                  </Typography>
                  <Button
                    onClick={handleOpen}
                    sx={{
                      mt: { xs: 2, md: 3 },
                      px: { xs: 4, md: 6 }, height: 50,
                      borderRadius: '30px'
                    }} style={{ color: 'white' }} >
                    Join Us
                  </Button>
                </Box>
              </motion.div>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box sx={{ width: "100%" }}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                variants={{
                  hidden: { opacity: 0, x: 100 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                <img src={Main} alt="" style={{ width: '20rem' }} className="profileImg" />
                <div className={`video-popup ${showVideo ? 'show' : ''}`} style={{ display: 'flex', flexDirection: 'column' }}>
                  <Button sx={{ my: '20px', color: '#ffffff', px: 4 }} onClick={closeVideo}> close </Button>
                  <ReactPlayer
                    url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                    controls={true}
                    width="1000px"
                    height="550px"
                  />
                </div>
              </motion.div>
              {/* First  */}
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description" >
                <Box sx={{ ...style, width: { xs: "80%", md: '400px' } }}>
                  <Typography variant="h5" color="#4D4B95" fontWeight={600} textAlign="center" my={4} >MemberShip Benifits</Typography>
                  <ul>
                    <li>fasdna amergioqe rgj qiv eir</li>
                    <li>fasdna amergioqe rgj qiv eir</li>
                    <li>fasdna amergioqe rgj qiv eir</li>
                    <li>fasdna amergioqe rgj qiv eir</li>
                    <li>fasdna amergioqe rgj qiv eir</li>
                    <li>fasdna amergioqe rgj qiv eir</li>
                    <li>fasdna amergioqe rgj qiv eir</li>
                    <li>fasdna amergioqe rgj qiv eir</li>
                  </ul>
                  {/* <select value={language} onChange={(e)=>{setLanguage(e.target.value)}}>
                    <option>English</option>
                    <option>Spanish</option>
                  </select> */}
                  <Button sx={{ mt: 4, width: "100%", color: "#ffffff", borderRadius: '30px' }} onClick={handleSecOpen}>Continoue</Button>
                </Box>
              </Modal>

              {/* Second  */}
              <Modal
                open={SecOpen}
                onClose={handleSecClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description" >
                <Box sx={{ ...style, width: { xs: "300px", md: '400px' } }}>
                  <Typography variant="h5" color="#4D4B95" fontWeight={600} textAlign="center" my={4} >Sign Up</Typography>
                  <Stack direction="column">
                    <label for="">Name</label>
                    <input type="text" placeholder='Name' className='input' /><br />
                    <label for="">Email</label>
                    <input type="email" placeholder='Email' className='input' /><br />
                    <label for="">Password</label>
                    <input type="password" placeholder='password' className='input' /><br />
                    <label for="">Confirm Password</label>
                    <input type="password" placeholder='password' className='input' /><br />
                  </Stack>
                  <Button sx={{ mt: 4, width: "100%", color: "#ffffff", borderRadius: '30px' }} onClick={handleSecOpen}>Sign Up</Button>
                  <Typography variant='body1' color='#000000' mt={2}>Already account <span style={{ cursor: 'pointer', fontWeight: "600" }} onClick={handleThiOpen}>Sign In</span></Typography>
                </Box>
              </Modal >

              {/* Third  */}
              <Modal
                open={ThiOpen}
                onClose={handleThiClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description" >
                <Box sx={{ ...style, width: { xs: "300px", md: '400px' } }}>
                  <Typography variant="h5" color="#4D4B95" fontWeight={600} textAlign="center" my={4} >Sign In</Typography>
                  <Stack direction="column">
                    <label for="">Email</label>
                    <input type="email" placeholder='Email' className='input' /><br />
                    <label for="">Password</label>
                    <input type="password" placeholder='password' className='input' /><br />
                  </Stack>
                  <Button sx={{ mt: 4, width: "100%", color: "#ffffff", borderRadius: '30px' }} >Sign In</Button>
                  <Typography variant='body1' color='#000000' mt={2}>I have not acount <span style={{ cursor: 'pointer', fontWeight: "600" }} onClick={handleSecOpen}>Sign Up</span></Typography>
                </Box>
              </Modal >
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box >
  )
}

export default Home




