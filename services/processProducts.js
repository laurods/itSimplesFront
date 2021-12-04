import axios from 'axios';

const processProducts = async (dataProducts) => {
  console.log('aki products');
  const cest = await axios.get('/api/productscest');
  const listCest = cest.data;  // cest dos produtos substitutos, conforme site da sefaz rs
  const productsSubstitutes = ([...listCest]) => { // compara todos os CEST dos produtos COMPRADOS com a tabela de produtos CEST
    return dataProducts.filter(product => listCest.includes(product.cest));
  }

  const filterProductdSubstitutes = productsSubstitutes(listCest); // chama a função
  console.log(filterProductdSubstitutes);

  
};

module.exports = {
  processProducts
};