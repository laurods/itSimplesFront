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
const processXML = (uploadedFile) => {   
  console.log('aki 2')
  console.log(uploadedFile);
  const xml = uploadedFile.file;
  const parseFromXML = (xml) => {
    return new Promise((resolve, reject) => {
      parseString(xml, { mergeAttrs: true, explicitArray: false}, function (err, ok) {
        if (err) return resolve(err);
        return resolve(ok);
      });
    });
  };
  
  const data = parseFromXML(xml);
  //const nf = await data.nfeProc.NFe.infNFe.ide.nNF;
  console.log(data);


};

/* Fim processXML*/

module.exports = {
    handleUpload,
};