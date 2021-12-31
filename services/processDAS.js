import axios from 'axios';

const calculateDAS = async (dataProducts, filterProductdSubstitutes) => {
     const totalSalesST = filterProductdSubstitutes.reduce((sum, product) => { // total dos produtos ST vendidos
        return sum + parseFloat(product.total);
      }, 0);
      const totalSales = dataProducts.reduce((sum, product) => { // total de todos os produtos vendidos
        return sum + parseFloat(product.total);
    }, 0);


    const dataDAS = {
        movimento: dataProducts[0].movimento,
        totalSalesST: totalSalesST.toFixed(2), 
        totalSales: totalSales.toFixed(2)
    }
    console.log('total sales')
    console.log(totalSales)
    
    console.log('total substitutes')
    console.log(totalSalesST)

    console.log('dataDAS')
    console.log(dataDAS)

    //window.location.reload() // atualiza a pagina
  }

  

  


module.exports = {
    calculateDAS,
};