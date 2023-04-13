import React,{useState} from 'react'
import { Box, Container, Grid, Typography, Button, Card, ListItem, List } from '@mui/material'
import "./Styles.css"
import { aboutData } from '../Data/DummyData'
import { motion } from 'framer-motion'
import ReactPlayer from 'react-player';


const About = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleShowVideo = () => {
    setShowVideo(true);
  };

  const closeVideo = () => {
    setShowVideo(false);
  }
  return (
    <Box sx={{ mt: { xs: "34rem", md: 10 } }} className="bgCirule" >
      <Container>
        <Box className="sectionTitle">
          <Typography variant="h4" className='title name' fontWeight={600} >Welcome To a New World</Typography>
        </Box>
        <Grid container spacing={10} sx={{ mt: { xs: 0, md: 2 } }}>
          <Grid item xs={12} md={8} display='flex' alignItems='center' >
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
              <Typography variant="h6" color="initial" sx={{ textIndent: '30px' }}>{aboutData.desc}</Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={4} display='flex' alignItems='center' justifyContent="center">
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
              <img src={aboutData.img} alt="" style={{ width: "20rem" }} />
              <Button sx={{ color: "#ffffff", width: "250px", mt: 4, borderRadius: "30px", background: "#4D4B95", "&:hover": { backgroundColor: "#4D4B95" } }} onClick={handleShowVideo}>View Video</Button>
              <div className={`video-popup ${showVideo ? 'show' : ''}`} style={{ display: 'flex', flexDirection: 'column' }}>
                <Button sx={{ my: '20px', color: '#ffffff', px: 4 }} onClick={closeVideo}> close </Button>
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  controls={true}
                  width="1000px"
                  height="550px"
                />
              </div>
            </motion.div >
          </Grid>
        </Grid>
      </Container >
    </Box >
  )
}

export default About