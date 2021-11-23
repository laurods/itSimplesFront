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
  // const dataFile = new FormData();
  // dataFile.append('file', uploadedFile.preview);
  // axios.post('/api/xmlcompras', dataFile).then(res => {
  //   console.log(res.status);
  //   console.log(res.data);                         
  // });
  const text = "<bookstore><book>" +
"<title>Everyday Italian</title>" +
"<author>Giada De Laurentiis</author>" +
"<year>2005</year>" +
"</book></bookstore>";
const xhr = new XMLHttpRequest();
const xml = xhr.open("GET", `${uploadedFile.preview}`);


const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xml,"text/xml");

// const parseFromXML = (xml) => {
//   return new Promise((resolve, reject) => {
//     parseString(xml, { mergeAttrs: true, explicitArray: false}, function (err, ok) {
//       if (err) return resolve(err);
//       return resolve(ok);
//     });
//   });
// };
// const dataNF = await parseFromXML(uploadedFile.preview);
console.log(xmlDoc);
};

/* Fim processXML*/

module.exports = {
    handleUpload,
};