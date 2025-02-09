import React, { useEffect, useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { Grid } from '@mui/material';


const Poke = () => {
    var [pokemon, setpokemon] = useState([])
   
    useEffect(() => {
        axios.get("https://dummyapi.online/api/pokemon")
        .then((response) => {
            console.log(response)
            setpokemon(response.data)
                
            })

         },[])
  return (
      <div>
          <Grid container spacing={5}>
              {pokemon.map((val, i) => {
                  return (
              <Grid item xs={10} sm={5} md={3}>
                  
              
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                  sx={{ height: 140 }}
                                  image={val.image_url}
                //   title={val.pokemon}
              />
              <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                      
                      {val.pokemon}                
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                                      type :{val.type}<br/>
                                    Abilities:  {val.abilities}
                  </Typography>
              </CardContent>
              <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
              </CardActions>
                  </Card>
                      </Grid>

                      
                  )
              })}



          </Grid>
          

          
    </div>
  )
}

export default Poke