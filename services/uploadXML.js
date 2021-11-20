//import api from './api';
import axios from 'axios';
const parseString = require('xml2js').parseString;
const handleUpload = (files) => {
    const uploadedFiles = files.map((file) => ({
      file,
      
    }));
    
    uploadedFiles.forEach(processXML);
    
  };
/* Inicio processXML*/  
const processXML = (uploadedFile) => {
  const xml = uploadedFile;
  console.log(xml)
  // parseString(xml, {trim: true}, function (err, result) {
  //   console.dir(result);
  // });



};

/* Fim processXML*/

module.exports = {
    handleUpload,
};