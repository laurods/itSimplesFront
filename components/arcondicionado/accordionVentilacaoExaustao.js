import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ListItemAvatar } from '@mui/material';

export default function AccordionVentilacaoExaustao() {
    const items = [
       {name: 'VENTILADORES'},
       {name:'FILTRAGEM'},
       {name:'COIFAS E CAPTORES'},
       {name:'FILTROS'},
       {name:'CORTINA DE AR'},
       {name:'AMORTECEDORES DE VIBRAÇÃO'},
       {name:'SUPORTES'},
       {name:'DUTOS EM CHAPA'},
       {name:'DUTOS EM MPU'},
       {name:'OUTROS'},
       {name:'DIFUSÃO DE AR'},
       {name:'PAINEIS ELETRICOS'},
       {name:'REDES ELETRICAS'},
    ]
  return (
    <div>
      {
        items.map(
            item => {
                <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{item.name}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  
                </AccordionDetails>
              </Accordion>
            }
        )
      }
   
      
      
    </div>
  );
}
