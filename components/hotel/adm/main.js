import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import TextField from '@mui/material/TextField';
import CadPeople from './cadPeople';
import CadTenant from './cadTenant';
import CadVinculo from './cadVinculo';

export default function Main() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
           <TextField
                margin="normal"
                disabled
                value='Cadastro Pessoa'
                fullWidth
                variant="outlined"
            />
        </AccordionSummary>
        <AccordionDetails>
            <CadPeople />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <TextField
                margin="normal"
                disabled
                value='Cadastro Empresa'
                fullWidth
                variant="outlined"
            />
        </AccordionSummary>
        <AccordionDetails>
            <CadTenant />
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
         <TextField
                margin="normal"
                disabled
                value='Vincular Pessoa/Empresa'
                fullWidth
                variant="outlined"
            />
        </AccordionSummary>
        <AccordionDetails>
            <CadVinculo />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
