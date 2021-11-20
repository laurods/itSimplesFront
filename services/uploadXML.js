//import api from './api';
import axios from 'axios';
const parseString = require('xml2js').parseString;

const handleUpload = (files) => {
    const uploadedFiles = files.map((file) => ({
      file,
      preview:URL.createObjectURL(file)
      
    }));

    uploadedFiles.forEach(processXML);
    
  };
/* Inicio processXML*/  
const processXML = async (uploadedFile) => {   
  console.log('aki 2')
  console.log(uploadedFile);
  const xml = uploadedFile;
  const parseFromXML = (xml) => {
    return new Promise((resolve, reject) => {
      parseString(xml, { trim: true, mergeAttrs: true, explicitArray: false}, function (err, ok) {
        if (err) return resolve(err);
        return resolve(ok);
      });
    });
  };

  const data = await parseFromXML(xml);
  console.log(data);
};

/* Fim processXML*/

module.exports = {
    handleUpload,
};