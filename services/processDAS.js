import axios from 'axios';

const calculateDAS = async (dataProducts, filterProductdSubstitutes) => {
    const aliquotaSimples = 0.0901;
    const percentualICMSnoDAS = 0.3350;
    const pencentualdaCOFINSnoDAS = 0.1274;
    const percentualdoPISnaDAS = 0.0276;
    const allProducts = await axios.get('/api/getAllProducts');
    const listAllProducts = allProducts.data; // lista de todos os produtos
    const listMonophasic = listAllProducts.filter(product => product.cst == "04");// produtos monofásicos 

    const productsMonophasics = ([...listMonophasic]) => { // compara todos os cean dos produtos COMPRADOS que são monofásicos, com o cean da tabela de produtos vendidos
        return dataProducts.filter(product => listMonophasic.includes(product.cean));
      }
     const filterProductdMonophasic = await productsMonophasics(listMonophasic); // chama a função
     
     const totalMonophasic = filterProductdMonophasic.reduce((sum, product) => { // total dos produtos monofásicos vendidos
        return sum + parseFloat(product.total);
      }, 0);

     const totalSalesST = filterProductdSubstitutes.reduce((sum, product) => { // total dos produtos ST vendidos
        return sum + parseFloat(product.total);
      }, 0);
      const totalSales = dataProducts.reduce((sum, product) => { // total de todos os produtos vendidos
        return sum + parseFloat(product.total);
    }, 0);

    
    const DASsemDeducoes = (totalSales * aliquotaSimples).toFixed(2);
    const ICMSindevidoReferenteProdutosST = ((totalSalesST * aliquotaSimples) * percentualICMSnoDAS).toFixed(2);
    const COFINSindevidaReferenteProdutosMonofasicos = ((totalMonophasic * aliquotaSimples) * pencentualdaCOFINSnoDAS).toFixed(2);
    const PISindevidoReferenteProdutosMonofasicos = ((totalMonophasic * aliquotaSimples) * percentualdoPISnaDAS).toFixed(2);
    const DAScomDeducoes = (DASsemDeducoes - ICMSindevidoReferenteProdutosST - COFINSindevidaReferenteProdutosMonofasicos - PISindevidoReferenteProdutosMonofasicos).toFixed(2);

    const dataDAS = {
        movimento: dataProducts[0].movimento,
        cnpj: dataProducts[0].cnpj,          
        totalSales: totalSales.toFixed(2),
        totalSalesST: totalSalesST.toFixed(2),
        DASsemDeducoes,
        DAScomDeducoes,
        reducao: (DASsemDeducoes - DAScomDeducoes).toFixed(2),
        ICMSindevidoReferenteProdutosST,
        COFINSindevidaReferenteProdutosMonofasicos,
        PISindevidoReferenteProdutosMonofasicos,
        control: `${dataProducts[0].movimento}.${dataProducts[0].cnpj}`

    }
    console.log('total monofasico')
    console.log(totalMonophasic)
    console.log('filtro')
    console.log(filterProductdMonophasic)
    console.log('lista')
    console.log(listMonophasic)
    
    await axios.post('/api/das', { dataDAS })
    
    //window.location.reload() // atualiza a pagina
  }

  

  


module.exports = {
    calculateDAS,
};