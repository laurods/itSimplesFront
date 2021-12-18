import api from './api';

const handleUpload = (files) => {
    const uploadedFiles = files.map((file) => ({
      file,
      
    }));
    
    uploadedFiles.forEach(processFile);
    
  };
  
const processFile = (uploadedFile) => {
  console.log(uploadedFile.file);
  
};



module.exports = {
    handleUpload,
};