import axios from 'axios';

const processProducts = async (dataProducts) => {
  console.log('aki products');
  console.log(dataProducts);
  const cest = await axios.get('/api/productscest');
  console.log(cest.data);

  
};

module.exports = {
  processProducts
};