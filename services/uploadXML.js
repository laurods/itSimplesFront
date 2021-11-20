//import api from './api';
import axios from 'axios';

const handleUpload = (files) => {
    const uploadedFiles = files.map((file) => ({
      file,
      preview:URL.createObjectURL(file)
      
    }));

    uploadedFiles.forEach(processXML);
    
  };
/* Inicio processXML*/  
const processXML = (uploadedFile) => {   
  console.log('aki 2')
  console.log(uploadedFile.preview)
};

/* Fim processXML*/

module.exports = {
    handleUpload,
};