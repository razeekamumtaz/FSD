import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
      <div>
          <AppBar>
              <Toolbar>
          
          <Typography variant='h4' sx={{ flexGrow: 1 }}>Myapp</Typography>&nbsp;&nbsp;
                  <Link to='/sing'><Button variant='contained' color="inherit" style={{ color: "black" }}>Singup</Button>
                  </Link>&nbsp;&nbsp;
                  <Link to='/login'><Button variant='contained' color="inherit" style={{ color: "black" }}>Login</Button>
                  </Link>&nbsp;&nbsp;
                  <Link to='/s'><Button variant='contained' color="inherit" style={{ color: "black" }}>State</Button>
          </Link>&nbsp;&nbsp;
          <Link to='/count'><Button variant='contained' color="inherit" style={{ color: "black" }}>Count</Button>
          </Link>&nbsp;&nbsp;
        
          <Link to='/greet'><Button variant='contained' color="inherit" style={{ color: "black" }}>Greet</Button>
          </Link>&nbsp;&nbsp;
          <Link to='/map'><Button variant='contained' color="inherit" style={{ color: "black" }}>Table</Button>
          </Link>&nbsp;&nbsp;
          <Link to='/api'><Button variant='contained' color="inherit" style={{ color: "black" }}>API</Button>
          </Link>&nbsp;&nbsp;
          <Link to='/posts'><Button variant='contained' color="inherit" style={{ color: "black" }}>post</Button>
          </Link>&nbsp;&nbsp;
          <Link to='/poke'><Button variant='contained' color="inherit" style={{ color: "black" }}>poke</Button>
          </Link>
          
              </Toolbar>
          </AppBar>
          <br />

    </div>
  )
}

export default Navbar