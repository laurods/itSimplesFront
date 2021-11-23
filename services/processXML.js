const processNFService = require('./processNF');
const parseString = require('xml2js').parseString;

const processXML = async (data) => {
  const xml = data;
  const parseFromXML = (xml) => {
    return new Promise((resolve, reject) => {
      parseString(xml, { mergeAttrs: true, explicitArray: false}, function (err, ok) {
        if (err) return resolve(err);
        return resolve(ok);
      });
    });
  };

  const dataNF = await parseFromXML(xml);
  processNFService.processNF(dataNF);  
  
};

module.exports = {
  processXML,
};