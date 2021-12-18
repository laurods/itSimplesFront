const processXLSService = require('./processXLS');
const handleUpload = (files) => {
    const uploadedFiles = files.map((file) => ({
      file,
      
    }));
    
    uploadedFiles.forEach(processFile);
    
  };
  
const processFile = (uploadedFile) => {  
  processXLSService.processXLS(uploadedFile.file)
};



module.exports = {
    handleUpload,
};