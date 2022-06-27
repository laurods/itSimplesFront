import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ListItemAvatar } from '@mui/material';

export default function AccordionVentilacaoExaustao() {
    const items = [
       'VENTILADORES',
       'FILTRAGEM',
       'COIFAS E CAPTORES',
       'FILTROS',
       'CORTINA DE AR',
       'AMORTECEDORES DE VIBRAÇÃO',
       'SUPORTES',
       'DUTOS EM CHAPA',
       'DUTOS EM MPU',
       'OUTROS',
       'DIFUSÃO DE AR',
       'PAINEIS ELETRICOS',
       'REDES ELETRICAS',
    ]
  return (
    <div>
        {items.map((item) => {
               <Accordion>
               <AccordionSummary
                 expandIcon={<ExpandMoreIcon />}
                 aria-controls="panel1a-content"
                 id="panel1a-header"
               >
                 <Typography>{item}</Typography>
               </AccordionSummary>
               <AccordionDetails>
                 
               </AccordionDetails>
             </Accordion>
            
        })}
   
      
      
    </div>
  );
}
