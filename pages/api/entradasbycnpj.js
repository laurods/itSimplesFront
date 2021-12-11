const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const url = process.env.MONGODB_URI
const client = new MongoClient(url);
 
 // The database to use
 const dbName = process.env.MONGODB_DB;
                      
 module.exports = async (req, res) => {
    try {
        const { cnpj } = req.body;
        console.log(cnpj); 
         await client.connect();         
         const db = client.db(dbName);
         const col = db.collection("purchasesSubstitutes");
         const movimentos = await col.aggregate(
            [
                { $match : { cnpjDestinatario: "$cnpj" } },
                {
                    $addFields: {
                        vlrST: {$toDouble: "$vICMSST"}
                    }            
                }, 
                {
                    $group: {
                    _id: "$movimento",
                    total: {
                        $sum: "$vlrST"
                        }   
                    }
                }
            ]
         ).toArray();
         //const movimentos = await col.find({ cnpjDestinatario: cnpj}).toArray();
         
         res.status(200).json(movimentos);

        } catch (err) {
         console.log(err.stack);
     }
 
     finally {
        await client.close();
    }
}
