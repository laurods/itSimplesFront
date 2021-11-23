import axios from 'axios';
const parseString = require('xml2js').parseString;

const processNF = async (dataNF) => {
  const nf = await dataNF.nfeProc.NFe.infNFe.ide.nNF;
  const cnpjEmitente = await dataNF.nfeProc.NFe.infNFe.emit.CNPJ;
  const cnpjDestinatario = await dataNF.nfeProc.NFe.infNFe.dest.CNPJ;
  let products = await dataNF.nfeProc.NFe.infNFe.det;
  console.log(nf);
  console.log(cnpjEmitente);
  console.log(cnpjDestinatario);
  console.log(products);
  };


module.exports = {
  processNF,
};