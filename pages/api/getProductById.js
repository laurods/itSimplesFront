const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB_URI
const client = new MongoClient(url);
 
 // The database to use
 const dbName = process.env.MONGODB_DB;
                      
 module.exports = async (req, res) => {
    try {
        const { id } = req.body;
        console.log('id na API');
        console.log(id); 
         await client.connect();         
         const db = client.db(dbName);
         const col = db.collection("products");
         const product = await col.find({ _id: ObjectId('60a50545bf62f51177b28d56') }).toArray();
         
         res.status(200).json(product);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
