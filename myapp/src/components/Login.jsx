import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
      <div><br />
          <Typography variant='h3'>Login</Typography><br /><br/>

          <TextField label="username" variant="outlined" color="success"></TextField><br /><br /><br /><br />
          <TextField label="password" variant="outlined" color="success"></TextField><br /><br /><br /><br />
          <Button variant="text">Submit</Button>
    </div>
  )
}

export default Login