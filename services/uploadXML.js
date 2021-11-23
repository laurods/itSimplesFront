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
  const dataFile = new FormData();
  dataFile.append('file', uploadedFile.file);
  axios.post('/api/xmlcompras', dataFile).then(res => {
    console.log(res.status);                         
  });

};

/* Fim processXML*/

module.exports = {
    handleUpload,
};