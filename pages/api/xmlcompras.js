const parseString = require('xml2js').parseString;    
const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB_URI
const client = new MongoClient(url);
 
 // The database to use
 const dbName = process.env.MONGODB_DB;
                      
 module.exports = async (req, res) => {
    try {
        //xxxxxxxxxxxxxxxxxxxxxx
        const xml = req.file.buffer;
        console.log(xml)
        const parseFromXML = (xml) => {
            return new Promise((resolve, reject) => {
              parseString(xml, { mergeAttrs: true, explicitArray: false}, function (err, ok) {
                if (err) return resolve(err);
                return resolve(ok);
              });
            });
          };
          const data = await parseFromXML(xml);
          console.log('aki data');
          res.status(200).json({msg: 'teste'});
        //xxxxxxxxxxxxxxxxxxxxxx
        // const { user } = req.body;
        // console.log(user); 
        //  await client.connect();         
        //  const db = client.db(dbName);
        //  const col = db.collection("cnpj");
        //  const cnpjs = await col.find(
        //     { user },
        //     {projection: { _id: 0, name: 1, cnpj: 1 }}
        //     ).toArray();     
         
         //res.status(200).json(cnpjs);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
       // await client.close();
       console.log('finalizou');
    }
}
