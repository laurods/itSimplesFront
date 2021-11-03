const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB_URI
const client = new MongoClient(url);
 
 // The database to use
 const dbName = process.env.MONGODB_DB;
                      
 module.exports = async (req, res) => {
    try {
        const { email, password } = req.body; 
         await client.connect();         
         const db = client.db(dbName);

         // Use the collection "people"
         const col = db.collection("people");         
         // Find one document
         const myDoc = await col.findOne({ email });
         if(!myDoc) return res.status(500).json({ message: 'Email incorreto!' });

         res.status(200).json({ myDoc });

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
