import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Greet = () => {
    var [string, setstring] = useState("")
    
    
    const react = () => {
        setstring(" REACT")

    }
    const angular = () => {
        setstring(" ANGULAR")

    }
    const view = () => {
        setstring(" VIEW")
        

    }
    // useEffect(()=>{},[])
    useEffect (() => {
        view()
    },[])

  return (
      <div>
          <Typography variant='h3'>WELCOME TO  {string}</Typography><br />

          <Button variant="contained" onClick={react}>react</Button>&nbsp;&nbsp;
          <Button variant="contained" onClick={angular}>angular</Button>&nbsp;&nbsp;
          <Button variant="contained" onClick={view}>view</Button>
    </div>
  )
}

export default Greet