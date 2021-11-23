const parseString = require('xml2js').parseString;

export default async (req, res) => { 
  if (req.method === 'POST') {
    // Process a POST request
    //const xml = req.file.buffer;
    const xml = "<root>Hello xml2js!</root>"
    const parseFromXML = (xml) => {
      return new Promise((resolve, reject) => {
        parseString(xml, { mergeAttrs: true, explicitArray: false}, function (err, ok) {
          if (err) return resolve(err);
          return resolve(ok);
        });
      });
    };

    const dataNF = await parseFromXML(xml);
    res.status(200).json({ data: dataNF });

  } else {
    // Handle any other HTTP method
    res.status(405).json({ error: `Method '${req.method}' Not Allowed` });
  }
};
