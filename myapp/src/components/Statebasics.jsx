import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    var [fname, setfname] = useState("")
    var [val, setval] = useState()
    

    const handleinput = (e) => {
        setfname(e.target.value)
        console.log(fname)
    }
    const submithandle= () => {
        setval(fname)
        
    }

    
  return (
      <div><br/>
          <Typography variant='h5'>WELCOME {val}</Typography><br/>
          <TextField variant="outlined" onChange={handleinput} /><br /><br/>
          <Button variant="outlined" onClick={submithandle}>submit</Button>
    </div>
  )
}

export default Statebasics