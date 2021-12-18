import readXlsxFile from 'read-excel-file'

const processXLS = async (data) => {
    console.log("aki 1")
    console.log(data)
    
  const arrayXLS = await readXlsxFile(data).then((rows) => {
   
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