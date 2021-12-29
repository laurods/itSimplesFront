const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB_URI
const client = new MongoClient(url);
 
 // The database to use
 const dbName = process.env.MONGODB_DB;
                      
 module.exports = async (req, res) => {
    try {
        const { cnpj } = req.body;
         await client.connect();         
         const db = client.db(dbName);
         const substitutes = db.collection("salesSubstitutes");
         const salesSubstitutes = await substitutes.aggregate(
            [
                { $match : { cnpj: `${cnpj}` } },
                
                {
                    $group: {
                    _id: "$movimento",
                    total: {
                        $sum: "$total"
                        }   
                    }
                }
            ]
         ).toArray();
         
         res.status(200).json(salesSubstitutes);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
