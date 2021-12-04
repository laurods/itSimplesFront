import axios from 'axios';

const processProducts = async (dataProducts) => {
  console.log('aki products');
  const cest = await axios.get('/api/productscest');
  const listCest = cest.data;  
  const allCest = listCest.map((item) => item.cest); // cest dos produtos substitutos, conforme site da sefaz rs
  const productsSubstitutes = ([...allCest]) => { // compara todos os CEST dos produtos COMPRADOS com a tabela de produtos CEST
    return dataProducts.filter(product => allCest.includes(product.cest));
  }

  const filterProductdSubstitutes = await productsSubstitutes(listCest); // chama a função
  console.log('lista cest');
  console.log(listCest)
  console.log('all cest');
  console.log(allCest)
  console.log('lista produtos');
  console.log(dataProducts)
  console.log('lista filtro');
  console.log(filterProductdSubstitutes);

  
};

module.exports = {
  processProducts
};