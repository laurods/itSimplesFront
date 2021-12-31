import axios from 'axios';

const calculateDAS = async (dataProducts, filterProductdSubstitutes) => {
    
    const totalSalesST = filterProductdSubstitutes.reduce((sum, product) => { // total dos produtos ST vendidos
        return sum + parseFloat(product.total);
      }, 0);
      const totalSales = dataProducts.reduce((sum, product) => { // total de todos os produtos vendidos
        return sum + parseFloat(product.total);
    }, 0);

    console.log('total sales')
    console.log(totalSales)
    
    console.log('total substitutes')
    console.log(totalSalesST)
    //window.location.reload() // atualiza a pagina
  }

  

  


module.exports = {
    calculateDAS,
};