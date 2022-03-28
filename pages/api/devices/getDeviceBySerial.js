const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB_URI
const client = new MongoClient(url);
 
 // The database to use
 const dbName = process.env.MONGODB_DB;
                      
 module.exports = async (req, res) => {
    try {
        const { serial } = req.body;        
         await client.connect();         
         const db = client.db(dbName);
         const col = db.collection("devices");
         const device = await col.find(
            { "Serial" : serial },
            {projection: { 
                _id: 1, 
                IMEI: 1, 
                Modelo: 1, 
                VLRLOCACAO: 1, 
                Status: 1,
                Grupo: 1, 
            }
        }
         ).toArray();     
         
         res.status(200).json(device);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
