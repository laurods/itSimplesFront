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
         const financeiro = db.collection("financeiro");
         financeiro.deleteOne( { "_id" : ObjectId("61e5b1d094726869f4b35aa4") } );

         res.status(200).json({msg: "ok"});

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
