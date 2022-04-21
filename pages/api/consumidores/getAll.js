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
         const col = db.collection("consumidores");
         const consumidores = await col.find(
             {},
             {projection: { 
                 _id: 0, 
                 telefone: 1, 
                 nome: 1,
                 rua: 1, 
                 numero: 1,
                 complemento: 1,
                 bairro: 1,
                 txEntrega: 1,
                 }
                }
             ).toArray();     
         
         res.status(200).json(consumidores);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
