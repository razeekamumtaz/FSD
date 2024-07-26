import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'

const Posts = () => {
    var [user, setuser] = useState(
        [])
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            console.log(response.data)
            setuser(response.data)
        })
    
  return (
      <div>
         <TableContainer>
          <Table>
              <TableHead>
                  <TableRow>
                      <TableCell>id</TableCell>
                      <TableCell>title</TableCell>
                      
                  </TableRow>
              </TableHead>
              <TableBody>
                  {user.map((val, i) => {
                      return (
                          <TableRow >
                              <TableCell key={i}>{val.id}</TableCell>
                              <TableCell key={i}>{val.title}</TableCell>
                              
                          </TableRow>

                      )
                  })}



              </TableBody>
          </Table>
      </TableContainer>
    </div>
  )
}

export default Posts