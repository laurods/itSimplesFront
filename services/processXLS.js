import readXlsxFile from 'read-excel-file'

const processXLS = async (data) => {
  arrayXLS = await readXlsxFile(data[0]).then((rows) => {
      console.log(rows)
    // `rows` is an array of rows
    // each row being an array of cells.
  })
 
 
};

module.exports = {
    processXLS,
};