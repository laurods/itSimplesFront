const processXLSService = require('./processXLS');
const handleUpload = (files) => {
    const uploadedFiles = files.map((file) => ({
      file,
      
    }));
    
    uploadedFiles.forEach(processFile);
    
  };
  
const processFile = (uploadedFile) => {  
  processXLSService.processXLS(uploadedFile.file) /*processa vendas via Xls padrão*/
  //processXLSService.processXLS2(uploadedFile.file) processa cadastro basico de produtos (inventário inicial)
};



module.exports = {
    handleUpload,
};