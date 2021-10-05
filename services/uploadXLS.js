import api from './api';

const handleUpload = (files) => {
    const uploadedFiles = files.map((file) => ({
      file,
      
    }));
    
    uploadedFiles.forEach(processXML);
    
  };
/* Inicio processXML*/  
const processXML = (uploadedFile) => {
  const data = new FormData();
  data.append('file', uploadedFile.file);
  api.post('xls/sales', data).then(res => {
    console.log(res);
    console.log(res.data)                      
  })
  .catch((error) => {
    console.log(error.res.data);
    console.log(error.res.status);
    console.log(error.res.headers);
  });
};

/* Fim processXML*/

module.exports = {
    handleUpload,
};