import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

const Mapping = () => {
    var [name, setname] = useState(
        [
            { "sname": "Anu", "age": 10 },
            { "sname": "Minu", "age": 15 },
            { "sname": "Salu", "age": 13 },
            { "sname": "Rinu", "age": 10 }
           
        ]
    )
  return (
      <div>
          <TableContainer>
              <Table>
                  <TableHead>
                      <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell>Age</TableCell>
                      </TableRow>
                  </TableHead>
                  <TableBody>
                      {name.map((val,i) => {
                          return (
                              
                          
                      <TableRow>
                                  <TableCell key={i}>{ val.sname}</TableCell>
                                  <TableCell>{ val.age}</TableCell>
                              </TableRow>
                          )
                      })}
                  </TableBody>
              </Table>
          </TableContainer>
    </div>
  )
}

export default Mapping