const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB_URI
const client = new MongoClient(url);
 
 // The database to use
 const dbName = process.env.MONGODB_DB;
                      
 module.exports = async (req, res) => {
    try {
        const { user } = req.body;
         await client.connect();         
         const db = client.db(dbName);
         const col = db.collection("tenant");
         const tenants = await col.find(
            { users: {$elemMatch: {user}} },
            {projection: { _id: 0, name: 1, cnpj: 1 }}
            ).toArray();     
         
         res.status(200).json(tenants);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
