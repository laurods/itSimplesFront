const { MongoClient , ObjectId } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB_URI
const client = new MongoClient(url);
 
 // The database to use
 const dbName = process.env.MONGODB_DB;
                      
 module.exports = async (req, res) => {
    try {
        const  { objEstoque } = req.body;
        const item = objEstoque;

         await client.connect();
         const db = client.db(dbName);
         const col = db.collection("estoque");
         const p = await col.insertOne( item );

         const col2 = db.collection("financeiro");
         const p2 = await col.updateOne( 
            { _id: "61def07287dd7eeaa74253a7" },
            {
            $set: {
                baixouEstoque: "sim",
            },

            }
         );

         res.status(200).json({ msg: item });

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}

