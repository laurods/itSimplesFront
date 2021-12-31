import axios from 'axios';
const processDASService = require('./processDAS');

const processProductsXML = async (dataProducts) => {  
  const cest = await axios.get('/api/productscest');
  const listCest = cest.data;  
  const allCest = listCest.map((item) => item.cest); // cest dos produtos substitutos, conforme site da sefaz rs
  const productsSubstitutes = ([...allCest]) => { // compara todos os CEST dos produtos COMPRADOS com a tabela de produtos CEST
    return dataProducts.filter(product => allCest.includes(product.cest));
  }

  const filterProductdSubstitutes = await productsSubstitutes(allCest); // chama a função

  filterProductdSubstitutes.forEach(item => {
    axios.post('/api/purchasesSubstitutes', { item })
  });

  dataProducts.forEach(item => {
    axios.post('/api/products', { item })
  });

  window.location.reload() // atualiza a pagina
};

const processProductsXLS = async (dataProducts) => {  
  const cean = await axios.get('/api/getPurchasesSubstitutes');
  const listCean = cean.data;
  const allCean = listCean.map((item) => item.cean); // cean dos produtos substitutos comprados
  const productsSubstitutes = ([...allCean]) => { // compara todos os CEST dos produtos COMPRADOS com a tabela de produtos CEST
    return dataProducts.filter(product => allCean.includes(product.cean));
  }

  const filterProductdSubstitutes = await productsSubstitutes(allCean); // chama a função

  await filterProductdSubstitutes.forEach(item => {
    axios.post('/api/salesSubstitutes', { item })
  });

  await dataProducts.forEach(item => {
    axios.post('/api/salesAll', { item })
  });

  processDASService.calculateDAS(dataProducts, filterProductdSubstitutes)
};

module.exports = {
  processProductsXML,
  processProductsXLS
};