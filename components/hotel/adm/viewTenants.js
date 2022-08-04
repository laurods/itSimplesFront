import React, { useContext, useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function ViewTenants({dataTenants, setDataFeedback, setDataSuggest}) {
  const FeedBack = [];     
  const handleTenant = ({cnpj, name, quizzes, suggests }) => {
    quizzes.map((quizz)=>{
    quizz.map(({question, answer})=>{
      FeedBack.push({
        question: question,
        answer:answer            
      })      
      })
    })
    setDataFeedback(FeedBack)
    setDataSuggest(suggests)
  }
  return (
    <TableContainer component={Paper} sx={{ mt: 2 }}>            
        <Table sx={{ minWidth: 200 }} aria-label="simple table">
            <TableHead>                    
            </TableHead>
            <TableBody sx={{ fontSize: 45, fontWeight: 'medium' }}>
            {dataTenants.map((row, index) => (
                <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                onClick={() => handleTenant(row)}                                       
                >
                    <TableCell 
                      component="th" 
                      scope="row">{row.name}                      
                    </TableCell>
                </TableRow>
                  ))}
            </TableBody>
        </Table>
    </TableContainer>       
       
  );
}
