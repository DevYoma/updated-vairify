import React from 'react'
import "./Styles.css"
import { Container, Box, Grid, Typography, Stack, Button } from '@mui/material'
import { motion } from 'framer-motion'

const ContactUS = () => {
  return (
    <Box sx={{ mt: { xs: 10, md: 10 } }} className="bgRightCirule">
      <Container>
        <Box className="sectionTitle">
          <Typography variant="h4" className='name' fontWeight={600}>Contact Me</Typography>
        </Box>
        <Grid container spacing={4} mt={4}>
          <Grid item xs={12}>
            <Box textAlign='center'>
              <Typography variant="h4" fontWeight={600}>Send me an email</Typography>
              <Typography variant="body1" >I'm very responsive to messages</Typography>
            </Box>
            <Stack direction="column" spacing={2} mt={4}>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <input type="text" placeholder='Name' className='input' width={100} style={{width:"100%"}}/>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.6 }}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <input type="email" placeholder='Email' className='input' width={100} style={{width:"100%"}}/>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4 }}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <input type="text" placeholder='Subject' className='input' style={{width:"100%"}} />
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.2 }}
                variants={{
                  hidden: { opacity: 0, y: 100 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <textarea placeholder='Message' cols="30" rows="10" className='textInput' width={100} style={{width:"100%"}}/>
              </motion.div>
              <Button style={{ borderRadius: '20px', height: "40px", color: '#ffffff' }}>Send me</Button>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default ContactUS