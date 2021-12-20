import readXlsxFile from 'read-excel-file'

const processXLS = async (data) => {
    console.log("aki 1")
    console.log(data)
    
  const arrayXLS = await readXlsxFile(data).then((rows) => {
      const header = rows[0];
      const movimento = header[4];
      const cnpj = header[5];
      console.log(movimento);
      console.log(cnpj);
      // console.log(rows[0]);
      // skip header
      rows.shift();
      const productSold = [];
      rows.forEach((row) => {
        let products = {
          id: row[0],
          name: row[1],
          NCM: row[2],
          CST: row[3],
          CFOP: row[4],
          total: row[5],
        };
        productSold.push(products);

        
    });
    console.log(productSold)
  })
 
 
};

module.exports = {
    processXLS,
};