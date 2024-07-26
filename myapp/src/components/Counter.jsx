import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {

    var [count, setcount] = useState(20)
    

    const add = () => {
        setcount(count+1)
        
    }
    const subtract= () => {
        setcount(count-1)

    }
  return (
      <div>
          <Typography variant='h3'>counter:{count}</Typography><br />
          
          <Button variant="contained" onClick={add}>Add</Button>&nbsp;&nbsp;
          <Button variant="contained" onClick={subtract}>subtract</Button>
    </div>
  )
}

export default Counter