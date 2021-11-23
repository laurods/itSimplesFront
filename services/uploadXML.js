import axios from 'axios';
//import xml2js from "xml2js";
const parser = require('xml2js').parseString;
const processXMLService = require('./processXML');

const handleUpload = (files) => {
    const uploadedFiles = files.map((file) => ({
      file,
      preview:URL.createObjectURL(file)
      
    }));

    uploadedFiles.forEach(processXML);
    
  };

/* Inicio processXML*/  
const processXML = async (uploadedFile) => {  
  //const parse = xml2js.parseString; 
  console.log('aki 2')
  axios
      .get(`${uploadedFile.preview}`)
      .then(({ data }) => {
        //const stringifyData = parser(data);
        console.log(data);
        processXMLService.processXML(data);
      })
      .catch(err => console.log(err));

};

/* Fim processXML*/

module.exports = {
    handleUpload,
};