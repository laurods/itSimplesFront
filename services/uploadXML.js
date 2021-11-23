import axios from 'axios';
const parser = require('xml2js').parseString;
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
  axios
      .get(`${uploadedFile.preview}`)
      .then(({ data }) => {
        const stringifyData = parse(data);
        console.log(stringifyData);
      })
      .catch(err => console.log(err));

};

/* Fim processXML*/

module.exports = {
    handleUpload,
};