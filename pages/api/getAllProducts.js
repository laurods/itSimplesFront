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
         const col = db.collection("products");
         const products = await col.find({}).toArray();     
         
         res.status(200).json(products);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
