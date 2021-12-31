import axios from 'axios';

const calculateDAS = async (dataProducts, filterProductdSubstitutes) => {
    const aliquotaSimples = 0.0901;
    const deducaoICMS = 0.3350;
    const deducaoCofins = 0.1274;
    const deducaoPis = 0.0276;

     const totalSalesST = filterProductdSubstitutes.reduce((sum, product) => { // total dos produtos ST vendidos
        return sum + parseFloat(product.total);
      }, 0);
      const totalSales = dataProducts.reduce((sum, product) => { // total de todos os produtos vendidos
        return sum + parseFloat(product.total);
    }, 0);

    const simplesSemDeducoes = ((totalSales) * aliquotaSimples).toFixed(2);
    const baseCalculoSubstitutosTributariosParaDeducoes = (totalSalesST * aliquotaSimples).toFixed(2);
    const valorDeducaoICMS = baseCalculoSubstitutosTributariosParaDeducoes * deducaoICMS;
    const simplesComDeducoes = ((totalSales - totalSalesST) * aliquotaSimples).toFixed(2);

    const dataDAS = {
        movimento: dataProducts[0].movimento,         
        totalSales: totalSales.toFixed(2),
        totalSalesST: totalSalesST.toFixed(2),
        simplesSemDeducoes,
        simplesComDeducoes,
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