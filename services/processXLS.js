import readXlsxFile from 'read-excel-file'
const processProductsService = require('./processProducts');

const processXLS = async (data) => {
    console.log("aki 1")
    console.log(data)
    
  const arrayXLS = await readXlsxFile(data).then((rows) => {
      const header = rows[0];
      const movimento = header[3];
      const cnpj = header[4];
      // skip header
      rows.shift();
      const productSold = [];
      rows.forEach((row) => {
        let products = {
          movimento,
          cnpj,
          cean: String(row[0]),
          name: row[1],
          total: row[2],
          control: `${movimento}.${String(row[0])}`
        };
        productSold.push(products);

        
    });
   
    processProductsService.processProductsXLS(productSold);
  })
 
 
};

const processXLS2 = async (data) => {
  console.log("aki 2")
  console.log(data)
  
const arrayXLS = await readXlsxFile(data).then((rows) => {    
    // skip header
    rows.shift();
    const products = [];
    rows.forEach((row) => {
      let product = { 
        codigo: String(row[0]),
        cean: String(row[1]),
        grupo: row[2],
        produto: row[3],
        preco: row[4],
        custo: row[5],
        ficha: row[6],
        cnpj: row[7]
      };
      products.push(product);

      
  });
   console.log(products)
  //processProductsService.processProductsXLS(productSold);
})


};

module.exports = {
    processXLS,
    processXLS2,
};