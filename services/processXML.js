import axios from 'axios';
const parseString = require('xml2js').parseString;
/* Inicio processXML*/  
const processXML = async (data) => {
  const xml = data;
  console.log('aki 3')
  console.log(xml);
  const parseFromXML = (xml) => {
    return new Promise((resolve, reject) => {
      parseString(xml, { mergeAttrs: true, explicitArray: false}, function (err, ok) {
        if (err) return resolve(err);
        return resolve(ok);
      });
    });
  };

  const dataNF = await parseFromXML(xml);
  console.log('aki 4')
  console.log(dataNF)
  
  
  
};

/* Fim processXML*/

module.exports = {
  processXML,
};