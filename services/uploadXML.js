//import api from './api';
import axios from 'axios';
const parseString = require('xml2js').parseString;
const XMLParser = require('react-xml-parser');

const handleUpload = (files) => {
    const uploadedFiles = files.map((file) => ({
      file,
      
    }));

    uploadedFiles.forEach(processXML);
    
  };
/* Inicio processXML*/  
const processXML = (uploadedFile) => {  
  const xml = new XMLParser().parseFromString(uploadedFile);
  console.log('aki 2')
  console.log(xml)



};

/* Fim processXML*/

module.exports = {
    handleUpload,
};