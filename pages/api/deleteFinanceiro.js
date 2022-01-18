const { MongoClient, ObjectId} = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB_URI
const client = new MongoClient(url);
 
 // The database to use
 const dbName = process.env.MONGODB_DB;
                      
 module.exports = async (req, res) => {
    try {        
        const { id } = req.body;
         await client.connect();         
         const db = client.db(dbName);
         db.collection("financeiro").deleteOne( { "_id" : ObjectId("61e6c0017a5a0f15c8bf0f96") } );         

         res.status(200).json({msg: "ok"});

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
