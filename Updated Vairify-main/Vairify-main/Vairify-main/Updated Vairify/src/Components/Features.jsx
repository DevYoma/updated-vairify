import { Box, Container, Typography, Grid, Stack, Button } from '@mui/material'
import React, { useState } from 'react'
import './Styles.css'
import { FeatureData } from "../Data/DummyData"
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion'


const Features = () => {
    const [showVideo, setShowVideo] = useState(false);

    const handleShowVideo = () => {
        setShowVideo(true);
    };

    const closeVideo = () => {
        setShowVideo(false);
    }


    return (
        <Box sx={{ mt: { xs: 8, md: 4 } }}>
            <Container>
                <Box className="sectionTitle">
                    <Typography variant="h4" fontWeight={600} className='name' >Features</Typography>
                </Box>
                <Box sx={{ mt: { xs: 8, md: 8 } }}>
                    {
                        FeatureData.map((data, key) => {
                            return key % 2 === 0 ?
                                <Grid container spacing={4} mt={8}>
                                    <Grid item xs={12} md={6}  >
                                        <motion.div
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, amount: 0.5 }}
                                            transition={{ duration: 0.6 }}
                                            variants={{
                                                hidden: { opacity: 0, x: -100 },
                                                visible: { opacity: 1, x: 0 }
                                            }}>
                                            <Stack direction='column'>
                                                <Box display='flex' alignItems='center'>
                                                    <Typography variant="body1" color="#ffffff" className='number' sx={{ fontSize: '16px', background: `${data.titlecolor}` }}>{data.number}</Typography>
                                                    <Box ml={4}>
                                                        <Typography variant="body1" sx={{ fontSize: '20px', fontWeight: 600, color: `${data.titlecolor}` }}>{data.title}</Typography>
                                                    </Box>
                                                </Box>
                                                <Typography variant="h6" color="initial" mt={4} sx={{ textIndent: '30px' }}>{data.desc}</Typography>
                                                <Button sx={{ color: "#ffffff", width: "250px", mt: 4, borderRadius: "30px", background: `${data.titlecolor}`, "&:hover": { backgroundColor: `${data.titlecolor}` } }} onClick={handleShowVideo}>View Video</Button>
                                                <div className={`video-popup ${showVideo ? 'show' : ''}`} style={{ display: 'flex', flexDirection: 'column' }}>
                                                    <Button sx={{ my: '20px', color: '#ffffff', px: 4 }} onClick={closeVideo}> close </Button>
                                                    <ReactPlayer
                                                        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                                        controls={true}
                                                        width="1000px"
                                                        height="550px"
                                                    />
                                                </div>
                                            </Stack>
                                        </motion.div>
                                    </Grid>
                                    <Grid item xs={12} md={6} display="flex" alignItems='center' justifyContent='center'>
                                        <motion.div
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, amount: 0.5 }}
                                            transition={{ duration: 0.6 }}
                                            variants={{
                                                hidden: { opacity: 0, x: 100 },
                                                visible: { opacity: 1, x: 0 }
                                            }}>
                                            <img src={data.img} alt="" width={300} />
                                        </motion.div>
                                    </Grid>
                                </Grid>
                                :
                                <Grid container spacing={4} mt={8} sx={{ flexDirection: { xs: 'column-reverse', md: 'row' } }}>
                                    <Grid item xs={12} md={6} display="flex" alignItems='center' justifyContent='center'>
                                        <motion.div
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, amount: 0.5 }}
                                            transition={{ duration: 0.6 }}
                                            variants={{
                                                hidden: { opacity: 0, x: -100 },
                                                visible: { opacity: 1, x: 0 }
                                            }}>
                                            <img src={data.img} alt="" width={300} />
                                        </motion.div>
                                    </Grid>
                                    <Grid item xs={12} md={6}  >
                                        <motion.div
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, amount: 0.5 }}
                                            transition={{ duration: 0.6 }}
                                            variants={{
                                                hidden: { opacity: 0, x: 100 },
                                                visible: { opacity: 1, x: 0 }
                                            }}>
                                            <Stack direction='column'>
                                                <Box display='flex' alignItems='center'>
                                                    <Typography variant="body1" color="#ffffff" className='number' sx={{ fontSize: '16px', background: `${data.titlecolor}` }}>{data.number}</Typography>
                                                    <Box ml={4}>
                                                        <Typography variant="body1" sx={{ fontSize: '20px', fontWeight: 600, color: `${data.titlecolor}` }}>{data.title}</Typography>
                                                    </Box>
                                                </Box>
                                                <Typography variant="h6" color="initial" mt={4} sx={{ textIndent: '30px' }}>{data.desc}</Typography>
                                                <Typography variant="h6" color="initial" mt={4} sx={{ textIndent: '30px' }}>{data.desc2}</Typography>
                                                <Button sx={{ color: "#ffffff", width: "250px", mt: 4, borderRadius: "30px", background: `${data.titlecolor}`, "&:hover": { backgroundColor: `${data.titlecolor}` } }}>View Video</Button>
                                                <div className={`video-popup ${showVideo ? 'show' : ''}`} style={{ display: 'flex', flexDirection: 'column' }}>
                                                    <Button sx={{ my: '20px', color: '#ffffff', px: 4 }} onClick={closeVideo}> close </Button>
                                                    <ReactPlayer
                                                        url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                                        controls={true}
                                                        width="1000px"
                                                        height="550px"
                                                    />
                                                </div>
                                            </Stack>
                                        </motion.div>
                                    </Grid>
                                </Grid>
                        })}
                </Box>
            </Container>
        </Box>

    )
}

export default Features