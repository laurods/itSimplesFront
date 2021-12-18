import readXlsxFile from 'read-excel-file'

const processXLS = async (data) => {
    console.log("aki 1")
    console.log(data)
    
  arrayXLS = await readXlsxFile(data).then((rows) => {
    console.log("aki 2")
      console.log(rows)
   
  })
 
 
};

module.exports = {
    processXLS,
};