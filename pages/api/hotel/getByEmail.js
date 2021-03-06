const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB_URI
const client = new MongoClient(url);
 
 // The database to use
 const dbName = process.env.MONGODB_DB;
                      
 module.exports = async (req, res) => {
    try {
        const { email } = req.body;
         await client.connect();         
         const db = client.db(dbName);
         const col = db.collection("people");
         const tenant = await col.find(
            { email },
            {projection: { 
                _id: 1,
                name: 1,
                email: 1,
            }}
            ).toArray();     
         
         res.status(200).json(tenant);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
