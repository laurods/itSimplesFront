import axios from 'axios';
const productsServiceModel = require('../models/productsSubstitutes');

const processProducts = async (dataProducts) => {
  console.log('aki products');
  const cest = await axios.get('/api/productscest');
  const listCest = cest.data;  
  const allCest = listCest.map((item) => item.cest); // cest dos produtos substitutos, conforme site da sefaz rs
  const productsSubstitutes = ([...allCest]) => { // compara todos os CEST dos produtos COMPRADOS com a tabela de produtos CEST
    return dataProducts.filter(product => allCest.includes(product.cest));
  }

  const filterProductdSubstitutes = await productsSubstitutes(allCest); // chama a função
  
  axios.post('/api/purchasesSubstitutes', {filterProductdSubstitutes}).then(res => {
    console.log(res);
    console.log(res.data);
  });

  console.log('lista cest');
  console.log(listCest)
  console.log('all cest');
  console.log(allCest)
  console.log('lista produtos');
  console.log(dataProducts)
  console.log('lista substitutos');
  console.log(filterProductdSubstitutes);
 
  
};

module.exports = {
  processProducts
};