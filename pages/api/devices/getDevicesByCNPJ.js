const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB_URI
const client = new MongoClient(url);
 
 // The database to use
 const dbName = process.env.MONGODB_DB;
                      
 module.exports = async (req, res) => {
    try {
        const { cnpj } = req.body;
         await client.connect();         
         const db = client.db(dbName);
         const col = db.collection("devices");
         const devices = await col.find(
            { cnpj },
            {projection: { _id: 1, IMEI: 1, Modelo: 1, VLRLOCACAO: 1, Status: 2 }}
         ).toArray();     
         
         res.status(200).json(devices);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
