const processProductsService = require('./processProducts');
const parseString = require('xml2js').parseString;
const pIcmsRS = 18;

const processNF = async (dataNF) => {  
  const nf = await dataNF.nfeProc.NFe.infNFe.ide.nNF;
  const cnpjEmitente = await dataNF.nfeProc.NFe.infNFe.emit.CNPJ;
  const cnpjDestinatario = await dataNF.nfeProc.NFe.infNFe.dest.CNPJ;
  let products = await dataNF.nfeProc.NFe.infNFe.det;

  const allProducts = products.map((product, indice) => {
    return {                    
        ncm: product.prod.NCM,
        cest: product.prod.CEST,
        cfop: product.prod.CFOP, 
        cean: product.prod.cEAN, //Codigo de barras da caixa
        ceantrib: product.prod.cEANTrib, // codigo de barras do produto que está dentro da caixa
        name: product.prod.xProd, // nomde do produto
        quant: product.prod.qCom, // quantidade do produto
        unidade: product.prod.uCom, // unidade de medida (cx, un, kg)            
        quantidade: parseFloat(product.prod.qCom).toFixed(2),
        total: (parseFloat(product.prod.vProd).toFixed(2)),
    }
   });
   

// const sitTrib = products.map((item) => { // Definindo a Situação Tributária dos produtos
//   let code = 999;
//   if(item.imposto.ICMS.ICMS00) return {code:00};
//   if(item.imposto.ICMS.ICMS10) return {code:10};
//   if(item.imposto.ICMS.ICMS20) return {code:20};
//   if(item.imposto.ICMS.ICMS30) return {code:30};
//   if(item.imposto.ICMS.ICMS40) return {code:40};
//   if(item.imposto.ICMS.ICMS41) return {code:41};
//   if(item.imposto.ICMS.ICMS50) return {code:50};
//   if(item.imposto.ICMS.ICMS51) return {code:51};
//   if(item.imposto.ICMS.ICMS60) return {code:60};
//   if(item.imposto.ICMS.ICMS70) return {code:70};
//   if(item.imposto.ICMS.ICMS90) return {code:90};
//   return code;
// });

const allIcms = products.map((item) => { // Padronizando os dados dos valores de ICMS
    if(!item.imposto.ICMS.ICMS10){ 
      const tributos = {
          orig: '0',
          CST: '0',
          modBC: '0',
          vBC: '0',
          pICMS: '0',
          vICMS: '0',
          modBCST: '0',
          pMVAST: '0',
          vBCST: '0',
          pICMSST: '0',
          vICMSST: '0',
      }
      return tributos;
    }
    return item.imposto.ICMS.ICMS10;
});

 const allIPI = products.map((item) => {
    if(!item.imposto.IPI.IPITrib){ // Padronizando os dados dos valores de IPI
        const tributos = {
            CST: '0',
            vBC: '0',
            pIPI: '0',
            vIPI: '0',
        }
        return tributos;
      }
      return item.imposto.IPI.IPITrib;
 });

 const allPIS = products.map((item) => {
    if(!item.imposto.PIS.PISAliq){ // Padronizando os dados dos valores de PIS
        const tributos = {
            CST: '0',
            vBC: '0',
            pPIS: '0',
            vPIS: '0',
        }
        return tributos;
      }
      return item.imposto.PIS.PISAliq;
 });

 const allCOFINS = products.map((item) => {
    if(!item.imposto.COFINS.COFINSAliq){ // Padronizando os dados dos valores de COFINS
        const tributos = {
            CST: '0',
            vBC: '0',
            pCOFINS: '0',
            vCOFINS: '0',
        }
        return tributos;
      }
      return item.imposto.COFINS.COFINSAliq; 
 });

  const calculateTax = products.map((item, index) => {
        return {
        nf,
        cnpjEmitente,    
        cnpjDestinatario,
        //sitTrib: sitTrib[index].code,
        cfop: allProducts[index].cfop,
        cst: allIcms[index].CST,
        ncm: allProducts[index].ncm,
        cest: allProducts[index].cest,
        cean: allProducts[index].cean, //Codigo de barras da caixa
        name: allProducts[index].name,
        quant: parseFloat(allProducts[index].quant).toFixed(2),
        total: parseFloat(allProducts[index].total).toFixed(2),
        icms: allIcms[index].vICMS,
        ipi: allIPI[index].vIPI,
        pis: allPIS[index].vPIS,
        cofins: allCOFINS[index].vCOFINS,
        pDifICMS: parseInt(pIcmsRS - (allIcms[index].pICMS)), // percentual diferença ICMS (RS - 18% BASE)
        vDifICMS: ((parseInt(pIcmsRS - (allIcms[index].pICMS))/100) * parseFloat(allProducts[index].total)).toFixed(2),  // valor diferença ICMS
        vICMSST: allIcms[index].vICMSST, //valor icms sustituição tributária
        //..............valor total dos produtos............+...valor do IPI ..................+..........................diferençao de icms interestadual ..............................+............ sustituição tributária
        custoTotal: ((parseFloat(allProducts[index].total)) + (parseFloat(allIPI[index].vIPI)) + (parseInt(pIcmsRS - (allIcms[index].pICMS))/100) * parseFloat(allProducts[index].total) + (parseFloat(allIcms[index].vICMSST))).toFixed(2),
        custoUnitario: (((parseFloat(allProducts[index].total)) + (parseFloat(allIPI[index].vIPI)) + (parseInt(pIcmsRS - (allIcms[index].pICMS))/100) * parseFloat(allProducts[index].total) + (parseFloat(allIcms[index].vICMSST))) / parseFloat(allProducts[index].quant)).toFixed(2),
      }

  })             
  
  //return calculateTax;
  console.log(calculateTax)
  processProductsService.processProducts(calculateTax);
}

module.exports = {
  processNF,
};