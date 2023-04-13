import React from 'react'

const SignIn = () => {
  return (
    <div>
        <Modal
                onClose={handleSecClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description" >
                <Box sx={{ ...style, width: 400 }}>
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
                  <Button sx={{ mt: 4, width: "100%", color: "#ffffff", borderRadius: '30px' }} >Sign Up</Button>
                  <Typography variant='body1' color='#000000' mt={2}>Already account <span style={{ cursor: 'pointer', fontWeight: "600" }} >Sign In</span></Typography>
                </Box>
              </Modal >
    </div>
  )
}

export default SignIn