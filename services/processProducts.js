import axios from 'axios';
const productsServiceModel = require('../models/productsSubstitutes');
const updateEntradasByCNPJ = require('../helpers/updateEntradasByCNPJ')

const processProducts = async (dataProducts) => {
  console.log('aki products');
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
  
  updateEntradasByCNPJ(); // atualiza a variável entradasByCNPJ do AutContext. Atualiza a lista de entradas no dashboard 
  
};

module.exports = {
  processProducts
};