//import api from './api';
import axios from 'axios';

const handleUpload = (files) => {
    const uploadedFiles = files.map((file) => ({
      file,
      
    }));

    uploadedFiles.forEach(processXML);
    
  };
/* Inicio processXML*/  
const processXML = (uploadedFile) => {   
  console.log('aki 2')
  const xml = URL.createObjectURL(uploadedFile)
  console.log(xml)
};

/* Fim processXML*/

module.exports = {
    handleUpload,
};