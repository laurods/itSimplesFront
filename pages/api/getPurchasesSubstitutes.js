const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB_URI
const client = new MongoClient(url);
 
 // The database to use
 const dbName = process.env.MONGODB_DB;
                      
 module.exports = async (req, res) => {
    try {
         await client.connect();         
         const db = client.db(dbName);
         const col = db.collection("purchasesSubstitutes");
         const products = await col.find(
             { },
		    { projection: {
                cean: 1,
                cest: 0,
                cfop: 0,
                cnpjDestinatario: 0,
                cnpjEmitente: 0,
                cofins: 0,
                movimento: 0,
                name : 0,
                ncm: 0,
                nf: 0,
                pis: 0,
                vICMSST: 0,
			   _id: 0
            }
			}
         ).toArray();     
         
         res.status(200).json(products);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
