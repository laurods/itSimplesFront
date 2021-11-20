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
  console.log(uploadedFile)



};

/* Fim processXML*/

module.exports = {
    handleUpload,
};