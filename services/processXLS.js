import readXlsxFile from 'read-excel-file'
const processProductsService = require('./processProducts');

const processXLS = async (data) => {
    console.log("aki 1")
    console.log(data)
    
  const arrayXLS = await readXlsxFile(data).then((rows) => {
      const header = rows[0];
      const movimento = header[3];
      const cnpj = header[4];
      console.log(movimento);
      console.log(cnpj);
      // console.log(rows[0]);
      // skip header
      rows.shift();
      const productSold = [];
      rows.forEach((row) => {
        let products = {
          cean: String(row[0]),
          name: row[1],
          total: row[2],
        };
        productSold.push(products);

        
    });
    console.log('xls not filtered')
    console.log(productSold)
    processProductsService.processProductsXLS(productSold);
  })
 
 
};

module.exports = {
    processXLS,
};