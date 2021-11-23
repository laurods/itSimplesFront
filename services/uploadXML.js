const processXMLService = require('./processXML');

const handleUpload = (files) => {
    const uploadedFiles = files.map((file) => ({
      file,
      preview:URL.createObjectURL(file)
      
    }));

    uploadedFiles.forEach(getXML);
    
  };

const getXML = async (uploadedFile) => { 
  axios
      .get(`${uploadedFile.preview}`)
      .then(({ data }) => {
        processXMLService.processXML(data);
      })
      .catch(err => console.log(err));

};

module.exports = {
    handleUpload,
};