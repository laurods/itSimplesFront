import axios from 'axios';
const productsServiceModel = require('../models/productsSubstitutes');

const processProducts = async (dataProducts) => {  
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

module.exports = {
  processProducts
};