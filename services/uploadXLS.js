const processXLSService = require('./processXLS');
const handleUpload = (files) => {
    const uploadedFiles = files.map((file) => ({
      file,
      
    }));
    
    uploadedFiles.forEach(processFile);
    
  };
  
const processFile = (uploadedFile) => {
  console.log("aki 4");  
  processXLSService.processXLS(uploadedFile.file)
};



module.exports = {
    handleUpload,
};