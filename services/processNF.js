import axios from 'axios';

const parseString = require('xml2js').parseString;
/* Inicio processXML*/  
const processNF = async (dataNF) => {
  const nf = await dataNF.nfeProc.NFe.infNFe.ide.nNF;
  console.log(nf);
  };

/* Fim processXML*/

module.exports = {
  processNF,
};