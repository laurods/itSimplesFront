const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB_URI
const client = new MongoClient(url);
 
 // The database to use
 const dbName = process.env.MONGODB_DB;
                      
 module.exports = async (req, res) => {
    try {
        const { filterProductdSubstitutes } = req.body;
         await client.connect();
         const db = client.db(dbName);
         const col = db.collection("purchasesSubstitutes");
         await col.insertMany(filterProductdSubstitutes);
         res.status(200).json({msg: 'Success'});

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

